
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";

    function addRoom()
    {
      room_nme =document.getElementById("room_name").value
      firebase.database().ref("/").child("room_neme").update({
        purpose : "adicionar nome da sala"
      });

      localStorage.setItem("room_name", room_neme);

      window.location = "kwitter_page.html";
    }
}

