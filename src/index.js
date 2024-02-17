import "./style.css";
import Logo from "./images/Logo.png"
import {homeContent} from "./home.js";

const logo = document.createElement("img");
const buttonsContainer = document.querySelector("#buttons");
logo.src = Logo
logo.setAttribute("id", "logo");
buttonsContainer.insertBefore(logo, buttonsContainer.firstChild)

const content = document.querySelector("#content");
content.appendChild(homeContent);
