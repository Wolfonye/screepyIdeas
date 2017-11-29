var scanner = require('util.scanning');

var roomStructureAnalyser = {
    rooms: [],
    init: function(){
        console.log("Analysing room structure...");
        var allRooms = Game.rooms;
        for(room in allRooms){
            this.rooms.push(new Room(room));
        }
        console.log("Finished analysing room structure.");
        console.log("You own: " + this.rooms.length + " rooms.");
    },
    printRooms(){
        var output = "List of all rooms:";
        this.rooms.forEach(function(item){
            output += " " + item.name;
        });
        console.log(output);
    }
}

class Room{
    constructor(name){
        this.sources = [];
        this.name = name;
        Game.rooms[name].find(FIND_SOURCES).forEach(function(source){
            this.sources.push(new EnergySource(source))});
    }
}


class EnergySource{
    constructor(source){
        this.x = source.pos.x;
        this.y = source.pos.y;
        this.harvestSpotNumber = scanner.scanForWalkableTerrain(source.room, source.pos, 1).length;
        console.log("found energy source with: " + this.harvestSpotNumber + " harvest positions");
    }
}

module.exports = roomStructureAnalyser;
