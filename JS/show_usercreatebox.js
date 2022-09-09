// Show User Create Box

function showUserCreateBox() {
  Swal.fire({
    title: 'Create User',
    html:
      ` <input id="id" type="hidden">
        <input id="fname" class="swal2-input" placeholder="First Name">
        <input id="lname" class="swal2-input" placeholder="Last Name">
        <input id="email" class="swal2-input" placeholder="Email">
        <input id="avatar" class="swal2-input" placeholder="Paste Your Image Url or">
        <div>Copy this Image Url</div>
        <div style="color: blue;"> https://i.ibb.co/jLp2kf4/Pics-Art-03-23-07-39-12.jpg</div>`,
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })
}
