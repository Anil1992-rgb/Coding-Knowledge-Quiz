

// grabbing th div with the timer ID //
var timeDisplay = document.getElementById("timer");

// setting the timer countdown function //


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },

  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },

  {
    title: "Arrays in JavaScript can be used to store _______.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above"
  },

  {
    title: "String values must be enclosed within _______ when being assigned to variables",
    choices: ["commas", "Curly Brackets", "Quotes", "parenthesis"],
    answer: "Quotes"
  },

  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  },
];
  
  // creating click function to begin game and setting countdown timer//
  function startQuiz() {
$(".btn").on("click", function() {
  setTime();
  document.getElementById("btn").style.display = "none";
  document.getElementById("intro").style.display = "none";
  var questionsContainer = document.getElementById("questionsContainer").setAttribute("class", "question-content");
  function setTime() {
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeDisplay.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeDisplay.textContent = "";       
      }  
    }, 1000);
    questionSet1();

  // displaying next set of questions //
  function questionSet1 () {
  var questionsElement = document.getElementById("questionsElement");
  questionsElement.textContent = questions[0]["title"];
  var answers = document.getElementById("answersElement");
  for (var i = 0; i<questions[0]["choices"].length; i++) {
  var list = document.createElement("li");
  list.textContent = questions[0]["choices"][i];
  list.setAttribute("class", "btn");
  answers.appendChild(list);
  }
  correct1();
  incorrect1();
  }


  // setting correct function for first answerset //
  function correct1() {
  var Correct1 = document.getElementsByTagName("li")[2];
  console.log(Correct1);
  $(Correct1).on("click", function() {
  var correctDiv = document.createElement("div");
  correctDiv.textContent = ("Correct!");
  $(".mx-auto").append(correctDiv);
  correctDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(correctDiv).delay(200).fadeOut(300);
  questionSet2();
})}

 // setting incorrect function for first answerset //
 function incorrect1() {
  var Incorrect1 = document.getElementsByTagName("li")[0];
  var Incorrect2 = document.getElementsByTagName("li")[1];
  var Incorrect3 = document.getElementsByTagName("li")[3];
  var IncorrectAll1 = [Incorrect1, Incorrect2, Incorrect3];
  $(IncorrectAll1).on("click", function() {
  var incorrectDiv = document.createElement("div");
  incorrectDiv.textContent = ("Wrong!");
  $(".mx-auto").append(incorrectDiv);
  incorrectDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(incorrectDiv).delay(200).fadeOut(300);
  secondsLeft-=10;
  questionSet2();
})}

// displaying next set of questions //
  function questionSet2 (){
  var question2 = document.createElement("div");
  question2.setAttribute("id", "questionsElement");
  $("#questionsContainer").prepend(question2);
  question2.textContent = (questions[1]["title"]);
  var answers2 = document.getElementById("answersElement2");
  for (var i = 0; i<questions[1]["choices"].length; i++) {
  var list2 = document.createElement("li");
  list2.textContent = questions[1]["choices"][i];
  list2.setAttribute("class", "btn");
  answers2.appendChild(list2);
}
correct2();
incorrect2();
}

  // setting correct function for second answer //
  function correct2() {
    var Correct2 = document.getElementsByTagName("li")[6];
    console.log(Correct2);
    $(Correct2).on("click", function() {
    var correct2Div = document.createElement("div");
    correct2Div.textContent = ("Correct!");
    $(".mx-auto").append(correct2Div);
    correct2Div.setAttribute("id", "correctIndicator");
    document.getElementById("answersElement2").style.display = "none";
    document.getElementById("questionsElement").style.display = "none";
    $(correct2Div).delay(200).fadeOut(300);
    questionSet3 ();
  })}

   // setting incorrect function for second answerset //
 function incorrect2() {
  var Incorrect1 = document.getElementsByTagName("li")[4];
  var Incorrect2 = document.getElementsByTagName("li")[5];
  var Incorrect3 = document.getElementsByTagName("li")[7];
  var IncorrectAll1 = [Incorrect1, Incorrect2, Incorrect3];
  $(IncorrectAll1).on("click", function() {
  var incorrectDiv = document.createElement("div");
  incorrectDiv.textContent = ("Wrong!");
  $(".mx-auto").append(incorrectDiv);
  incorrectDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement2").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(incorrectDiv).delay(200).fadeOut(300);
  secondsLeft-=10;
  questionSet3();
})}

  // displaying next set of questions //
  function questionSet3 (){
    var question3 = document.createElement("div");
    question3.setAttribute("id", "questionsElement");
    $("#questionsContainer").prepend(question3);
    question3.textContent = (questions[2]["title"]);
    var answers3 = document.getElementById("answersElement3");
    for (var i = 0; i<questions[2]["choices"].length; i++) {
    var list2 = document.createElement("li");
    list2.textContent = questions[2]["choices"][i];
    list2.setAttribute("class", "btn");
    answers3.appendChild(list2);
  }
  correct3();
  incorrect3();
  }

  // setting correct function for third answer //
  function correct3() {
    var Correct3 = document.getElementsByTagName("li")[11];
    console.log(Correct3);
    $(Correct3).on("click", function() {
    var correct3Div = document.createElement("div");
    correct3Div.textContent = ("Correct!");
    $(".mx-auto").append(correct3Div);
    correct3Div.setAttribute("id", "correctIndicator");
    document.getElementById("answersElement3").style.display = "none";
    document.getElementById("questionsElement").style.display = "none";
    $(correct3Div).delay(200).fadeOut(300);
    questionSet4 ();
  })}

 // setting incorrect function for third answerset //
 function incorrect3() {
  var Incorrect1 = document.getElementsByTagName("li")[8];
  var Incorrect2 = document.getElementsByTagName("li")[9];
  var Incorrect3 = document.getElementsByTagName("li")[10];
  var IncorrectAll1 = [Incorrect1, Incorrect2, Incorrect3];
  $(IncorrectAll1).on("click", function() {
  var incorrectDiv = document.createElement("div");
  incorrectDiv.textContent = ("Wrong!");
  $(".mx-auto").append(incorrectDiv);
  incorrectDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement3").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(incorrectDiv).delay(200).fadeOut(300);
  secondsLeft-=10;
  questionSet4();
})}

  // displaying next set of questions //
  function questionSet4 (){
    var question4 = document.createElement("div");
    question4.setAttribute("id", "questionsElement");
    $("#questionsContainer").prepend(question4);
    question4.textContent = (questions[3]["title"]);
    var answers4 = document.getElementById("answersElement4");
    for (var i = 0; i<questions[3]["choices"].length; i++) {
    var list2 = document.createElement("li");
    list2.textContent = questions[3]["choices"][i];
    list2.setAttribute("class", "btn");
    answers4.appendChild(list2);
  }
  correct4();
  incorrect4();
  }

  // setting correct function for fourth answer //
  function correct4() {
    var Correct4 = document.getElementsByTagName("li")[14];
    console.log(Correct4);
    $(Correct4).on("click", function() {
    var correct4Div = document.createElement("div");
    correct4Div.textContent = ("Correct!");
    $(".mx-auto").append(correct4Div);
    correct4Div.setAttribute("id", "correctIndicator");
    document.getElementById("answersElement4").style.display = "none";
    document.getElementById("questionsElement").style.display = "none";
    $(correct4Div).delay(200).fadeOut(300);
    questionSet5();
  })}

  // setting incorrect function for fourth answerset //
 function incorrect4() {
  var Incorrect1 = document.getElementsByTagName("li")[12];
  var Incorrect2 = document.getElementsByTagName("li")[13];
  var Incorrect3 = document.getElementsByTagName("li")[15];
  var IncorrectAll1 = [Incorrect1, Incorrect2, Incorrect3];
  $(IncorrectAll1).on("click", function() {
  var incorrectDiv = document.createElement("div");
  incorrectDiv.textContent = ("Wrong!");
  $(".mx-auto").append(incorrectDiv);
  incorrectDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement4").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(incorrectDiv).delay(200).fadeOut(300);
  secondsLeft-=10;
  questionSet5(); 
})}

  // displaying next set of questions //
  function questionSet5 (){
    var question5 = document.createElement("div");
    question5.setAttribute("id", "questionsElement");
    $("#questionsContainer").prepend(question5);
    question5.textContent = (questions[4]["title"]);
    var answers5 = document.getElementById("answersElement5");
    for (var i = 0; i<questions[4]["choices"].length; i++) {
    var list2 = document.createElement("li");
    list2.textContent = questions[4]["choices"][i];
    list2.setAttribute("class", "btn");
    answers5.appendChild(list2);
  }
  correct5();
  incorrect5();
  }

  // setting correct function for fifth answer //
  function correct5() {
    var Correct5 = document.getElementsByTagName("li")[19];
    console.log(Correct5);
    $(Correct5).on("click", function() {
    var correct5Div = document.createElement("div");
    correct5Div.textContent = ("Correct!");
    $(".mx-auto").append(correct5Div);
    correct5Div.setAttribute("id", "correctIndicator");
    document.getElementById("answersElement5").style.display = "none";
    document.getElementById("questionsElement").style.display = "none";
    $(correct5Div).delay(200).fadeOut(300);
    scoreInput();
  })}

  // setting incorrect function for fifth answerset //
 function incorrect5() {
  var Incorrect1 = document.getElementsByTagName("li")[16];
  var Incorrect2 = document.getElementsByTagName("li")[17];
  var Incorrect3 = document.getElementsByTagName("li")[18];
  var IncorrectAll1 = [Incorrect1, Incorrect2, Incorrect3];
  $(IncorrectAll1).on("click", function() {
  var incorrectDiv = document.createElement("div");
  incorrectDiv.textContent = ("Wrong!");
  $(".mx-auto").append(incorrectDiv);
  incorrectDiv.setAttribute("id", "correctIndicator");
  document.getElementById("answersElement5").style.display = "none";
  document.getElementById("questionsElement").style.display = "none";
  $(incorrectDiv).delay(200).fadeOut(300);
  secondsLeft-=10;
  timeDisplay.textContent = "Time: " + secondsLeft;
  scoreInput();
})}

  // displaying final score, stopping timer, and storing name/score to local storage//
  function scoreInput () {
    var finalText = document.getElementById("finalScore");
    finalText.textContent = ("FINAL SCORE: " + secondsLeft);
    var finalScore = document.createElement("input");
    finalScore.setAttribute("type", "text");
    finalScore.setAttribute("placeholder", "Enter name");
    finalScore.setAttribute("id", "name");
    $("#finalScoreForm").append(finalScore);
    clearInterval(timerInterval);
    var submitBtn = document.createElement("button");
    submitBtn.textContent = ("Submit");
    $("#finalScoreForm").append(submitBtn);
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
      
      var name = document.querySelector("#name").value;
      var score = secondsLeft;
    
        localStorage.setItem("name", name);
        localStorage.setItem("score", score);
        renderLastRegistered();
      }
    );
  }

}
})}
startQuiz();








