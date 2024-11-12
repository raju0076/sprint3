function displaySelectedUsers() {
    let store = JSON.parse(localStorage.getItem("storeIds"));
    if (store != null) {
      store.forEach((user) => {
        let name = user.name;
        let email = user.email;
        document.querySelector(".s-users").innerHTML += `
        <div class = "box">
          <h3>${name}</h3>
          <P>${email}</P>
          <button onclick = "deleteItem(${user.id})">Delete</button>
        </div>`;
      });
    }
  }
  function deleteItem(userId) {
    let store = JSON.parse(localStorage.getItem("storeIds"));
    let user = store.find((u) => u.id === userId);
    store.pop(user);
    localStorage.setItem("storeIds", JSON.stringify(store));
    window.location.reload();
  }
  displaySelectedUsers();
  