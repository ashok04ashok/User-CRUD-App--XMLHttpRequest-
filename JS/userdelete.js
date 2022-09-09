// Delete - User

function userDelete(id) {
  const http = new XMLHttpRequest();
  http.open("DELETE", "https://www.mecallapi.com/api/users/delete");
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.send(JSON.stringify({ "id": id }));

  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      const userData = JSON.parse(this.response);
      Swal.fire(userData['message']);
      getUser();
    }
  };
}


