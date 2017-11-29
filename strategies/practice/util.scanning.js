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
    },

    scanForWalkableTerrain: function(room, position, radius = 1){
        var tiles = room.lookForAtArea(LOOK_TERRAIN, position.y - radius, position.x - radius,position.y + radius, position.x + radius,true);
        var walkableTiles = [];
        for(var i = 0; i < squares.length; i++){
            if(squares[i]['terrain'] == 'plain' || squares[i]['terrain'] == 'swamp'){
                walkableTiles.push(squares]i]);
            }
        }
        return walkableTiles;
    }
}

module.exports = scanner;
