import AboutUs from "./images/AboutUs.png";

export const aboutContent = document.createElement("div");
aboutContent.setAttribute("id", "about-content");

const aboutUsPic = document.createElement("img");

aboutUsPic.src = AboutUs;

const aboutTitle = document.createElement("h1");
const aboutSubTitle = document.createElement("h2");
const aboutDescription = document.createElement("p");
const menuTextContainer = document.createElement("div");

aboutTitle.textContent = "About us";
aboutSubTitle.textContent = "Koi's";
aboutDescription.textContent = "Behind every great meal is a team of passionate and talented individuals, and at Culinary Delights, our team is the heart and soul of our restaurant. From our skilled chefs who bring creativity and expertise to the kitchen, to our warm and attentive front-of-house staff who ensure that every guest feels welcomed and cared for, each member of our team plays a vital role in creating memorable dining experiences.";

aboutContent.appendChild(aboutUsPic);
aboutContent.appendChild(menuTextContainer);

menuTextContainer.appendChild(aboutTitle);
menuTextContainer.appendChild(aboutSubTitle);
menuTextContainer.appendChild(aboutDescription);
