# Work Day Scheduler

## Description 
This is a simple calendar application that allows the user to save events for each hour of the work day (9am to 5pm). This app runs in the browser and features dynamically updated HTML and CSS, powered by JavaScript and the [Moment.js](https://momentjs.com/) library to work with date and time.

## Link to Deployed Application
https://allaroundd.github.io/scheduler/

## Usage

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./assets/05-third-party-apis-homework-demo.gif)

## What I Learned
This project allowed me to incorporate HTML, JavaScript, CSS and Bootstrap. I learned how to dynamically build the HTML based on the array and utilize a date library. I had a challenge with the colour coding but figured out the solution was to use military time.