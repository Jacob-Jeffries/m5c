// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  let currentTime = document.querySelector('#currT');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //The code snippet below compares the current hour to the ID's of each hour slot on the web app and changes the color based on the time: past, present, future
  setInterval(function () {
    let currHour = dayjs().format('H');

    for (let i=0; i<24; i++){
      let timeSlot = document.getElementById(i);
      if(i > currHour){
        // console.log(document.getElementById(i));
        timeSlot.setAttribute("class", "row time-block future");
      }
      else if(i == currHour){
        timeSlot.setAttribute("class", "row time-block present");
      }
      else if(i < currHour){
        timeSlot.setAttribute("class", "row time-block past");
      }
    }
  }, 1000);
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  //The code snippet below pings the system time every 500ms and displays it on the web app
  setInterval(function() {
    currentTime.innerText = dayjs().format('MMM DD, YYYY [at] hh:mm:ssA');
  }, 500);
});
