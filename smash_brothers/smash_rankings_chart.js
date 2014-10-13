function build_smash_chart(select_target, group) {

    // Define size of graph area
    var margin = {top: 30, right: 80, bottom: 80, left: 110},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

    // Define X/Y range for domain->range mappings
    var x = d3.scale.linear()
            .range([0, width]);

    var y = d3.scale.linear()
            .range([0, height]);

    // X-Axis along bottom of chart
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    // Y-Axis displayed by right edge of chart
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("right")
        .ticks(5);

    // Template (I guess?) for making lines. We'll have one line per entry
    var line = d3.svg.line()
        .interpolate("linear")
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.ranking); });

    // Outer container SVG element to enable responsive magic
    var svg_root = d3.select(select_target).append("svg")
        .attr("viewBox", "0 0 960 500")
        .attr("preserveAspectRatio", "none");

    // SVG that will be used for D3 operations
    var svg = svg_root.append("svg")
    //var svg = d3.select("body").append("svg")
            //.attr("width", width + margin.left + margin.right)
            //.attr("height", height + margin.top + margin.bottom)
            //.attr("viewBox", "0 0 960 500")
            //.attr("preserveAspectRatio", "xMinYMid meet")
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add one tick per date entry to x-axis
    xAxis.ticks(smash_data.dates.length)
        .tickFormat(function(d) { return smash_data.dates[d]; });


    // Output format of all_rankings:
    /*
        [
            {
                "character":"pikachu",
                "color":"#ffed6f",
                "values:[
                    { "date": 0, "ranking":13 },
                    { "date": 1, "ranking":17 },
                    { "date": 2, "ranking":16 },
                ]
            }
        ]
    */
    var all_rankings = smash_data.characters
        .filter(function(entry) { 
            return smash_data.groups[group].indexOf(entry.name) != -1; })
        .map(function(entry) {
            return {
                character: entry.name,
                color: entry.color,
                values: entry.rankings.map(function(ranking, index){
                    return { date: index, ranking: ranking };
                })
            }
        });

    // Remember, domain->range. Define x axis domain
    var x_domain = [
        d3.min(all_rankings, function(c) { return d3.min(c.values, function(v) { return v.date; }); }),
        d3.max(all_rankings, function(c) { return d3.max(c.values, function(v) { return v.date; }); })
    ];
    x.domain(x_domain);

    // Define y axis domain
    var y_domain = [1, 26];
    y.domain(y_domain);

    // Define domain->range for character_name -> color
    var colors = d3.scale.ordinal()
                    .domain(smash_data.characters.map(function(entry) { return entry.name; }))
                    .range(smash_data.characters.map(function(entry) { return entry.color;} ));


    // Setup x-axis
    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height + 10) + ")")    // shifted down slightly
            .call(xAxis)
            .selectAll(".tick text")
                .style("text-anchor", "mid");   // default is mid, but start/end are other choices

    // Setup y-axis
    svg.append("g")
            .attr("class", "y axis axisRight")
            .attr("transform", "translate( " + (width + 10) + ",0)")
            .call(yAxis)
        .append("text")
            .attr("y", -14)
            .style("text-anchor", "left")
            .text("Ranking");

    // Bind all_rankings data to DOM
    var character_ranks = svg.selectAll(".character_ranks")
            .data(all_rankings)
        .enter().append("g")
            .attr("class", "character_ranks");

    // Add a colored line for each character
    character_ranks.append("path")
            .attr("class", "rank_line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { return colors(d.character); })

    // Add an invisible 'fat' line per character for handling mouse over events
    character_ranks.append("path")
        .attr("class", "hover_line")
        .attr("d", function(d) { return line(d.values); })
        .on("mouseover", function(d) { 

            // Increase hovered line size. Set others to grey
            for (var i = 0; i < paired_lines.length; ++i) {
                if (paired_lines[i].hover == this)
                    d3.select(paired_lines[i].color).style("stroke-width", "3.5px");
                else 
                    d3.select(paired_lines[i].color).style("stroke", "#d3d3d3");
            } 
        })
        .on("mouseout", function(d) { 

            // Revert line size and color
            for (var i = 0; i < paired_lines.length; ++i) {
                var color_line = d3.select(paired_lines[i].color);
                color_line.style("stroke-width", "1.5px");
                color_line.style("stroke", all_rankings[i].color);
            }
        });

    // Add text for each character
    character_ranks.append("text")
            .datum(function(d) { return {name: d.character, value: d.values[0]}; })
            .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.ranking) + ")"; })
            .attr("x", -10)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return d.name; });


    // Pair up the colored line and hover line in an object per character 
    /*
        Paired lines = [
            {
                color = SVGPathElement,
                hover = SVGPathElement
            },
            {
                color = SVGPathElement,
                hover = SVGPathElement
            },
            ...  
        ]
    */
    var paired_lines = svg.selectAll(".rank_line")[0].map( function(entry) { return { color: entry } } );
    var hover_lines = svg.selectAll(".hover_line")[0];
    for (var i = 0; i < hover_lines.length; ++i)
        paired_lines[i].hover = hover_lines[i];
}

// Data for chart
var smash_data = {

    // Non-even distribution of dates represented by ranks
    "dates" : [
        "Oct '02",
        "Dec '02",
        "June '03",
        "July '03",
        "Oct '03",
        "April '04",
        "March '05",
        "July '06",
        "Oct '08",
        "Sept '09",
        "Dec '10",
        "July '13"
    ],

    // Groupings of characters to enable display of subsets
    "groups":{
        "all" : [ "Sheik", "Falco", "Fox", "Marth", "Samus", "Dr. Mario",
                  "Ganondorf", "Young Link", "Roy", "Kirby", "Mr. Game & Watch",
                  "Pichu", "Bowser", "Link", "Pikachu", "Luigi", "Ness", 
                  "Yoshi", "Mario", "Zelda", "Ice Climbers", "Jigglypuff",
                  "Peach", "Captain Falcon", "Donkey Kong", "Mew Two"
                   ],

        "hall_of_fame": [ "Sheik", "Falco", "Fox", "Marth" ],
        
        "steady": [ "Samus", "Dr. Mario", "Ganondorf", "Mr. Game & Watch", "Pichu", "Bowser" ],

        "journeyman" : [ "Pikachu", "Link", "Young Link", "Yoshi", "Roy" ],

        "busts" : [ "Ness", "Yoshi", "Mario", "Zelda", "Luigi" ],

        "diamonds_in_the_rough" : [ "Ice Climbers", "Jigglypuff", "Peach", 
                    "Captain Falcon", "Donkey Kong", "Mew Two"]
    },

    // Per character data
    "characters" : [
        {
            "name":"Sheik",
            "rankings":[1,1,1,1,1,1,1,3,3,4,4,3],
            "color":"#F0A3FF"
        },
        {
            "name":"Falco",
            "rankings":[2,3,3,5,5,4,5,2,4,2,2,2],
            "color":"#0075DC"
        },
        {
            "name":"Fox",
            "rankings":[3,2,2,2,3,2,2,1,1,1,1,1],
            "color":"#FFA405"
        },
        {
            "name":"Marth",
            "rankings":[4,5,4,3,2,3,3,4,2,5,5,4],
            "color":"#4C005C"
        },
        {
            "name":"Mario",
            "rankings":[5,6,6,7,9,10,11,11,14,12,13,14],
            "color":"#FF0010"
        },
        {
            "name":"Zelda",
            "rankings":[6,14,20,16,19,17,18,20,19,17,18,19],
            "color":"#8F7C00"
        },
        {
            "name":"Samus",
            "rankings":[7,8,9,6,6,7,7,8,9,9,11, 11],
            "color":"#990000"
        },
        {
            "name":"Luigi",
            "rankings":[8,9,8,12,12,12,13,14,12,14,14,13],
            "color":"#2BCE48"
        },
        {
            "name":"Peach",
            "rankings":[9,4,5,4,4,5,4,5,5,6,6,6],
            "color":"#FFCC99"
        },
        {
            "name":"Dr. Mario",
            "rankings":[10,7,7,8,10,11,9,9,10,11,9,9],
            "color":"#808080"
        },
        {
            "name":"Ice Climbers",
            "rankings":[11,13,13,15,18,15,12,7,8,8,8,8],
            "color":"#5EF1F2"
        },
        {
            "name":"Ganondorf",
            "rankings":[12,10,12,10,8,9,10,12,11,10,10,12],
            "color":"#9DCC00"
        },
        {
            "name":"Pikachu",
            "rankings":[13,17,16,13,16,14,17,18,16,13,12,10],
            "color":"#ffed6f"
        },
        {
            "name":"Link",
            "rankings":[14,16,18,18,14,13,14,13,15,16,16,16],
            "color":"#00998F"
        },
        {
            "name":"Captain Falcon",
            "rankings":[15,12,11,11,7,6,6,6,6,7,7,7],
            "color":"#003380"
        },
        {
            "name":"Young Link",
            "rankings":[16,19,19,19,17,18,20,17,17,20,17,15],
            "color":"#94FFB5"
        },
        {
            "name":"Jigglypuff",
            "rankings":[17,11,10,9,11,8,8,10,7,3,3,5],
            "color":"#fb9a99"
        },
        {
            "name":"Ness",
            "rankings":[18,15,15,17,20,20,19,22,21,25,23,23],
            "color":"#FF5005"
        },
        {
            "name":"Yoshi",
            "rankings":[19,18,14,14,13,19,21,19,22,22,21,18],
            "color":"#005C31"
        },
        {
            "name":"Donkey Kong",
            "rankings":[20,21,21,21,22,21,16,15,13,15,15,17],
            "color":"#b15928"
        },
        {
            "name":"Roy",
            "rankings":[21,20,17,20,15,16,15,16,18,19,19,20],
            "color":"#426600"
        },
        {
            "name":"Kirby",
            "rankings":[22,23,23,23,21,22,22,24,25,26,25,26],
            "color":"#FFA8BB"
        },
        {
            "name":"Mr. Game & Watch",
            "rankings":[23,22,22,22,24,23,23,21,20,21,22,22],
            "color":"#191919"
        },
        {
            "name":"Pichu",
            "rankings":[24,26,25,25,25,26,26,25,26,23,26,25],
            "color":"#E6E62E"
        },
        {
            "name":"Bowser",
            "rankings":[25,24,26,26,26,25,24,23,23,24,24,24],
            "color":"#C20088"
        },
        {
            "name":"Mew Two",
            "rankings":[26,25,24,24,23,24,25,26,24,18,20,21],
            "color":"#740AFF"
        }
    ]
};
