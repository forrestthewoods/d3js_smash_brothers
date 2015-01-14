function build_smash_tiers(select_target, platform, bounds) {
    var smash_data_set = smash_data[platform];

    var total_width = bounds.plot.width + bounds.margin.left + bounds.margin.right;
    var total_height = bounds.plot.height + bounds.margin.top + bounds.margin.bottom;

    // dark container SVG element to enable responsive magic
    var div_target = d3.select(select_target)
        .attr("style", "max-width:" + total_width + "px;max-height:" + total_height + "px");

    var svg_root = div_target.append("svg")
        .attr("viewBox", "0 0 " + total_width + " " + total_height)
        .attr("preserveAspectRatio", "");   // $$$FTS - Consider removing entirely. Must test mobile.


    // For converting textual colors in smash data to actual RGBs
    var tier_color_map = {
        red : { "dark" : "#ff0000", "medium" : "#ff7f7f", "light" : "#ffbfbf" },
        orange : { "dark" : "#ff7f00", "medium" : "#ffbf7f", "light" : "#ffdfbf" },
        yellow : { "dark" : "#ffff00", "medium" : "#ffff7f", "light" : "#ffffbf" },
        green : { "dark" : "#00ff00", "medium" : "#7fff7f", "light" : "#bfffbf" },
        cyan : { "dark" : "#00ffff", "medium" : "#bfffff", "light" : "#bfffff" },
        blue : { "dark" : "#0000ff", "medium" : "#7f7fff", "light" : "#bfbfff" },
        magenta : { "dark" : "#ff00ff", "medium" : "#ff7fff", "light" : "#ffbfff" },
        purple : { "dark" : "#7f007f", "medium" : "#bf7fbf", "light" : "#dfbfdf" }
    };

    // Data for tier lists
    var characters = smash_data_set.characters;
    var sorted_characters = new Array(characters.length);

    // Tier Lists to be displayed
    var tier_lists = smash_data_set.tier_lists;

    // Spacing data
    var tier_width = 73;

    var tier_x_whitespace = total_width - (tier_width * tier_lists.length);
    var tier_x_pad = 5;
    var tier_x = (tier_x_whitespace - (tier_x_pad * tier_lists.length - 1)) / 2;

    var tier_title_height = 17;
    var tier_entry_height = 15;
    var tier_entry_base = 5;    // whitespace at bottom of tier element

    var path_data_tier_title = [ 
        ["M", 0, 20],
        ["L", 0, 0],
        ["L", tier_width, 0],
        ["L", tier_width, 20]
    ];

    // Utility function for building path data
    var path_reduce = function(array) {
        return array.reduce(function(sum, element) {
            return sum + " " + element.reduce(function(sum, element) {
                return sum + " " + element
            })
        }, "")
    };
   

    // Create tier lists
    for (var i = 0; i < tier_lists.length; ++i) {
        var tier_list = tier_lists[i];

        // Order characters by ranking for this tier lists
        for (var j = 0; j < characters.length; ++j) {
            var character = characters[j];
            var rankings = character.rankings;
            var rank = rankings[smash_data_set.dates.indexOf(tier_list.date)];
            sorted_characters[rank] = character;
        }

        var tiers = tier_list.tiers;

        var tier_y = 5;
        var tier_y_whitespace = total_height - (characters.length * tier_entry_height) - (tiers.length * (tier_title_height + tier_entry_base)) - tier_y;

        var tier_y_pad = (tier_y_whitespace - tier_y) / (tiers.length - 1);

        var tier_list_group = svg_root.append("g")
            .attr("class", "tier_list")
            .attr("transform", "translate(" + tier_x + ",0)");

        // Create tier list
        for (var j = 0; j < tiers.length; ++j) {
            var tier = tiers[j];
            var tier_size = tier.range[1] - tier.range[0] + 1;
            var tier_height = tier_title_height + (tier_entry_height * tier_size) + tier_entry_base;

            var path_data_title_body = [
                ["M", 0, 20],
                ["L", 0, tier_height],
                ["L", tier_width, tier_height],
                ["L", tier_width, 20]
            ];

            var tier_group = tier_list_group.append("g")
                .attr("class", "smash_tier_group")
                .attr("transform", "translate(" + 0 + "," + tier_y + ")");

            tier_group.append("path")
                .attr("d", path_reduce(path_data_tier_title))
                .attr("stroke", tier_color_map[tier.color].dark)
                .attr("stroke-width", 2)
                .attr("fill", tier_color_map[tier.color].light);

            tier_group.append("path")
                .attr("d", path_reduce(path_data_title_body))
                .attr("stroke", tier_color_map[tier.color].dark)
                .attr("stroke-width", 2)
                .attr("fill", tier_color_map[tier.color].medium);


            tier_group.append("line")
                .attr("x1", 0)
                .attr("x2", tier_width)
                .attr("y1", 20)
                .attr("y2", 20)
                .attr("stroke", tier_color_map[tier.color].dark)
                .attr("stroke-width", 1);

            // Tier title
            tier_group.append("text")
                .attr("class", "smash_tier_title")
                .attr("x", tier_width * .5)
                .attr("y", 15)
                .attr("width", tier_width)
                .style("text-anchor", "middle")
                .text(function(d) { return tier.title });
                    
            // Characters in tier
            for (var rank = tier.range[0]; rank <= tier.range[1]; ++rank) {
                var character = sorted_characters[rank];
                var character_name = character.short_name ? character.short_name : character.name;

                var entry_y = 32 + (rank - tier.range[0]) * 15;
                tier_group.append("text")
                    .attr("class", "smash_tier_entry")
                    .attr("x", tier_width * .5)
                    .attr("y", entry_y)
                    .attr("width", tier_width)
                    .style("text-anchor", "middle")
                    .text(function(d) { return character_name; });

                tier_group.append("rect")
                    .attr("class", "smash_tier_entry_hover")
                    .attr("x", 0)
                    .attr("y", entry_y - 11)
                    .attr("width", tier_width)
                    .attr("height", tier_entry_height + 1)
                    .attr("id", character_name)
                    .on("mouseover", function(d) { highlight(this.id) })
                    .on("mouseout", function(d) { fade() });
            }

            // Slide tier_y down for next tier entry
            tier_y = tier_y + tier_height + tier_y_pad;
        }

        // Slide tier_x to right for next tier list (column)
        tier_x = tier_x + tier_width + tier_x_pad;
    }

    // Highlight the given character
    var highlight = function(character_name) {
        var tier_groups = svg_root.selectAll(".smash_tier_group")[0];
        tier_groups.forEach(function(tier_group) {
            var has_character = false;
            var entries = d3.select(tier_group).selectAll(".smash_tier_entry")[0];
            entries.forEach(function(entry) {
                if (entry.textContent == character_name) {
                    d3.select(entry).style("font-weight", "bold")
                    has_character = true;
                }
            });

            if (!has_character)
                d3.select(tier_group).style("opacity", 0.05);
            else {
                entries.forEach(function(entry) {
                    if (entry.textContent != character_name)
                        d3.select(entry).style("opacity", 0.05);
                });
            }
        });
    };

    // Undo all highlights
    var fade = function() {
        var tier_groups = svg_root.selectAll(".smash_tier_group")[0];
        tier_groups.forEach(function(group) { d3.select(group).style("opacity", ""); });

        var entries = svg_root.selectAll(".smash_tier_entry")[0];
        entries.forEach(function(entry) { 
            d3.select(entry)
                .style("font-weight", "")
                .style("font-size", "")
                .style("opacity", "");
        });
    } 
}
