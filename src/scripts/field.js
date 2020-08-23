const fieldArray = [];

export const addPlant = (seedObject) => {
	if (Array.isArray(seedObject) === true) {
		for (let seedObjectHolder of seedObject) {
			fieldArray.push(seedObjectHolder);
		}
	} else {
		fieldArray.push(seedObject);
	}
	return fieldArray;
};

export const usePlants = () => {
	return fieldArray.slice();
};
