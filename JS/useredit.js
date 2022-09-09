// PUT - User 

function userEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const avatar = document.getElementById("avatar").value;

  const http = new XMLHttpRequest();
  http.open("PUT", "https://www.mecallapi.com/api/users/update");
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.send(JSON.stringify({
    "id": id,
    "fname": fname,
    "lname": lname,
    "username": email,
    "email":null,
    "avatar":avatar ||"https://www.mecallapi.com/users/cat.png",
  }));
  
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const userData = JSON.parse(this.response);
      Swal.fire(userData['message']);
      getUser();
    }
  };
}



