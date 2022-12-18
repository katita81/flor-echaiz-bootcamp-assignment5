var timeDisplay = $('#currentDay');//it holds the <p> element for the current time

function displayDate() {//it uses the dayjs and format functions to display the weekDay, month and number day in the desired format
  var weekDayMonthDate = dayjs().format('dddd' + ', ' + 'MMM DD');
  timeDisplay.text(weekDayMonthDate);
}
  
displayDate();

var rightNowHour = dayjs().format('H');// it holds the current hour to be compared with the times for the items of the todo list
console.log(rightNowHour);

 function setPaPrFuClass(){ //It compares the current hour to the particular time for a task, assigning a class of past, present or future to the task time.
  for(i=9; i<18; i++){
    if(i < rightNowHour){
      console.log(i+" is less than"+" Now Hour:"+ rightNowHour);
      var divClass= $('#'+i).addClass('past');
      console.log(divClass);
    }
     else if(i == rightNowHour){
      console.log(i+" is equal to "+" Now Hour:"+ rightNowHour);
      var divClass= $('#'+i).addClass('present');
      console.log(divClass);
     }
     else{
      console.log(i+" is greater than"+" Now Hour:"+ rightNowHour);
      var divClass= $('#'+i).addClass('future');
      console.log(divClass);
    }
  }
 }

 setPaPrFuClass();

function saveItem(time) { //save the task entered by the user in the local storage
  var input= $("#"+time+ " textarea").val();
  localStorage.setItem('description'+ time, input );
}

function getItems(){// retrieves the tasks from the local storage
  for (time=9; time<18; time++){
    itemRetrieved = localStorage.getItem('description'+ time);
    if (itemRetrieved !== null) {
      $("#"+time+ " textarea").val(itemRetrieved);
    }
  }
}

getItems();


//add a lisentner to each of the buttons within the pertaining time div in order to call the saveItem() function to store the task entered.
$("#9 button").click(function() {saveItem(9)});
$("#10 button").click(function() {saveItem(10)});
$("#11 button").click(function() {saveItem(11)});
$("#12 button").click(function() {saveItem(12)});
$("#13 button").click(function() {saveItem(13)});
$("#14 button").click(function() {saveItem(14)});
$("#15 button").click(function() {saveItem(15)});
$("#16 button").click(function() {saveItem(16)});
$("#17 button").click(function() {saveItem(17)});