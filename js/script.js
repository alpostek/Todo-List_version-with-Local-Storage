document.addEventListener("DOMContentLoaded", function() {
  //definiowanie guzikow
 var addTask = document.getElementById("add");
 var delCmplTask = document.getElementById("delete");
 //definiowanie kolejnych list
 var addWorkListHere = document.getElementById("worklist");
 var addEduListHere = document.getElementById("edulist");
 var addExListHere = document.getElementById("exerciselist");
 var addHouseListHere = document.getElementById("householdlist");
 var addOtherListHere = document.getElementById("otherlist")
 //definiowanie selecta
 var selectCategory = document.getElementById("categories");
 var category = document.getElementById("categories").value;

//definiujemy funkcje do guzikow dodawanych do zadania
function removeItem(){
  this.parentElement.parentNode.removeChild(this.parentElement);
  localStorage.todoWorkList = addWorkListHere.innerHTML;
  localStorage.todoEduList = addEduListHere.innerHTML;
  localStorage.todoExList = addExListHere.innerHTML;
  localStorage.todoHouseList = addHouseListHere.innerHTML;
  localStorage.todoOtherList = addOtherListHere.innerHTML;
}

function completeItem(){
  this.parentElement.classList.toggle("done");
  localStorage.todoWorkList = addWorkListHere.innerHTML;
  localStorage.todoEduList = addEduListHere.innerHTML;
  localStorage.todoExList = addExListHere.innerHTML;
  localStorage.todoHouseList = addHouseListHere.innerHTML;
  localStorage.todoOtherList = addOtherListHere.innerHTML;
}

function deleteAllCompleted(){

  var allDoneTasks = document.getElementsByClassName("done")

  while(allDoneTasks.length){
    allDoneTasks[0].parentElement.removeChild(allDoneTasks[0]);
  }
  localStorage.todoWorkList = addWorkListHere.innerHTML;
  localStorage.todoEduList = addEduListHere.innerHTML;
  localStorage.todoExList = addExListHere.innerHTML;
  localStorage.todoHouseList = addHouseListHere.innerHTML;
  localStorage.todoOtherList = addOtherListHere.innerHTML;
}



delCmplTask.addEventListener("click", deleteAllCompleted)


 addTask.addEventListener("click", function(){

   //tworzymy guziki complete i delete
  // var completeTaskBtn = document.createElement("button");
  // completeTaskBtn.innerText= "Complete";
  // completeTaskBtn.className = "btn btn-success btnStyle";
  var completeTaskBtn = document.createElement("button");
  completeTaskBtn.className = "fa fa-check text-success btnStyle";
  // completeTaskBtn.className ="checkStyle";

  var deleteTaskBtn = document.createElement("button");
  // deleteTaskBtn.innerText = "Delete";
  // deleteTaskBtn.className = "btn btn-danger btnStyle";
  deleteTaskBtn.className = "fa fa-times text-danger btnStyle";

  //dodajemy im moce
  completeTaskBtn.addEventListener("click", completeItem);
  deleteTaskBtn.addEventListener("click", removeItem);


   //zdefiniowanie tresci zadania
   var taskToAdd = document.createElement("li");
   var taskText = document.getElementById("taskcontent").value;
   taskToAdd.innerText = taskText;
   var listToAdd;

//wybieramy liste gdzie adanie ma byc dodane
    if (taskText.length > 0){
    switch(selectCategory.selectedIndex){
      case 0: alert("Choose category");
      break;
      case 1: listToAdd = addWorkListHere;
      break;
      case 2: listToAdd = addEduListHere;
      break;
      case 3: listToAdd = addExListHere;
      break;
      case 4: listToAdd = addHouseListHere;
      break;
      case 5: listToAdd = addOtherListHere;
    }

//dodajemy: guziki do zadania a zadanie do listy
    taskToAdd.appendChild(completeTaskBtn);
    taskToAdd.appendChild(deleteTaskBtn);
    listToAdd.appendChild(taskToAdd)

  } else if (taskText.length<=0){
        alert("Please describe your task")
      }



//zapisujemy wszystkie listy do localstorage
    localStorage.todoWorkList = addWorkListHere.innerHTML;
    localStorage.todoEduList = addEduListHere.innerHTML;
    localStorage.todoExList = addExListHere.innerHTML;
    localStorage.todoHouseList = addHouseListHere.innerHTML;
    localStorage.todoOtherList = addOtherListHere.innerHTML;

  });

//ładujemy localstorage przy odświeżeniu strony
 if (localStorage.todoWorkList !== undefined){
   addWorkListHere.innerHTML = localStorage.todoWorkList;
   //dodajemy na nowo możliwość kasowania do guzikow
   var btnsDel = addWorkListHere.getElementsByClassName("text-danger");
   for (var i=0; i<btnsDel.length; i++){
     btnsDel[i].addEventListener("click", removeItem)
   }
   //dodajemy na nowo możliwość "complete" do guzików
   var btnsComplete = addWorkListHere.getElementsByClassName("text-success");
   for (var i=0; i<btnsComplete.length; i++){
     btnsComplete[i].addEventListener("click", completeItem);
   }
 }

 if (localStorage.todoEduList !== undefined){
    addEduListHere.innerHTML = localStorage.todoEduList;
    var btnsDel = addEduListHere.getElementsByClassName("text-danger");
    for (var i=0; i<btnsDel.length; i++){
      btnsDel[i].addEventListener("click", removeItem)
    }
    var btnsComplete = addEduListHere.getElementsByClassName("text-success");
    for (var i=0; i<btnsComplete.length; i++){
      btnsComplete[i].addEventListener("click", completeItem);
    }
 }

 if (localStorage.todoExList !== undefined){
    addExListHere.innerHTML = localStorage.todoExList;
    var btnsDel = addExListHere.getElementsByClassName("text-danger");
    for (var i=0; i<btnsDel.length; i++){
      btnsDel[i].addEventListener("click", removeItem)
    }
    var btnsComplete = addExListHere.getElementsByClassName("text-success");
    for (var i=0; i<btnsComplete.length; i++){
      btnsComplete[i].addEventListener("click", completeItem);
    }
 }

 if (localStorage.todoHouseList !== undefined){
    addHouseListHere.innerHTML = localStorage.todoHouseList;
    var btnsDel = addHouseListHere.getElementsByClassName("text-danger");
    for (var i=0; i<btnsDel.length; i++){
      btnsDel[i].addEventListener("click", removeItem)
    }
    var btnsComplete = addHouseListHere.getElementsByClassName("text-success");
    for (var i=0; i<btnsComplete.length; i++){
      btnsComplete[i].addEventListener("click", completeItem);
    }
 }

 if (localStorage.todoOtherList !== undefined){
    addOtherListHere.innerHTML = localStorage.todoOtherList;
    var btnsDel = addOtherListHere.getElementsByClassName("text-danger");
    for (var i=0; i<btnsDel.length; i++){
      btnsDel[i].addEventListener("click", removeItem)
    }
    var btnsComplete = addOtherListHere.getElementsByClassName("text-success");
    for (var i=0; i<btnsComplete.length; i++){
      btnsComplete[i].addEventListener("click", completeItem);
    }
 }


})
//koniec DOMContentLoaded
