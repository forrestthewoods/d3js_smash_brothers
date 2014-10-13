function build_smash_chart(data_file, group) {

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
    var svg_root = d3.select("body").append("svg")
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

    // Load and process json file
    d3.json(data_file, function(error, data) {

        // Add one tick per date entry to x-axis
        xAxis.ticks(data.dates.length)
            .tickFormat(function(d) { return data.dates[d]; });


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
        var all_rankings = data.characters
            .filter(function(entry) { 
                return data.groups[group].indexOf(entry.name) != -1; })
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
                        .domain(data.characters.map(function(entry) { return entry.name; }))
                        .range(data.characters.map(function(entry) { return entry.color;} ));


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
                .text("ranking");

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
    });
}


