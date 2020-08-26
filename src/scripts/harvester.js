import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createWheat } from './seeds/wheat.js';
import { createSunflower } from './seeds/sunflower.js';
import { createAsparagus } from './seeds/asparagus.js';

export const harvestPlants = (plantsArray) => {
	let harvestedPlants = [];
	plantsArray.forEach((growingPlant) => {
		switch (growingPlant.type) {
			case 'Potato':
				for (let index = 0; index < growingPlant.output; index++) {
					harvestedPlants.push(growingPlant);
				}
				break;
			case 'Corn':
				for (let index = 0; index < growingPlant.output / 2; index++) {
					harvestedPlants.push({ type: 'Corn', height: 180, output: 6 });
				}
				break;
			case 'Soybean':
				for (let index = 0; index < growingPlant.output; index++) {
					harvestedPlants.push(growingPlant);
				}
				break;
			case 'Wheat':
				for (let index = 0; index < growingPlant.output; index++) {
					harvestedPlants.push(growingPlant);
				}
				break;
			case 'Sunflower':
				for (let index = 0; index < growingPlant.output; index++) {
					harvestedPlants.push(growingPlant);
				}
				break;
			case 'Asparagus':
				for (let index = 0; index < growingPlant.output; index++) {
					harvestedPlants.push(growingPlant);
				}
				break;
		}
	});
	return harvestedPlants;
};
