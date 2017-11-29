/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('util.scanning');
 * mod.thing == 'a thing'; // true
 */
var scanner = {
    scanAreaForCreeps: function(room, position){
        return room.lookForAtArea(LOOK_CREEPS, position.y - 2, position.x - 2, position.y + 2, position.x + 2, true);
    } 
}
module.exports = scanner;