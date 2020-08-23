console.log('Welcome to the main module');

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
import { createSoybean } from './seeds/soybean.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';

const yearlyPlan = createPlan();

console.log('this is the yearly plan', yearlyPlan);

plantSeeds(yearlyPlan);

console.log(usePlants());
