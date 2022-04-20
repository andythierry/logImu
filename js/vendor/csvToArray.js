
// Skip to content
// Pull requests
// Issues
// Marketplace
// Explore
// @andythierry
// nsebhastian /
// javascript-csv-array-example
// Public
//
// Code
// Issues 3
// Pull requests
// Actions
// Projects
// Wiki
// Security
//
// Insights
//
// javascript-csv-array-example/index.html
// @nsebhastian
// nsebhastian init OK
// Latest commit ea89fd8 on 17 Apr 2021
// History
// 1 contributor
// 54 lines (46 sloc) 1.61 KB




function csvToArray(str, delimiter = ",") {

  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");




  // return the array
  return [rows,headers];
}

