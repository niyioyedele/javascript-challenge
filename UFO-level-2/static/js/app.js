// from data.js
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


// Complete the event handler function for the form
function runEnter() {

    let rows = document.querySelector("#ufo-table > tbody").rows;

  // Prevent the page from refreshing
  d3.event.preventDefault();
 // Select the input element and get the raw HTML node
  var inputElementdate = d3.select("#datetime");
  var inputElementcity = d3.select("#city");
  var inputElementstate = d3.select("#state");
  var inputElementcountry= d3.select("#country")
  var inputElementshape= d3.select("#shape")

 // Get the value property of the input element
  var inputdate = inputElementdate.property("value").trim();
  var inputcity = inputElementcity.property("value").toLowerCase().trim()
  // var inputstate = inputElementstate.property("value").toLowerCase().trim()
  // var inputcountry = inputElementcountry.property("value").toLowerCase().trim()
  // var inputshape = inputElementshape.property("value").toLowerCase().trim


  console.log(inputcity); 
//   // Loop over the rows to perform the filter.
//   let totalRows = rows.length;
//   for (let i = 0; i < totalRows; i++) {
//       // Get the contents of the relevant cell data.
//     let datetime = rows[i].cells[0].textContent;
//     let city = rows[i].cells[1].textContent;
//     let state = rows[i].cells[2].textContent;
//     let country =rows[i].cells[3].textContent;
//     let shape = rows[i].cells[4].textContent;

//     //conditional array
//     let conditionsArray = [
//         datetime.indexOf(inputdate) > -1,
//         city.indexOf(inputcity) > -1,
//         state.indexOf(inputstate)> -1,
//         country.indexOf(inputcountry)> -1,
//         shape.indexOf(inputshape)> -1
//     ];

//     // If any of the above conditions are true then show the row,
//     // otherwise turn of displaying that row.
//     if (conditionsArray.indexOf(true) > -1) {
//         rows[i].display = "";
//       } else {
//         rows[i].display = "none";
//       }
//     }
//   }

  let filteredData = tableData;

  console.log(filteredData);
  filterdate = filteredData.filter(row=> row.datetime === inputdate)
  filtercity = filteredData.filter(row=>row.city === inputcity)
  

  filteredData = filteredData.filter(row => row.datetime === inputdate && row.city === inputcity)
    //  && row.state === inputstate)
//   &&(row=>row.country === inputcountry)&&(row=>row.shape === inputshape))


  // console.log(filteredData);

  let response = {
    filterdate,filtercity,filteredData
  }
  if (response.filteredData !== 0) {
    buildTable(filteredData);
  }
  else if (response.filteredData.lenght === 0 && ((response.filterdate.lenght !== 0 || response.filtercity.lenght !== 0 ))){
    buildTable(filterdate) || buildTable(filtercity);
  }
  else {
  $tbody.append("tr").append("td").text("No Sightings Here...Move On...");

  }


  


// //   &tbody.html('');

//   //  return filteredData // buildTable(filteredData); instead of returning, call build table to rebuild
};

