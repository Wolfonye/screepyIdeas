/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('util.scanning');
 * mod.thing == 'a thing'; // true
 */
var scanner = {
    scanAreaForCreeps: function(room, position, radius = 2){
        return room.lookForAtArea(LOOK_CREEPS, position.y - radius, position.x - radius, position.y + radius, position.x + radius, true);
    }

    scanForWalkableTerrain: function(room, position, radius = 1){
        return _filter((room.lookForAtArea(LOOK_TERRAIN, position.y - radius, position.x - radius,position.y + radius, position.x + radius,true), (square) => square['terrain'] == 'swamp' || square['terrain'] == 'plain');
    }
}


module.exports = scanner;
