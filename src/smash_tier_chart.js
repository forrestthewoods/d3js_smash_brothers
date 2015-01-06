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

    // Group within SVG used as basis
    var plot_group = svg_root.append("g")
        .attr("transform", "translate(" + bounds.margin.left + "," + bounds.margin.top + ")");

    // Full bounds
    svg_root.append("svg")
        .attr("width", total_width)
        .attr("height", total_height)
        .append("rect")
            .attr("width", total_width)
            .attr("height", total_height)
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("fill-opacity", 0); 

    // Group bounds
    svg_root.append("svg")
        .attr("x", bounds.margin.left)
        .attr("y", bounds.margin.top)
        .attr("width", total_width)
        .attr("height", total_height)
        .append("rect")
            .attr("width", total_width - bounds.margin.left)
            .attr("height", total_height - bounds.margin.top)
            .attr("stroke", "red")
            .attr("stroke-width", 1)
            .attr("fill-opacity", 0); 


    // Test circle
    /*
    svg_root.append("svg").append("circle")
        .attr("cx", 25)
        .attr("cy", 25)
        .attr("r", 25)
        .style("fill", "purple");
    */
    
    var tier_x = 5;
    var tier_x_pad = 15;
    var tier_y_pad = 15;
    var tier_width = 73;
    var tier_height = 15;

    var tier_color_map = {
        red : { "outer" : "#ff0000", "inner" : "#ff7f7f" },
        orange : { "outer" : "#ff7f00", "inner" : "#ffbf7f" },
        yellow : { "outer" : "#ffff00", "inner" : "#ffff7f" },
        green : { "outer" : "#00ff00", "inner" : "#7fff7f" },
        cyan : { "outer" : "#00ffff", "inner" : "#bfffff" },
        blue : { "outer" : "#0000ff", "inner" : "#7f7fff" },
        magenta : { "outer" : "#ff00ff", "inner" : "#ff7fff" },
        purple : { "outer" : "#7f007f", "inner" : "#bf7fbf" }
    };

    var tier_lists = smash_data_set.tier_lists;
    for (var i = 0; i < tier_lists.length; ++i)
    {
        var tier_list = tier_lists[i];
        var tiers = tier_list.tiers;

        var tier_y = 10;

        for (var j = 0; j < tiers.length; ++j)
        {
            var tier = tiers[j];
            var tier_size = tier.range[1] - tier.range[0] + 1;

            plot_group.append("svg").append("rect")
                .attr("x", tier_x)
                .attr("y", tier_y)
                .attr("width", tier_width)
                .attr("height", tier_size * tier_height)
                .attr("rx", 15)
                .attr("ry", 25)
                .attr("stroke", tier_color_map[tier.color].outer)
                .attr("stroke-width", 2)
                .attr("fill", tier_color_map[tier.color].inner);
                //.attr("style", "background:",tier_color_map[tier.color].inner

                //<td colspan="1" style="background:#bf7fbf;border:2px solid #7f007f">23

            tier_y = tier_y + (tier_size * tier_height) + tier_y_pad;
        }

        tier_x = tier_x + tier_width + tier_x_pad;
        
        //plot_group.append("svg")
        //.attr("width", 100)
        //.height
    }

    //<rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />

//<rect xmlns="http://www.w3.org/2000/svg" x="14.1" y="513" width="970.4" height="15.0" fill="rgb(215,141,30)" rx="2" ry="2"/>
}
