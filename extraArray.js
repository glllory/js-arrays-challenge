
var Red = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"];
var Green = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"];
var Orange = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];

function getList(name) {

     switch (name) {
       case "Red":
          return Red;
        break;
       case "Green":
          return Green;
        break;
       case "Orange":
          return Orange;
        break;
       default:
          return null;
     }
}

function toTitleCase(str) { // to match the array name and what's stored in them!
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function stopsBetweenStations(Start_Line, Start_Station, End_Line, End_Station){
    var stops = 0;
    Start_Line = getList(toTitleCase(Start_Line));
    End_Line = getList(toTitleCase(End_Line));
    Start_Station = toTitleCase(Start_Station);
    End_Station = toTitleCase(End_Station);

  if (Start_Line !== null && End_Line !== null){ // to check if the subway exists!

    if (Start_Line === End_Line) { // SAME line
      if(Start_Line.includes(Start_Station) && End_Line.includes(End_Station)){
         return stops = Math.abs((Start_Line.indexOf(Start_Station)+1)-(End_Line.indexOf(End_Station)+1));
      }else {
        return "Sorry, one or both of your entered Station NOT found!! try again..";
      }
    }else { // NOT same line!
       if(Start_Line.includes(Start_Station) && End_Line.includes(End_Station)){
          var lineOneStops = Math.abs((Start_Line.indexOf(Start_Station)+1)-(Start_Line.indexOf("Park Street")+1));
          var lineTowStops = Math.abs((End_Line.indexOf("Park Street")+1)-(End_Line.indexOf(End_Station)+1));
          return stops = lineOneStops + lineTowStops;
       }else {
         return "Sorry, one or both of your entered Station NOT found!! try again ..";
       }
     }

  }else {
    return "Sorry, one or both of your entered Line NOT found!! try again ..";
  }

} // function ends here

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6
