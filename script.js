// PART 1

// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
let radius = 5;

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
const PI = 3.1415;

// const area = PI * radius * radius;
const area = PI * radius ** 2;

// Each plant requires a minimum space of 0.8 square meters.
let minSpace = 0.8;

// The area is starting with 20 plants.
let iniPlant = 20;


// The plants double in number every week.

// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.

let n = 2; //n is number of weeks
let growth = iniPlant * 2 ** (n - 1); // Plant growth after n-1 number of weeks because doubling starts from 2nd week
let spaceTaken = growth * minSpace; //area needed after growth

//console.log(`Radius: `, radius, `Area: `, area, `Number of weeks: `, n, `Number of plants: `, growth, `Total space taken: `, spaceTaken);

// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

if (spaceTaken >= (0.8 * area)) {
    console.log(`The area needs to be pruned`);
}

else if (spaceTaken < (0.8 * area) && spaceTaken > (0.5 * area)) {
    console.log(`The area needs to be monitored`);
}

else if (spaceTaken <= (0.5 * area)) {
    console.log(`The area should be planted.`);
}

else {
    console.log(`Invalid error message`);
}


// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//change the number of weeks accordingly at line 19 variable n.






//PART 2

// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.


let newPlant = 100; //new initial number of plants needed
let weekn = 10; // number of weeks plants not pruned
let newGrowth = newPlant * 2 ** (weekn - 1); //plant growth after weekn number of weeks

let newIniAreaNeeded = minSpace * newPlant; //initial area needed to plant

let areaNeeded = minSpace * newGrowth; //area needed after weekn if started with 100 plants

console.log(`Total area needed if scientists started with 100 plants with no pruning for 10 weeks:`, areaNeeded);


let addAreaNeeded = areaNeeded - area; //additonal area needed for the growth of 100 plants after 10 weeks

//console.log(newPlant, weekn, newGrowth);

console.log(`Additional area needed:`, addAreaNeeded);

// If the space remained circular, what would be the radius of this expanded garden?

let newIniRadius = Math.sqrt(newIniAreaNeeded / PI); //Radius calculated for new area needed to plant 100 plants

console.log(`Radius of expanded garden needed for 100 plants:`, newIniRadius);


let newRadius = Math.sqrt(areaNeeded / PI);    //Radius calculated for new area needed for the growth of 100 plants after 10 weeks

console.log(`Radius of expanded garden after 10 weeks of no pruning:`, newRadius);






//PART 3

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

try {

    if (newIniAreaNeeded < area) {
        console.log(`You can start with 100 plants in 5 m radius garden.`);
    }

    else {
        throw `Error - Not enough area space for 100 plants.`;
    }

}

catch (error) {

    console.log(error);

}





