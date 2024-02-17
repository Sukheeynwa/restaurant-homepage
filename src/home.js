import Leaf from "./images/Leaf.png"
import Plate from "./images/food_10.png";

export const homeContent = document.createElement("div")
homeContent.setAttribute("id", "home-content");

const homeTextContainer = document.createElement("div");
const homeTitle = document.createElement("h1");
const homeSubTitle = document.createElement("h2");
const homeDescription = document.createElement("p");
const orderButton = document.createElement("button");
const plate = document.createElement("img");
const leaf = document.createElement("img");

homeTitle.textContent = "Start something";
homeSubTitle.textContent = "fresh"
homeDescription.textContent = "Culinary Delights is a charming and elegant restaurant located in the heart of City. Nestled amidst the bustling streets, our establishment offers a warm and inviting atmosphere where guests can indulge in exquisite culinary experiences.";
orderButton.setAttribute("id", "book");
orderButton.textContent = "Book Order"

plate.src = Plate;
plate.classList.add("plate");
leaf.src = Leaf;
leaf.classList.add("leaf");

homeTextContainer.appendChild(homeTitle);
homeTextContainer.appendChild(homeSubTitle);
homeTextContainer.appendChild(homeDescription);
homeTextContainer.appendChild(orderButton);

homeContent.appendChild(plate);
homeContent.appendChild(leaf);
homeContent.appendChild(homeTextContainer);