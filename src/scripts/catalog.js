const htmlTarget = document.querySelector('.container');

export const Catalog = (harvestedFoodArray) => {
	harvestedFoodArray.forEach((foodObj) => {
		htmlTarget.innerHTML += `<section class="plant">${foodObj.type}</section>`;
	});
};
