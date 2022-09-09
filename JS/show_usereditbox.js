// Show User Edit Box

function showUserEditBox(id) {
  const http = new XMLHttpRequest();
  http.open("GET", "https://www.mecallapi.com/api/users/" + id);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const userData = JSON.parse(this.response);
      const user = userData['user'];
      Swal.fire({
        title: 'Edit User',
        html:
          ` <input id="id" type="hidden" value='${user['id']}'>
            <input id="fname" class="swal2-input" placeholder="First Name" value="${user['fname']}">
            <input id="lname" class="swal2-input" placeholder="Last Name" value="${user['lname']}">
            <input id="email"  class="swal2-input" placeholder="Email" value="${user['email']}" >,
            <input id="avatar" class="swal2-input" placeholder="Paste Image url"   value="${user['avatar']}" >`,
        focusConfirm: false,
        preConfirm: () => {
          userEdit();
        }
      })
    }
  };
}


