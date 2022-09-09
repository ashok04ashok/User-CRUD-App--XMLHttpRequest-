// Post - user

function userCreate() {
  const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("email").value;
    const avatar = document.getElementById("avatar").value;
    
  const http = new XMLHttpRequest();
  http.open("POST", "https://www.mecallapi.com/api/users/create");
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.send(JSON.stringify({ 
    "fname": fname, 
    "lname": lname,
    "username": username,
    "email":username, 
    "avatar":avatar ||"https://www.mecallapi.com/users/cat.png"
  }));

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    const userData = JSON.parse(this.response);
    Swal.fire(userData['message']);
    getUser();
    }
  };
}


