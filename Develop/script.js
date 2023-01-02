// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  let currentTime = document.querySelector('#currT');

  //The code snippet below listens for a click on each save button, then gets the parent ID of the specific button clicked and saves the text to the local storage
  $(this).on('click', '.btn', function(){
    let hour = $(this.parentElement);
    // console.log(hour[0].id);
    let id = hour[0].id;
    todoText = document.body.children[1].children[id].children[1].value;
    // console.log(todoText);
    localStorage.setItem(id, todoText);
  });


  //The code snippet below compares the current hour to the ID's of each hour slot on the web app and changes the color based on the time: past, present, future
  setInterval(function () {
    let currHour = dayjs().format('H');

    for (let i=0; i<24; i++){
      let timeSlot = document.getElementById(i);
      if(i > currHour){
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

  //The code snippet below checks for saved TODOs in local storage
  for(let x=0; x<24; x++){
    // console.log('Checking Local Storage for ID: ' + x);
    let todo = localStorage.getItem(x);
    if(todo){
      // console.log('Stored Value: ' + todo);
      let textArea = document.body.children[1].children[x].children[1]
      textArea.innerText = todo;
    }else{
      // console.log('--No Stored Value--');
    };
  };  

  //The code snippet below pings the system time every 500ms and displays it on the web app
  setInterval(function() {
    currentTime.innerText = dayjs().format('MMM DD, YYYY [at] hh:mm:ssA');
  }, 500);
});
