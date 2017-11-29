var roleHarvester = {
    phase: undefined,

    /** @param {Creep} creep **/
    run: function(creep) {
        //nur ein Testkommentar
        /*
        if(this.phase == 'DELIVERING'){
            this.phase = 'SEARCH_FOR_ENERGYSOURCE';
            console.log(this.phase);
        }

        if(this.phase == 'MOVING_TO_DELIVERY_POINT'){
            this.phase = 'DELIVERING';
            console.log(this.phase);
        }

        if(this.phase == 'SEARCH_FOR_DELIVERY_POINT'){
            this.phase = 'MOVING_TO_DELIVERY_POINT';
            console.log(this.phase);
        }

        if(this.phase == 'HARVESTING'){
            this.phase = 'SEARCH_FOR_DELIVERY_POINT';
            console.log(this.phase);
        }

        if(this.phase == 'MOVING_TO_ENERGYSOURCE'){
            this.phase = 'HARVESTING';
            console.log(this.phase);
        }

        if(this.phase == 'SEARCH_FOR_ENERGYSOURCE'){
            this.phase = 'MOVING_TO_ENERGYSOURCE';
            console.log(this.phase);
        }

        if(this.phase == undefined){
            this.phase = 'SEARCH_FOR_ENERGYSOURCE';
            console.log(this.phase);
        }
        */

	    if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;
