const currentDayEl = document.getElementById("currentDay");
const dayContainer = document.getElementById("dayBlock");
const calendarListEl = document.querySelector('#calendarlist');
const currenthour = moment().format("HH");  // military time in order to colour code the time blocks

// This is the array that is used to store the calendar items 9AM to 5PM
let calendarList = localStorage.calendarList ? JSON.parse(localStorage.calendarList) :
    {
        "9AM": "",
        "10AM": "",
        "11AM": "",
        "12PM": "",
        "1PM": "",
        "2PM": "",
        "3PM": "",
        "4PM": "",
        "5PM": ""
    };

// Set date at top of scheduler
let currDate = new moment().format("dddd, MMMM Do");
currentDayEl.innerHTML += currDate

// This function saves the calendar item (and array) to local storage
function saveItem(time, event) {
    event.preventDefault();
    const itemEl = document.getElementById(time);
    calendarList[time] = itemEl.value.trim();
    // // save to local storage
    localStorage.calendarList = JSON.stringify(calendarList);
    renderList();
}

// This function is the main function to render the calendar at load and after save.
function renderList() {
    calendarListEl.innerHTML = "";

    // This is the function that sets the colour and builds the time blocks based on the hour
    function displayColor(time, index) {
        const item = calendarList[time];
        let indexClass = "";
        let momentTime = moment(time, 'hA').format("HH");   // military time in order to compare with the current hour
        // check if the time value is equal to the current hour
        // if equals, set the item to red; if less, set to grey; if greater, set to green
        if (momentTime == currenthour) {
            indexClass = "description present";
        } else if (momentTime < currenthour) {
            indexClass = "description past";
        } else {
            indexClass = "description future";
        }
        // This is building the time blocks based on the array.
        calendarListEl.innerHTML +=
            `
            <div id='listgroup' class="input-group row">
                <div class="input-group-prepend time-block">
                    <span class="input-group-text hour">${time}</span>
                </div>
                <textarea id='${time}' type="text" class="${indexClass}" data-idx='${index}'>${item}</textarea>
                <div class="input-group-append">
                    <button id="savebtn${index}" type="button" class="saveBtn" onclick="saveItem('${time}',event);"><i class="fas fa-lock"></i></button>
                </div>
            </div>
            `;
    }
    // Need to set the colour of the time blocks
    Object.keys(calendarList).forEach(displayColor);
}

renderList();