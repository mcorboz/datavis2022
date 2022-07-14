var d3 = require('d3');

console.log("yeah")
// lier les données
d3.csv("../raw-data/Video_Game_Sales_as_of_Jan_2017.csv", function (data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].Name)
    console.log(data[i].Genre)
  }
}); 

//d3.select("body").append("p").text("New paragraph!")