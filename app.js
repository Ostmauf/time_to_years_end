///making constant variables for id´s from html.
const mainContent = document.getElementById("main-content");

//making variables for the current day and the last day of the year.
let currentDate = new Date();
let lastDate = new Date("12/31/2021");
//taking the dates minus each other.
let inDays;
let inHours;
let inMinutes;
let inSecunds;

inDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24))

console.log(inDays);