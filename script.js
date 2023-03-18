const fetchDataButton = document.getElementById("fetchDataBtn");
const tableBody = document.querySelector('#myTable tbody');

fetchDataButton.addEventListener("click", () => {
  PromiseAPI1()
    .then((result) => {
      if (result) {
        return PromiseAPI2();
      }
    })
    .then((result) => {
      if (result) {
        return PromiseAPI3();
      }
    })
    .then((result) => {
      if (result) {
        console.log("All promises resolved successfully!");
      }
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});


function PromiseAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/posts")
          .then((response) => response.json())
          .then((data) => {
            console.log("Data from API 1:", data);
            data.posts.forEach(item => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell();
                const titleCell = row.insertCell();
                const bodyCell = row.insertCell();
              
                idCell.textContent = item.id;
                titleCell.textContent = item.title;
                bodyCell.textContent = item.body;
              });
            console.log(tableBody);
            resolve(true);
          })
          .catch((error) => {
            console.log("An error occurred:", error);
            resolve(false);
          });
      }, 1000);
    });
  }
  
  function PromiseAPI2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {
            console.log("Data from API 2:", data);
            data.products.forEach(item => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell();
                const titleCell = row.insertCell();
                const bodyCell = row.insertCell();
              
                idCell.textContent = item.id;
                titleCell.textContent = item.title;
                bodyCell.textContent = item.description;
              });
            resolve(true);
          })
          .catch((error) => {
            console.log("An error occurred:", error);
            resolve(false);
          });
      }, 2000);
    });
  }
  
  function PromiseAPI3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/todos")
          .then((response) => response.json())
          .then((data) => {
            console.log("Data from API 3:", data);
            data.todos.forEach(item => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell();
                const titleCell = row.insertCell();
                const bodyCell = row.insertCell();
              
                idCell.textContent = item.id;
                titleCell.textContent = item.todo;
                bodyCell.textContent = 'User ID is ' + item.userId;
              });
            resolve(true);
          })
          .catch((error) => {
            console.log("An error occurred:", error);
            resolve(false);
          });
      }, 3000);
    });
  }
  
  