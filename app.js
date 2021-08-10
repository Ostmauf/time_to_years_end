///making constant variables for id´s from html.
const mainContent = document.getElementById("main-content");

//making variables for the current day and the last day of the year.
let currentDate = new Date();
const lastDate = new Date("12/31/2021");
//counts the dates and changes from ms to days.

inDays = Math.floor((lastDate - currentDate) / (1000 * 3600 * 24)) + " dagar"

mainContent.innerHTML = inDays;