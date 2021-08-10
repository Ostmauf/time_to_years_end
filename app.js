///making constant variables for id´s from html.
const mainContent = document.getElementById("main-content");

//making variables for the current day and the last day of the year.
let currentDate = new Date();
const lastDate = new Date("12/31/2021");
//taking the dates minus each other.

inDays = Math.floor((lastDate - currentDate) / (1000 * 3600 * 24)) + " dagar"

mainContent.innerHTML = inDays;