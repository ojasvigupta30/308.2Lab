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
let growth = 20 * 2 ** (n - 1); // Plant growth after n-1 number of weeks because doubling starts from 2nd week
let spaceTaken = growth * minSpace;

console.log(`Radius: `, radius, `Area: `, area, `Number of weeks: `, n, `Number of plants: `, growth, `Total space taken: `, spaceTaken);

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
//change the number of weeks accordingly at line 19 variable n.




//PART 2

// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

let newPlant = 100;
let weekn = 10;
let newGrowth = 100 * 2 ** (weekn - 1);

let areaNeeded = 100 * minSpace * newGrowth;

console.log(`Total area needed if scientists started with 100 plants with no pruning for 10 weeks:`, areaNeeded);

let addAreaNeeded = areaNeeded - area;

console.log(`Additional area needed:`, addAreaNeeded);

// If the space remained circular, what would be the radius of this expanded garden?

let newRadius = Math.sqrt(areaNeeded/PI);

console.log(`Radius of expanded garden:`, newRadius);





