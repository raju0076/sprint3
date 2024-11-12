let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  
  function displayUsers() {
    const cont = document.querySelector(".users-cont");
    cont.innerHTML = "";
    users.forEach((user) => {
      let name = user.name;
      let email = user.email;
      cont.innerHTML += `
      <div class = "user">
        <h3>${name}</h3>
        <p>${email}</p>
        <button onclick = "addToCart(${user.id})">Add To Cart</button>
      </div>`;
    });
  }
  
  function addToCart(userId) {
    const user = users.find((u) => u.id === userId);
    let store = JSON.parse(localStorage.getItem("storeIds"));
    if (store != null) {
      store.push(user);
    } else {
      store = [user];
    }
    localStorage.setItem("storeIds", JSON.stringify(store));
    alert("Item added to cart");
  }
  displayUsers();