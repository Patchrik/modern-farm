import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant } from './field.js';

export const plantSeeds = (planArray) => {
	planArray.forEach((rowInArray) => {
		rowInArray.forEach((seedObj) => {
			switch (seedObj) {
				case 'Asparagus':
					addPlant(createAsparagus());
					break;

				case 'Corn':
					addPlant(createCorn());
					break;

				case 'Potato':
					addPlant(createPotato());
					break;

				case 'Soybean':
					addPlant(createSoybean());
					break;

				case 'Sunflower':
					addPlant(createSunflower());
					break;

				case 'Wheat':
					addPlant(createWheat());
					break;
			}
		});
	});
};
