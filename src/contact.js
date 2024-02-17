import Map from "./images/Map.png";

export const contactContent = document.createElement("div");
contactContent.setAttribute("id", "contact-content");

const contactTitle = document.createElement("h1");
const contactSubTitle = document.createElement("h2");
const imgContainer = document.createElement("div");
const formContainer = document.createElement("div");
formContainer.setAttribute("id", "form-container");

const contactUs = document.createElement("p");
contactUs.textContent = `Have a question, comment, or special request? We'd love to hear from you! Get in touch with us using the contact information below:

Address:
123 Main Street
[City], [State], [ZIP Code]

Phone:
Main Line: (555) 123-4567
Reservations: (555) 987-6543

Email:
General Inquiries: info@culinarydelights.com
Reservations: reservations@culinarydelights.com
Events & Catering: events@culinarydelights.com`


contactTitle.textContent = "Contact";
contactSubTitle.textContent = "Us";

const map = document.createElement("img");
map.src = Map;

formContainer.appendChild(contactUs);

contactContent.appendChild(contactTitle);
contactContent.appendChild(contactSubTitle);
contactContent.appendChild(imgContainer);

imgContainer.appendChild(map);
imgContainer.appendChild(formContainer);
