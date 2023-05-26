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
parkTypesArray.unshift("View All");
parkTypesArray.unshift("Select Park Type...");

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
  const tbody = document.getElementById("tableBody");
  const resetLocationOption = document.getElementById("locationStates");
  //clears table rows when another location is selected
  tbody.innerHTML = "";

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
    buildRow(tbody, park);
  });

  const matchingParktypeSingle = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedParktype)
  );
  // when user only selects park type and location has not yet been selected
  if (selectedLocation == "Select State...") {
    // display array
    matchingParktypeSingle.forEach((park) => {
      buildRow(tbody, park);
    });
  }

  // when location is selected to view all
  if (selectedLocation == "View All") {
    // park type can be selected and displayed
    matchingParktypeSingle.forEach((park) => {
      buildRow(tbody, park);
    });
  }

  //when selected park type is view all when option for location is selected
  if (selectedParktype == "View All") {
    matchingParkLocation.forEach((park) => {
      //invoked function to create table into onchange function
      buildRow(tbody, park);
    });
  }
}
