console.log('Welcome to the main module');

import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';

const yearlyPlan = createPlan();

// console.log('this is the yearly plan', yearlyPlan);

plantSeeds(yearlyPlan);

// console.log(usePlants());

let plantedField = usePlants();

let harvestedField = harvestPlants(plantedField);

console.log('this is plantedField', plantedField);

console.log('this is harvestedField', harvestedField);

Catalog(harvestedField);
