var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var scanner = require('util.scanning');
var roomStructure = require('util.analysation.roomStructure');

const throttleLow = 5;
const throttleMedium = 10;
const throttleHigh = 20;
const timerMax = 30;

roomStructure.init();
roomStructure.printRooms();

module.exports.loop = function () {

    var cycle = Game.time % timerMax;
    if(cycle % throttleLow == 0){
    }

    if(cycle % throttleMedium == 0){
    }

    if(cycle % throttleHigh == 0){

        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if(harvesters.length < 2) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1RW34N29'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
        }

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if(upgraders.length < 2) {
            var newName = 'Upgrader' + Game.time;
            Game.spawns['Spawn1RW34N29'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader'}});
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

        if(builders.length < 1 && Game.spawns['Spawn1RW34N29'].room.find(FIND_CONSTRUCTION_SITES).length > 0) {
            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1RW34N29'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
        }

    }


    if(Game.spawns['Spawn1RW34N29'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1RW34N29'].spawning.name];
        Game.spawns['Spawn1RW34N29'].room.visual.text(
            'ð ï¸' + spawningCreep.memory.role,
            Game.spawns['Spawn1RW34N29'].pos.x + 1,
            Game.spawns['Spawn1RW34N29'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
