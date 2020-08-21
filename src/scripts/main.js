console.log('Welcome to the main module');

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { createSunflower } from './seeds/sunflower.js';
import { createSoybean } from './seeds/soybean.js';

const yearlyPlan = createPlan();

console.log(yearlyPlan);

const cornSeed = createCorn();
console.log(cornSeed);

const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

const soybeanSeed = createSoybean();
console.log(soybeanSeed);
