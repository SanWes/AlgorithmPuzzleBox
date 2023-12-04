// Boolean Lesson: True or false. Logical Operators: !, &&, || 

/* 
Implement quest logic for a RPG game. 
You have four tasks: to implement the logic for determining if the above actions are available based on the state of the three characters found in the forest and whether Annalyn's pet dog is present or not.

1. Check if the 'Fast Attack' action is possible
2. Check if the 'Spy' action is possible
3. Check if the 'Signal Prisoner' action is possible
4. Check if the 'Free Prisoner' action is possible

Fast attack: if the knight is sleeping,

Spy:if at least one of them is awake. 

Signal prisoner: if the prisoner is awake and the archer is sleeping

Free prisoner:  only succeed in one of two ways:
1. If Annalyn has her pet dog with her & if the archer is asleep. OR
2. If Annalyn does not have her dog then she and the prisoner must be very sneaky! if the prisoner is awake and the knight and archer are both sleeping
*/


const petDogIsPresent = true;
const knightIsAwake = true; 
const archerIsAwake = true; 
const prisonerIsAwake = true; 

function canExecuteFastAttack (){
    if (knightIsAwake == false) {

        return true 
    } else { return false}


};

canExecuteFastAttack(knightIsAwake);


function canSpy (){
    if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true) {
        return true 
    } else { return false}
}

canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);


function canSignalPrisoner () {
    if (prisonerIsAwake == true && archerIsAwake == false) {
        return true 
    } else {return false}
}

canSignalPrisoner(archerIsAwake, prisonerIsAwake);


function canFreePrisoner () {
    if (petDogIsPresent == true && archerIsAwake == false) {
        return true
    } else if (petDogIsPresent == false && prisonerIsAwake == true && knightIsAwake == false && archerIsAwake == false) { return true } 
    else { return false}
}

canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
