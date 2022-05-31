 /* // lier les données
 d3.csv('Video_Game_Sales_as_of_Jan_2017.csv',function(d){
    // format data
    d.forEach(function(d) {
        d.Year_of_Release = d.Year_of_Release;
        d.Global_Sales = +d.Global_Sales;
    });
 })


 d3.select("body").append("p").text("New paragraph!")

 var svgContainer = d3
   .select("body").append("svg")
   .attr("width", 200)
   .attr("height", 200)
   .style("border", "1px solid black");

// Define variables
var margin = {top: 20, right: 20, bottom: 30, left: 50},
   width = 960 - margin.left - margin.right,
   height = 500 - margin.top - margin.bottom;

// Define line
var valueline = d3.line()
   .x(function(d) { return x(d.Year_of_Release); })
   .y(function(d) { return y(d.Global_Sales); });


// Append svg attributes
var svg = d3.select("body").append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g").attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");
 */