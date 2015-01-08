function build_smash_tiers(select_target, platform, bounds) {
    var smash_data_set = smash_data[platform];

    var total_width = bounds.plot.width + bounds.margin.left + bounds.margin.right;
    var total_height = bounds.plot.height + bounds.margin.top + bounds.margin.bottom;

    // Outer container SVG element to enable responsive magic
    var div_target = d3.select(select_target)
        .attr("style", "max-width:" + total_width + "px;max-height:" + total_height + "px");

    var svg_root = div_target.append("svg")
        .attr("viewBox", "0 0 " + total_width + " " + total_height)
        .attr("preserveAspectRatio", "");   // $$$FTS - Consider removing entirely. Must test mobile.


    // For converting textual colors in smash data to actual RGBs
    var tier_color_map = {
        red : { "outer" : "#ff0000", "inner" : "#ff7f7f", "light" : "#ffbfbf" },
        orange : { "outer" : "#ff7f00", "inner" : "#ffbf7f", "light" : "#ffdfbf" },
        yellow : { "outer" : "#ffff00", "inner" : "#ffff7f", "light" : "#ffffbf" },
        green : { "outer" : "#00ff00", "inner" : "#7fff7f", "light" : "#bfffbf" },
        cyan : { "outer" : "#00ffff", "inner" : "#bfffff", "light" : "#bfffff" },
        blue : { "outer" : "#0000ff", "inner" : "#7f7fff", "light" : "#bfbfff" },
        magenta : { "outer" : "#ff00ff", "inner" : "#ff7fff", "light" : "#ffbfff" },
        purple : { "outer" : "#7f007f", "inner" : "#bf7fbf", "light" : "#dfbfdf" }
    };

    // Data for tier lists
    var characters = smash_data_set.characters;
    var sorted_characters = new Array(characters.length);

    // Tier Lists to be displayed
    var tier_lists = smash_data_set.tier_lists;

    // Spacing data
    var tier_width = 73;

    var tier_x_whitespace = total_width - (tier_width * tier_lists.length);
    var tier_x_pad = tier_x_whitespace / (tier_lists.length + 1);
    var tier_x = tier_x_pad;

    var tier_title_height = 17;
    var tier_entry_height = 15;
    var tier_entry_base = 5;    // whitespace at bottom of tier element

    // Create tier lists
    for (var i = 0; i < tier_lists.length; ++i) {
        var tier_list = tier_lists[i];

        // Order characters by ranking for this tier lists
        for (var j = 0; j < characters.length; ++j) {
            var character = characters[j];
            var rank = character.rankings[i];
            sorted_characters[rank] = character;
        }

        var tiers = tier_list.tiers;

        var tier_y = 5;
        var tier_y_whitespace = total_height - (characters.length * tier_entry_height) - (tiers.length * (tier_title_height + tier_entry_base)) - tier_y;

        var tier_y_pad = (tier_y_whitespace - tier_y) / (tiers.length - 1);

        var tier_list_group = svg_root.append("g")
            .attr("transform", "translate(" + tier_x + ",0)");

        // Create tier list
        for (var j = 0; j < tiers.length; ++j) {
            var tier = tiers[j];
            var tier_size = tier.range[1] - tier.range[0] + 1;
            var tier_height = tier_title_height + (tier_entry_height * tier_size) + tier_entry_base;

            var tier_group = tier_list_group.append("g")
                .attr("transform", "translate(" + 0 + "," + tier_y + ")");

            if (false) {
            // Tier background
            tier_group.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("rx", 15)
                .attr("ry", 22)
                .attr("width", tier_width)
                .attr("height", tier_height)
                .attr("stroke", tier_color_map[tier.color].outer)
                .attr("stroke-width", 2)
                .attr("fill", tier_color_map[tier.color].inner);

            if ( j > 1) {
            tier_group.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", tier_width)
                .attr("height", 25)
                .attr("stroke", tier_color_map[tier.color].outer)
                .attr("stroke-width", 2)
                .attr("fill", tier_color_map[tier.color].light);
            }

            tier_group.append("line")
                .attr("x1", 0)
                .attr("x2", tier_width)
                .attr("y1", 20)
                .attr("y2", 20)
                .attr("stroke", tier_color_map[tier.color].outer)
                .attr("stroke-width", 1);
            }
            else {
                var path_data_top = [ 
                    ["M", 0, 20],
                    ["L", 0, 0],
                    ["L", tier_width, 0],
                    ["L", tier_width, 20]
                ];

                var rx = 15;
                var ry = 22;
                var path_data_bottom = [
                    ["M", 0, 20],
                    ["L", 0, tier_height - ry],
                    ["A", rx, ry, 0, 0, 0, rx, tier_height],
                    ["L", tier_width - rx, tier_height],
                    ["A", rx, ry, 0, 0, 0, tier_width, tier_height - ry],
                    ["L", tier_width, 20]
                ];

                var path_reduce = function(array) {
                    return array.reduce(function(sum, element) {
                        return sum + " " + element.reduce(function(sum, element) {
                            return sum + " " + element
                        })
                    }, "")
                };

                tier_group.append("path")
                    .attr("d", path_reduce(path_data_top))
                    .attr("stroke", tier_color_map[tier.color].outer)
                    .attr("stroke-width", 2)
                    .attr("fill", tier_color_map[tier.color].light);

                tier_group.append("path")
                    .attr("d", path_reduce(path_data_bottom))
                    .attr("stroke", tier_color_map[tier.color].outer)
                    .attr("stroke-width", 2)
                    .attr("fill", tier_color_map[tier.color].inner);


                tier_group.append("line")
                    .attr("x1", 0)
                    .attr("x2", tier_width)
                    .attr("y1", 20)
                    .attr("y2", 20)
                    .attr("stroke", tier_color_map[tier.color].outer)
                    .attr("stroke-width", 1);
                }

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
                tier_group.append("text")
                    .attr("class", "smash_tier_entry")
                    .attr("x", tier_width * .5)
                    .attr("y", 32 + (rank - tier.range[0]) * 15)
                    .attr("width", tier_width)
                    .style("text-anchor", "middle")
                    .text(function(d) { return character.short_name ? character.short_name : character.name });
            }

            // Slide tier_y down for next tier entry
            tier_y = tier_y + tier_height + tier_y_pad;
        }

        // Slide tier_x to right for next tier list (column)
        tier_x = tier_x + tier_width + tier_x_pad;
    }
}
