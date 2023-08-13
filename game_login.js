function addUser() {
    playerName_1 = document.getElementById("player1_name_input").value;
    playerName_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("playerName_1", playerName_1) ;
    localStorage.setItem("playerName_2" , playerName_2) ;

    window.location = "game_page.html" ;
}
