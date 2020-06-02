const currentDayEl = document.getElementById("currentDay");
const dayContainer = document.getElementById("dayBlock");
const calendarListEl = document.querySelector('#calendarlist');

var now = moment().format("dddd, MMMM Do");

// console.log(`now: ${now}`);
// console.log(currentDayEl);
currentDayEl.textContent = `${now}`;

// var currenthour = moment().format("hA");
var currenthour = moment().format("HH");
// simulating the hour
// var currenthour = "12PM";

// console.log(now);
// console.log(`now hour: ${currenthour}`);


function saveItem(event) {
    var item = event.target.id;
    console.log(`You clicked item: ${item}`);
}

let calendarList = localStorage.calendarList ? JSON.parse(localStorage.calendarList) :
    {
        "9AM": "stuff",
        "10AM": "stuff2",
        "11AM": "stuff3",
        "12PM": "stuff4",
        "1PM": "stuff5",
        "2PM": "stuff6",
        "3PM": "stuff7",
        "4PM": "stuff8",
        "5PM": "stuff9"
    };


function renderList() {
    calendarListEl.innerHTML = "";

    function displayColor(time, index) {
        const item = calendarList[time];
        let indexClass = "";
        let momentTime = moment(time, 'hA').format("HH");
        // let currentTimemilitary = moment(currenthour, 'hA').format("HH");
        if ( momentTime == currenthour ) {
            // console.log(`[displayColor]: hour equals! ${time}`);
            indexClass = "description present";
        } else if (momentTime < currenthour) {
            // console.log(`[displayColor]: time < currenthour`);
            indexClass = "description past";
        } else {
            // console.log(`[displayColor]: else`);
            indexClass = "description future";
        }
        
        calendarListEl.innerHTML +=
            `
            <div class="input-group row">
                <div class="input-group-prepend">
                <span class="input-group-text hour">${time}</span>
                </div>
                <input id='${time}' type="text" class="${indexClass}" data-idx='${index}'>
                <div class="input-group-append">
            <button id="savebtn${index}" type="button" class="saveBtn fas fa-lock" onclick="saveItem(event);"> </button>
          </div>
        </div>
            `;
    }

    Object.keys(calendarList).forEach(displayColor);
}




// for(var i = 0; i < calendarListEl.length; i++)
// {
//     console.log(`in for each`);
//     if (hour == "5PM") {
//         document.querySelector("#hour9").setAttribute("class", "description present");
//         document.querySelector("#hour8").setAttribute("class", "description past");
//         document.querySelector("#hour7").setAttribute("class", "description past");
//         document.querySelector("#hour6").setAttribute("class", "description past");
//         document.querySelector("#hour5").setAttribute("class", "description past");
//         document.querySelector("#hour4").setAttribute("class", "description past");
//         document.querySelector("#hour3").setAttribute("class", "description past");
//         document.querySelector("#hour2").setAttribute("class", "description past");
//     }
// }

renderList();