const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

parkTypesArray.unshift("Select One");

const selectParktype = document.getElementById("parktypeList");

parkTypesArray.forEach((parkType) => {
  //name same thing to display value of option
  //no need to do .forEach( state, state )
  const parktypeOptionEl = new Option(parkType, parkType);
  selectParktype.appendChild(parktypeOptionEl);
});

//function for park type onchange
selectParktype.onchange = getDetailParkChange;

//function to display the Parks based on selected park type filtering through matchingParkLocation array
function getDetailParkChange() {
  //define value of selectedParktype value into a variable
  let selectedLocation = selectLocation.value;
  let selectedParktype = selectParktype.value;
  const table = document.getElementById("nationalparksInformation");

  // clear table of previous selected array of parks
  table.innerHTML = "";

  // filters through an array for matching location and state
  const matchingParkLocation = nationalParksArray.filter(
    (park) => park.State == selectedLocation
  );
  // filter though already filtered array
  // filters location by park type
  const matchingParktype = matchingParkLocation.filter((park) =>
    park.LocationName.includes(selectedParktype)
  );
  // displays the filtered array in table
  matchingParktype.forEach((park) => {
    buildRow(table, park);
  });



  const matchingParktypeSingle = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedParktype)
  );
  // displays the filtered array in table
  if (selectedLocation == "Select One"){
  matchingParktypeSingle.forEach((park) => {
    buildRow(table, park);
  })};

}

