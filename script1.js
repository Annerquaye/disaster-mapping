// <!-- load the d3.js library -->    	
// <script src="https://d3js.org/d3.v6.min.js"></script>
// <script>

// Set graph margins and dimensions
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width =600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Set ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .domain([d3.max])
          .range([height, 0])
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// Get data
d3.csv("disastersClean.csv").then(function(data) {

  // Format data
  data.forEach(function(d) {
    d.cost = +d.cost;
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.disaster; }));
  y.domain([0, d3.max(data, function(d) { return d.cost; })]);

  // Append rectangles for bar chart
  svg.selectAll("#chart")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.disaster); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.cost); })
      .attr("height", function(d) { return height - y(d.cost); });

  // Add x axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add y axis
  svg.append("g")
      .call(d3.axisLeft(y));

});

