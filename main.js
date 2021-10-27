var player1_name,player2_name;
function update_players(){
    player1_name = document.getElementById("player_1_name_input").value ; 
    player2_name = document.getElementById("player_2_name_input").value ; 
    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);
    window.location= "second_page.html";
}