function getRandomInt(max) {
    let number = Math.floor(Math.random() * Math.floor(max));
    if (number > 0) {
        return number;
    } else {
        return 16;
    }
    
  }

  function getRandomIntZero(max){
      return Math.floor(Math.random() * Math.floor(max));
  }

  function statusGenerator(){
    diceRoll = Math.random();
    if (diceRoll <= .80) {
        return 0;
    } else if (diceRoll > .80 && diceRoll <= .90) {
        return 1;
    } else if (diceRoll > .90 && diceRoll <= .95) {
        return 2;
    } else {
        return 3;
    }


  }
function createTruck(){
    let truckIDs = [];
    let docks = [];
    // Cleveland, OK
    let places = [];
    let statuses = [];
    
    for (i = 0; i < 20; i++){
        let truckID = Math.floor(Math.random()*9000) + 1000;
        truckIDs.push(truckID);

        let dock = getRandomInt(22);
        docks.push(dock);

        let possiblePlaces = ["Detroit, MI", "Reno, NV","Eugene, OR", "Cleveland, OK", "Bronson, FL"];
        let place = possiblePlaces[getRandomIntZero(5)];
        places.push(place);

        let possibleStatuses = ["Arrived", "Arrived Late", "Arrived Early", "Missing"];
        let status = possibleStatuses[statusGenerator()];
        statuses.push(status);

    }

    console.log(docks);
    console.log(truckIDs);
    console.log(places);
    console.log(statuses);

        for (num = 0; num < 20; num++){
            document.getElementById(`truckID${num}`).innerHTML = `${truckIDs[num]}`;
            document.getElementById(`dock${num}`).innerHTML = `${docks[num]}`;
            document.getElementById(`place${num}`).innerHTML = `${places[num]}`;
            document.getElementById(`status${num}`).innerHTML = `${statuses[num]}`;
        }   

}
createTruck();





    



//Detroit, MI
//Cleveland, OK 
//Rawlins, WY 
//Bronson, FL 
//Eugene, OR 
// Reno NV 