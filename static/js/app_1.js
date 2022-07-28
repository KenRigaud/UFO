// importing data from data.js
const tableData = data;

// html table reference built using d3
//tells java script to look for "tbody" tags in the html
var tbody = d3.select("tbody");

function buildTable(data) {
    //clears table
    tbody.html("")

    //Arrow function for loop on data array
    data.forEach((dataRow) => {
        
        //looks for <tbody> tag amd adds a row
        let row = tbody.append("tr");

        //references an object from Ufo sightings and adds it to the row
        Object.values(dataRow).forEach((val) => {
            
            
            let cell = row.append("td");
            
            //extracts only the text of the value
            cell.text(val);

        });

    });
}

//function that uses D3
function handleClick() {

    //matches first element that matches #datetime (string is what D3 is looking for)
    //stores the values into the variable "date"
    let date = d3.select("#datetime").property("value");

    let filterData = tableData;

    //if statement to filter data based on the selected date
    if (date) {

        //"===" is exact match "==" is loose match
        filterData = filterData.filter(row => row.datetime === date);
    }

    //rebuilds table using the new date filter
    buildTable(filterData);

    //listening for a click
    //executes the handleclick function when the button called "filter-btn" is clicked
    d3.selectAll("#filter-btn").on("click", handleClick);

}

//builds the initial table upon the loading of the page
buildTable(tableData);