import "./style.css";
import Logo from "./images/Logo.png"
import {homeContent} from "./home.js";
import {menuContent} from "./menu.js";
import {aboutContent} from "./about.js";
import {contactContent} from "./contact.js";

const logo = document.createElement("img");
const buttonsContainer = document.querySelector("#buttons");
logo.src = Logo
logo.setAttribute("id", "logo");
buttonsContainer.insertBefore(logo, buttonsContainer.firstChild)

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const content = document.querySelector("#content");
content.appendChild(homeContent);

home.addEventListener("click", () => {
	content.innerHTML = "";
	content.appendChild(homeContent);
});

menu.addEventListener("click", () => {
	content.innerHTML = "";
	content.appendChild(menuContent);
});

about.addEventListener("click", () => {
	content.innerHTML = "";
	content.appendChild(aboutContent);
});

contact.addEventListener("click", () => {
	content.innerHTML = "";
	content.appendChild(contactContent);
})
