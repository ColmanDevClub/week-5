// Mission 2 
{
    const EXPECTED_MINUTES_IN_OVEN=40;
    function remainingMinutesInOven(actualMinutesInOven) {
        return (EXPECTED_MINUTES_IN_OVEN-actualMinutesInOven);
    }
    function preparationTimeInMinutes(numberOfLayers){
        return (numberOfLayers*2);
    }
    function totalTimeInMinutes(numberOfLayers,actualMinutesInOven){
        return (preparationTimeInMinutes(numberOfLayers)+
                actualMinutesInOven);
    }
}

// Mission 3
{ 
    function canExecuteFastAttack (knightIsAwake){
        return(!knightIsAwake);
    }

    function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
        return (knightIsAwake || archerIsAwake || prisonerIsAwake);
    }

    function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
        return (prisonerIsAwake&&!archerIsAwake);
    }
    function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
        if (petDogIsPresent){
            return (!archerIsAwake);
        }                     
        else{
            return (!archerIsAwake&&!knightIsAwake&&prisonerIsAwake)
        }
    }
}

// Mission 4

{
    function dayRate(rate){
        const hoursPerDay=8;
        return rate*hoursPerDay;
    }
    function daysInBudget(budget, rate){
        return Math.floor(budget/dayRate(rate))
    }
    function priceWithMonthlyDiscount(rate,daysTheProject,monthlyDiscount){
        const billableDays = 22;
        const daysWithOutDiscount=daysTheProject%billableDays;
        const daysWithDiscount=daysTheProject-daysWithOutDiscount;
        return Math.ceil((daysWithOutDiscount*dayRate(rate))+(daysWithDiscount*dayRate(rate)*(1-monthlyDiscount)))
    }
}

//mision 5 

{
    function frontDoorResponse(sentence){
        return sentence[0]
    }

    function frontDoorPassword(sentence){ 
        return (sentence[0].toUpperCase()+sentence.slice(1).toLowerCase())
    }

    function backDoorResponse(sentence){
        const sentenceTrim = sentence.trim();
        return sentenceTrim[sentenceTrim.length - 1]
    }

    function backDoorPassword(sentence){
        const politeString=', please';
        return(frontDoorPassword(sentence)+politeString);
    }

}