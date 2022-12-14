var timeDisplayEl = $('#currentDay');

function displayDate() {
var weekDay = dayjs().format('dddd');
  var rightNow = dayjs().format('MMM DD');
  timeDisplayEl.text(weekDay + ', '+ rightNow);
}
 
function displayTime() {
  var rightNow = dayjs().format('H');
  timeDisplayEl.text(rightNow);
}

displayDate();

var rightNow = dayjs().format('H');
//var showTime = setInterval(rightNow, 1000);
 console.log(rightNow);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // 
  //TODO: Add code to display the current date in the header of the page.
//});




// var itemInput = $( "div" ).has( "textarea" ); 
// //console.log(ItemInput);

// function handleColorTimes(){


//   for(i=0;i<)
//   if(hjhj){

//   }
// }


// itemInput.on('click', handleColorTimes);



// function handleItemSave(event) {
//   event.preventDefault();
//   // read user input from textarea
//   var itemName = itemInput.val().trim();



// var newItem = {
//         name: itemName

//  }

//  // add item to local storage
//   var items = readItemsFromStorage();
//   items.push(newItem);
//   saveItemsToStorage(items);

//   // print project data
//   //printItemData();

//   //clear the textarea inputs
//  //itemInput.val('');

// }




// function readItemsFromStorage() {
//   var items = localStorage.getItem('items');
//    if (items) {
//      items = JSON.parse(items);
//    } else {
//      items = [];
//    }
//    return items;
//  }

// // // Takes an array of projects and saves them in localStorage.
//  function saveItemsToStorage(items) {
//    localStorage.setItem('items', JSON.stringify(items));
//  }

// // // Adds a project to local storage and prints the project data

// };

//   // add project to local storage
//   var projects = readProjectsFromStorage();
//   projects.push(newProject);
//   saveProjectsToStorage(projects);

//   // print project data
//   printProjectData();

//   // clear the form inputs
//   projectNameInputEl.val('');
//   projectTypeInputEl.val('');
//   projectDateInputEl.val('');
// }

// projectFormEl.on('submit', handleProjectFormSubmit);

// // Use jQuery event delegation to listen for clicks on dynamically added delete
// // buttons.
// projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);


//$("#voltaic_holder").css("position", "relative");
//$("#voltaic_holder").removeAttr("style")



// // Gets project data from local storage and displays it
// function printProjectData() {
//   // clear current projects on the page
//   projectDisplayEl.empty();

//   // get projects from localStorage
//   var projects = readProjectsFromStorage();

//   // loop through each project and create a row
//   for (var i = 0; i < projects.length; i += 1) {
//     var project = projects[i];
//     var projectDate = dayjs(project.date);
//     // get date/time for start of today
//     var today = dayjs().startOf('day');

//     // Create row and columns for project
//     var rowEl = $('<tr>');
//     var nameEL = $('<td>').text(project.name);
//     var typeEl = $('<td>').text(project.type);
//     var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

//     // Save the index of the project as a data-* attribute on the button. This
//     // will be used when removing the project from the array.
//     var deleteEl = $(
//       '<td><button class="btn btn-sm btn-delete-project" data-index="' +
//         i +
//         '">X</button></td>'
//     );

//     // add class to row by comparing project date to today's date
//     if (projectDate.isBefore(today)) {
//       rowEl.addClass('project-late');
//     } else if (projectDate.isSame(today)) {
//       rowEl.addClass('project-today');
//     }

//     // append elements to DOM to display them
//     rowEl.append(nameEL, typeEl, dateEl, deleteEl);
//     projectDisplayEl.append(rowEl);
//   }
// }

// // Removes a project from local storage and prints the project data
// function handleDeleteProject() {
//   var projectIndex = parseInt($(this).attr('data-index'));
//   var projects = readProjectsFromStorage();
//   // remove project from the array
//   projects.splice(projectIndex, 1);
//   saveProjectsToStorage(projects);

//   // print projects
//   printProjectData();
// }



// displayTime();
// setInterval(displayTime, 1000);

// printProjectData();
