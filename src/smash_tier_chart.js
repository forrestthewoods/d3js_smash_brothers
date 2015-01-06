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


 //<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    // Test circle
    plot_group.append("svg")
        .attr("width", 50)
        .attr("height", 50)
        .append("circle")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 25)
            .style("fill", "purple");
}
