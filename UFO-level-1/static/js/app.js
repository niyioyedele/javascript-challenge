// import data from './data'
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
console.log(data);
//encase in a function to  be able to rebuild table
function buildTable(data) {
  tbody.html('');

  data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append('tr');
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
          var cell = row.append("td");
      cell.text(value);

    });

  });
}
buildTable(tableData); //  this calls the function to populate the table
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

 // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

 // Get the value property of the input element
  var inputValue = inputElement.property("value").trim();

  console.log(inputValue); 

  let filteredData = tableData;

  filteredData = filteredData.filter(row => row.datetime === inputValue)

  console.log(filteredData);

  let response = {filteredData}
  if (response.filteredData.lenght !== 0){
    buildTable(filteredData);
  }
else {
  $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
}

  


//   &tbody.html('');

  //  return filteredData // buildTable(filteredData); instead of returning, call build table to rebuild
};
