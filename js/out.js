/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  //definiowanie guzikow
  var addTask = document.getElementById("add");
  var delCmplTask = document.getElementById("delete");

  //definiowanie kolejnych list
  var addWorkListHere = document.getElementById("worklist");
  var addEduListHere = document.getElementById("edulist");
  var addExListHere = document.getElementById("exerciselist");
  var addHouseListHere = document.getElementById("householdlist");
  var addOtherListHere = document.getElementById("otherlist");

  //definiowanie selecta
  var selectCategory = document.getElementById("categories");
  var category = document.getElementById("categories").value;

  //definiowanie modals = okienek pop-up o błędzie
  var modals = document.getElementsByClassName("modal");

  //definiujemy funkcje do guzikow dodawanych do zadania
  function removeItem() {
    this.parentElement.parentNode.removeChild(this.parentElement);
    localStorage.todoWorkList = addWorkListHere.innerHTML;
    localStorage.todoEduList = addEduListHere.innerHTML;
    localStorage.todoExList = addExListHere.innerHTML;
    localStorage.todoHouseList = addHouseListHere.innerHTML;
    localStorage.todoOtherList = addOtherListHere.innerHTML;
  }

  function completeItem() {
    this.parentElement.classList.toggle("done");
    localStorage.todoWorkList = addWorkListHere.innerHTML;
    localStorage.todoEduList = addEduListHere.innerHTML;
    localStorage.todoExList = addExListHere.innerHTML;
    localStorage.todoHouseList = addHouseListHere.innerHTML;
    localStorage.todoOtherList = addOtherListHere.innerHTML;
  }

  function deleteAllCompleted() {

    var allDoneTasks = document.getElementsByClassName("done");

    while (allDoneTasks.length) {
      allDoneTasks[0].parentElement.removeChild(allDoneTasks[0]);
    }
    localStorage.todoWorkList = addWorkListHere.innerHTML;
    localStorage.todoEduList = addEduListHere.innerHTML;
    localStorage.todoExList = addExListHere.innerHTML;
    localStorage.todoHouseList = addHouseListHere.innerHTML;
    localStorage.todoOtherList = addOtherListHere.innerHTML;
  }

  //funkcja zamykająca modals
  function closeModal() {
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }

  delCmplTask.addEventListener("click", deleteAllCompleted);

  //zamykanie modals po kliknięciu poza okno komunikatu
  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", closeModal);
  }
  //zamykanie modal po kliknięciu w "x"
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", closeModal);
  }

  addTask.addEventListener("click", function () {

    //tworzymy guziki complete i delete które pojawiają się przy "li"
    var completeTaskBtn = document.createElement("button");
    completeTaskBtn.className = "fa fa-check text-success btnStyle";

    var deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.className = "fa fa-times text-danger btnStyle";

    //dodajemy im moce
    completeTaskBtn.addEventListener("click", completeItem);
    deleteTaskBtn.addEventListener("click", removeItem);

    //zdefiniowanie tresci zadania
    var taskToAdd = document.createElement("li");
    var taskText = document.getElementById("taskcontent").value;
    taskToAdd.innerText = taskText;
    var listToAdd;
    var chooseCategory = document.getElementById("modalCategory");

    //wybieramy liste gdzie adanie ma byc dodane
    if (taskText.length > 0) {
      switch (selectCategory.selectedIndex) {
        // case 0: alert("Choose category");
        case 0:
          chooseCategory.style.display = "block";
          break;
        case 1:
          listToAdd = addWorkListHere;
          break;
        case 2:
          listToAdd = addEduListHere;
          break;
        case 3:
          listToAdd = addExListHere;
          break;
        case 4:
          listToAdd = addHouseListHere;
          break;
        case 5:
          listToAdd = addOtherListHere;
      }

      //dodajemy: guziki do zadania a zadanie do listy
      taskToAdd.appendChild(completeTaskBtn);
      taskToAdd.appendChild(deleteTaskBtn);
      listToAdd.appendChild(taskToAdd);
    } else if (taskText.length <= 0) {
      // alert("Please describe your task")
      var modalTask = document.getElementById("modalTask");
      modalTask.style.display = "block";
    }

    //zapisujemy wszystkie listy do localstorage
    localStorage.todoWorkList = addWorkListHere.innerHTML;
    localStorage.todoEduList = addEduListHere.innerHTML;
    localStorage.todoExList = addExListHere.innerHTML;
    localStorage.todoHouseList = addHouseListHere.innerHTML;
    localStorage.todoOtherList = addOtherListHere.innerHTML;
  });

  //ładujemy localstorage przy odświeżeniu strony
  if (localStorage.todoWorkList !== undefined) {
    addWorkListHere.innerHTML = localStorage.todoWorkList;
    //dodajemy na nowo możliwość kasowania do guzikow
    var btnsDel = addWorkListHere.getElementsByClassName("text-danger");
    for (var i = 0; i < btnsDel.length; i++) {
      btnsDel[i].addEventListener("click", removeItem);
    }
    //dodajemy na nowo możliwość "complete" do guzików
    var btnsComplete = addWorkListHere.getElementsByClassName("text-success");
    for (var i = 0; i < btnsComplete.length; i++) {
      btnsComplete[i].addEventListener("click", completeItem);
    }
  }

  if (localStorage.todoEduList !== undefined) {
    addEduListHere.innerHTML = localStorage.todoEduList;
    var btnsDel = addEduListHere.getElementsByClassName("text-danger");
    for (var i = 0; i < btnsDel.length; i++) {
      btnsDel[i].addEventListener("click", removeItem);
    }
    var btnsComplete = addEduListHere.getElementsByClassName("text-success");
    for (var i = 0; i < btnsComplete.length; i++) {
      btnsComplete[i].addEventListener("click", completeItem);
    }
  }

  if (localStorage.todoExList !== undefined) {
    addExListHere.innerHTML = localStorage.todoExList;
    var btnsDel = addExListHere.getElementsByClassName("text-danger");
    for (var i = 0; i < btnsDel.length; i++) {
      btnsDel[i].addEventListener("click", removeItem);
    }
    var btnsComplete = addExListHere.getElementsByClassName("text-success");
    for (var i = 0; i < btnsComplete.length; i++) {
      btnsComplete[i].addEventListener("click", completeItem);
    }
  }

  if (localStorage.todoHouseList !== undefined) {
    addHouseListHere.innerHTML = localStorage.todoHouseList;
    var btnsDel = addHouseListHere.getElementsByClassName("text-danger");
    for (var i = 0; i < btnsDel.length; i++) {
      btnsDel[i].addEventListener("click", removeItem);
    }
    var btnsComplete = addHouseListHere.getElementsByClassName("text-success");
    for (var i = 0; i < btnsComplete.length; i++) {
      btnsComplete[i].addEventListener("click", completeItem);
    }
  }

  if (localStorage.todoOtherList !== undefined) {
    addOtherListHere.innerHTML = localStorage.todoOtherList;
    var btnsDel = addOtherListHere.getElementsByClassName("text-danger");
    for (var i = 0; i < btnsDel.length; i++) {
      btnsDel[i].addEventListener("click", removeItem);
    }
    var btnsComplete = addOtherListHere.getElementsByClassName("text-success");
    for (var i = 0; i < btnsComplete.length; i++) {
      btnsComplete[i].addEventListener("click", completeItem);
    }
  }
});
//koniec DOMContentLoaded

/***/ })
/******/ ]);