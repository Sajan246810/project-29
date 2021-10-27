var player_1_name = localStorage.getItem("player1");
var player_2_name = localStorage.getItem("player2");

var player_1_score = 0;
var player_2_score = 0;

var question_turn = "player_1";
var answer_turn = "player_2";

console.log(player_1_name);
console.log(player_2_name);

document.getElementById("player1_name").innerHTML = player_1_name;
document.getElementById("player2_name").innerHTML = player_2_name;

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2_name;

function send() {
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    actual_answer = parseInt(num1) * parseInt(num2);
    console.log(actual_answer);
    question = "<h4>Q. " + num1 + "*" + num2 + "</h4>";
    answer = "<br> Answer  <input type='text' id='input_check'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    document.getElementById("output").innerHTML = question + answer + check_btn;
    num1 = "";
    num2 = "";
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
};
 
function check() {
    var upadate_1_score;
    var upadate_2_score
    var get_answer = document.getElementById("input_check").value ;
    if (get_answer == actual_answer) {
        if (answer_turn == "player_1") {
             upadate_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = upadate_1_score;
            console.log(upadate_1_score);
        }
        else{
            var upadate_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = upadate_2_score;
        }
        actual_answer = "";
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question turn : " + player_2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question turn : " + player_1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player_1_name;
    }
    
}