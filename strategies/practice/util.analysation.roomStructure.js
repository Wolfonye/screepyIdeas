var roomStructureAnalyser = {
    rooms: undefined;
    init: function(){
        var allRooms = Game.rooms;
        allRooms.forEach(function(item, index){
            var room = new RoomInformation(item.name);
        });
    }
    printRooms(){
        var output = "List of all rooms: ";
        rooms.forEach(function(item){
            output += ", " + item.name;
        });
    }
}

class RoomInformation{
    constructor(name){
        this.name = name;
    }
}

module.exports = roomStructureAnalyser;
