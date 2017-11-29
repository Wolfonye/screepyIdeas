var roomStructureAnalyser = {
    rooms: [],
    init: function(){
        var allRooms = Game.rooms;
        for(room in allRooms){
            this.rooms.push(new RoomInformation(room));
        }
    },
    printRooms(){
        var output = "List of all rooms: ";
        this.rooms.forEach(function(item){
            output += item.name;
        });
        console.log(output);
    }
}

class RoomInformation{
    constructor(name){
        this.name = name;
    }
}

module.exports = roomStructureAnalyser;
