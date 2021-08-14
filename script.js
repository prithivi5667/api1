// random user generator api
const url = "https://randomuser.me/api/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const dyna = document.querySelector(".dyna");
    const datePre = data.results[0].registered.date.split("T");

    // adding the tags with data into html
    dyna.innerHTML = `
    <div class="col-4 text-center pt-3 bo-right">
    <img
      src="${data.results[0].picture.large}"
      alt="profile"
      width="200px".results[0]
      style="border-radius: 50%"
      class="mx-auto d-block mb-4"
    />
    <h4 class="t-name pb-3 mb-3 bo-down">
      <span class="font-weight-bold">${data.results[0].name.first}</span>
      ${data.results[0].name.last}
    </h4>
    <span class="bo-down"></span>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-6">
        <span class="font-weight-bold">Title:</span> ${data.results[0].name.title}
      </div>
      <div class="col-6">
        <span class="font-weight-bold">Age:</span> ${data.results[0].dob.age}
      </div>
    </div>
  </div>

  <div class="col-8 pt-4 text-center">
    <div class="dp-pic">
      <img
        src="https://picsum.photos/1080/380"
        alt="dp-pic"
        width="95%"
        class="mx-auto d-block"
        style="border-radius: 10px; opacity: 0.25"
      />
      <div class="row d-flex dp-text">
        <div class="col-6">
          <i class="fas fa-envelope"></i> <br />
          ${data.results[0].email}
        </div>
        <div class="col-6">
          <i class="fas fa-map-marker-alt"></i> <br />
          ${data.results[0].location.country}
        </div>
      </div>
    </div>
    <div class="row pt-4 cpy">
      <div class="col-6">
        <span class="font-weight-bold">Username:</span><br>
        ${data.results[0].login.username}
      </div>
      <div class="col-6">
        <span class="font-weight-bold">Password:</span><br>
        ${data.results[0].login.password}
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-6">
        <span class="font-weight-bold">Salt:</span><br> ${data.results[0].login.salt}
      </div>
      <div class="col-6">
        <span class="font-weight-bold">Registered Date:</span> <br>
        ${datePre[0]}
      </div>
    </div>

    </div>
    </div>
    `;
    // Adding the same profile data into clipboard
    const copyText = `
    Name: ${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}
    Age: ${data.results[0].dob.age}
    Gender: ${data.results[0].gender}
    Location: ${data.results[0].location.country}
    Email: ${data.results[0].email}
    Username: ${data.results[0].login.username}
    Password: ${data.results[0].login.password}
    `;

    // dynamic text Input area is created and removing when it is copied into clipboard
    function Clipboard_CopyTo(value) {
      var tempInput = document.createElement("input");
      tempInput.value = value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
    // when the copy button is triggred
    document.querySelector("#Copy").onclick = function () {
      Clipboard_CopyTo(`${copyText}`);
      alert(`💠 Check your clipboard:💠 ${copyText}`);
    };
  });
