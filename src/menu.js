import Food01 from "./images/food_01.png";
import Food02 from "./images/food_02.png";
import Food03 from "./images/food_03.png";
import Food04 from "./images/food_04.png";
import Food05 from "./images/food_05.png";

export const menuContent = document.createElement("div");
menuContent.setAttribute("id", "menu-content");

const menuTitle = document.createElement("h1");
const menuSubTitle = document.createElement("h2");
const menuContainer = document.createElement("div");
menuContainer.setAttribute("id", "menu-container");

menuTitle.textContent = "We speak";
menuSubTitle.textContent = "Asian";

menuContent.appendChild(menuTitle);
menuContent.appendChild(menuSubTitle);
menuContent.appendChild(menuContainer);

const foodPic01 = document.createElement("img");
const foodPic02 = document.createElement("img");
const foodPic03 = document.createElement("img");
const foodPic04 = document.createElement("img");
const foodPic05 = document.createElement("img");

foodPic01.src = Food01;
foodPic02.src = Food02;
foodPic03.src = Food03;
foodPic04.src = Food04;
foodPic05.src = Food05;

class foods {
	constructor(foodName, foodPic, foodDescription, foodPrice) {
		this.foodName = foodName;
		this.foodPic = foodPic;
		this.foodDescription = foodDescription;
		this.foodPrice = foodPrice;
	}
};

const food01 = new foods("Thai Green Curry", foodPic01, "Indulge in the rich and aromatic flavors of Thailand with our tantalizing Thai green curry.", "$10.95");

const food02 = new foods("Beef Bulgogi", foodPic02, "Indulge in the rich and aromatic flavors of Thailand with our tantalizing Thai green curry.", "$10.95");

const food03 = new foods("Vegetable Pad", foodPic03, "Indulge in the rich and aromatic flavors of Thailand with our tantalizing Thai green curry.", "$10.95");

const food04 = new foods("Burger", foodPic04, "Indulge in the rich and aromatic flavors of Thailand with our tantalizing Thai green curry.", "$10.95");

const food05 = new foods("Pizza", foodPic05, "Indulge in the rich and aromatic flavors of Thailand with our tantalizing Thai green curry.", "$10.95");

const foodsArray = [food01, food02, food03, food04, food05];

foodsArray.forEach((food) => {
	const foodContainer = document.createElement("div");
	const foodName = document.createElement("h3");
	const foodDescription = document.createElement("p");
	const foodPrice = document.createElement("h4");

	foodName.textContent = food.foodName;
	foodDescription.textContent = food.foodDescription;
	foodPrice.textContent = food.foodPrice;

	foodContainer.appendChild(foodName);
	foodContainer.appendChild(food.foodPic);
	foodContainer.appendChild(foodDescription);
	foodContainer.appendChild(foodPrice);

	menuContainer.appendChild(foodContainer);
});





