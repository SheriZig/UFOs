//import the data from data.js
// with CONST the definition nor values can change
const tableData = data;

//Reference the HTML table using D3
var tbody = d3.select("tbody");

// Build table using the information within data.js file
// the array with the data is named data
// tbody.html(""); = CLEARS any existing data so we start with a fresh
// table each time
// data.forEach(dataRow) = POINTS to the DATA to use. dataRow will represent each 
// row of data was we iterate through the array.
// let row = tbody.append("tr") = ADDS ROWS tells js to find the "tbody" 
// (the table tag in html) and
// ADD a table row ("tr" = table row tag in html)
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
       let row = tbody.append("tr"); 
       
       //Loop through each field in the dataRow (sighting) and ADD EACH Value
       // (info about sighting)
       // as a table cell ("td") tag in html
       // note the 'object' (dataRow) is each sighting
       // 'val' represents each data item in the sighting (date, location, etc)
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);

       });

    });

}
// function to hold date data. Filtered and unfiltered
// let date = d3.select("#datetime") MATCHES first element (html tag) that matches selector
// string ("#datetime"). 
// .property("value") GRABS the dates from the data and holds it in the 
//'date' variable

// filteredData = tableData -- tableData is the const variable (above) 
// that holds the raw data (sightings and information about sightings)

// FILTER THE DATA 
function handleClick (){
    //Select CRITERIA   
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData
            // APPLIES filter to the data table
    if (date) {filteredData = filteredData.filter(row = row.datetime === date);
// CALL the function above and retrieve the filtered data based on the tableData 
// variable which represents all the data in the dataset. If no date selected  
// in criteria, the whole dataset will be returned
                buildTable(filteredData);
            };
}
// "#filter-btn" is a selector string that contains the ID
// that will match a HTML tag. We will add this to HTML to link our code to the HTML
// when the button with an id of 'filter-btn' is clicked the handleClick function
// will run

// LISTEN for the click to initiate the handleClick function
d3.selectAll("#filter-btn").on("click",handleClick);

// this will be present when the site first opens to show ALL data until 
// the user provides a filter 
// INITIAL TABLE when page loads
buildTable(tableData);
