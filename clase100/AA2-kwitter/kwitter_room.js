
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
      apiKey: "AIzaSyDOQlBGI92RXqmmVNfrzD8AgJoSfcfH2aw",
      authDomain: "pruebaclase-9a251.firebaseapp.com",
      projectId: "pruebaclase-9a251",
      storageBucket: "pruebaclase-9a251.appspot.com",
      messagingSenderId: "280973277877",
      appId: "1:280973277877:web:c61a5fe6158faf64aadcfc"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Nombre de la sala: " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();
