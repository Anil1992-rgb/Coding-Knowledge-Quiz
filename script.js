// grabbing th div with the timer ID //
var timeDisplay = document.getElementById("timer");

// setting the timer countdown function //
function setTime() {
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeDisplay.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeDisplay.textContent = "";
        }
    }, 1000);
}

$(".btn-primary").on("click", function() {
    setTime();
})

var q = [
    "<strong>Commonly used data types DO NOT include:<br/><br/>",
    "<strong>The condition in an if/else statement is enclosed within _______:<br/><br/>",
    "<strong>Arrays in JavaScript can be used to store ______:<br/><br/>",
    "<strong>String values must be enclosed within _____ when being assigned to variables:<br/><br/>",
    "<strong>A very usefull tool used during development and debugging for printing content to the debugger is:<br/><br/>"
];

var a1 = ["<button class=buttons002 onclick=q1i()>Booleans</button>",
    "<button class=buttons002 onclick=q2c()>Parentheses</button>",
    "<button class=buttons002 onclick=q3i()>Numbers & Strings</button>",
    "<button class=buttons002 onclick=q4i()>Curly Brackets</button>",
    "<button class=buttons002 onclick=q5i()>For Loops</button>"
];

var a2 = ["<button class=buttons002 onclick=q1c()>Alerts</button>",
    "<button class=buttons002 onclick=q2i()>Quotes</button>",
    "<button class=buttons002 onclick=q3i()>Other Arrays</button>",
    "<button class=buttons002 onclick=q4i()>Commas</button>",
    "<button class=buttons002 onclick=q5i()>JavaScript</button>"
];

var a3 = ["<button class=buttons002 onclick=q1i()>Strings</button>",
    "<button class=buttons002 onclick=q2i()>Curly Brackets</button>",
    "<button class=buttons002 onclick=q3i()>Booleans</button>",
    "<button class=buttons002 onclick=q4c()>Quotes</button>",
    "<button class=buttons002 onclick=q5i()>Terminal/Bash</button>"
];

var a4 = ["<button class=buttons002 onclick=q1i()>Numbers</button>",
    "<button class=buttons002 onclick=q2i()>Square Brackets</button>",
    "<button class=buttons002 onclick=q3c()>All of the Above</button>",
    "<button class=buttons002 onclick=q4i()>Parentheses</button>",
    "<button class=buttons002 onclick=q5c()>Console.log</button>"
];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct"];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];



var s = 0;
s++;

document.getElementById("scoree").style.display = "none";

function begin001() {
    document.getElementById("header").style.display = "none";
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];

}

function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score001.innerHTML = s++;
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
    question001.innerHTML = q[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    next001.innerHTML = "";
    answer001.innerHTML = "";
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
    score001.innerHTML = s++;
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
    question001.innerHTML = q[4];
    option001.innerHTML = a1[4];
    option002.innerHTML = a2[4];
    option003.innerHTML = a3[4];
    option004.innerHTML = a4[4];
    next001.innerHTML = "";
    answer001.innerHTML = "";
}

function q5c() {
    answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End Of Quiz</button>";
    score001.innerHTML = s++;
}

function q5i() {
    answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End Of Quiz</button>";
}

function end001() {
    message001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001() {
    location.reload();
}