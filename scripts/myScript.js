const selectedLocation = selectLocation.value

selectLocation.onchange = getActivitiesDetailChanged;

function getActivitiesDetailChanged(){
  console.log(selectedLocation)
  console.log(selectLocation)
}


const table = document.getElementById('nationalparksInformation')

nationalParksArray.forEach((park) => {
    buildRow(table, park)
})

function buildRow(myTable, myDetails){
    const row = myTable.insertRow(-1);
  
    const cell1 = row.insertCell(0);
    cell1.innerHTML = myDetails.LocationName;
  
    const cell2 = row.insertCell(1);
    cell2.innerHTML = myDetails.Address + "<br>" + myDetails.City + " , " + myDetails.State + " " + myDetails.ZipCode;
  
    const cell3 = row.insertCell(2);
    cell3.innerHTML = myDetails.Phone;

    const cell4 = row.insertCell(3);
    cell4.innerHTML = myDetails.Fax;
  
    const cell5 = row.insertCell(4);
    cell5.innerHTML = myDetails.Visit;
  
    const cell6 = row.insertCell(5);
    cell6.innerHTML = `${myDetails.Longitude} , ${myDetails.Latitude}`
}





