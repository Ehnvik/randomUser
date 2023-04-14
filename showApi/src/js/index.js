import * as apiData from "../services/userService.js";

// Container
const container = document.getElementById("container");
const sortButton = document.getElementById("sortByAge");

let page = 1;
let resultsPerPage = 10;
let clickCount = 0;

//Get data from getUser fetch function
const getData = async () => {
  const data = await apiData.getUsers(page, resultsPerPage);
  console.log(data.results);
  showUsers(data.results);
};

// Making a new api call in a ascending order by age
sortButton.addEventListener("click", async () => {
  container.innerHTML = "";
  const data = await apiData.getUsers(page, resultsPerPage);
  const sortedData = data.results.sort((a, b) => a.dob.age - b.dob.age);
  console.log(sortedData);
  showUsers(sortedData);
});

//Create html to to show users
const showUsers = (results) => {
  // Loop through the list of users
  results.forEach((user) => {
    // Create elements for users
    const userContainer = document.createElement("div");
    const image = document.createElement("img");
    const userName = document.createElement("h3");
    const ageGenderContainer = document.createElement("div");
    const age = document.createElement("p");
    const gender = document.createElement("p");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    const street = document.createElement("p");
    const city = document.createElement("p");

    // Add classes to elements
    userContainer.classList.add("user-container");
    image.classList.add("image");
    ageGenderContainer.classList.add("age-gender-container");

    image.src = user.picture.large;
    image.setAttribute(
      "alt",
      `${user.name.title} ${user.name.first} ${user.name.last}`
    );

    const showModal = (imageUrl) => {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");

      modal.style.display = "block";
      modalImage.src = imageUrl;

      const closeBtn = document.getElementsByClassName("close")[0];
      closeBtn.onclick = () => {
        modal.style.display = "none";
      };
    };

    image.addEventListener("click", () => {
      showModal(user.picture.large);
    });

    // Display elements
    userName.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
    age.innerHTML = `<strong>Age:</strong> ${user.dob.age.toString()}`;
    gender.innerHTML = `<strong>Gender:</strong> ${user.gender}`;
    email.innerHTML = `<strong>Email:</strong> ${user.email}`;
    phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;
    street.innerHTML = `<strong>Location:</strong> ${
      user.location.street.name
    } ${user.location.street.number.toString()}`;
    city.innerHTML = `${user.location.postcode} ${user.location.city} ${user.location.country}`;

    container.appendChild(userContainer);
    userContainer.appendChild(image);
    userContainer.appendChild(userName);
    userContainer.appendChild(ageGenderContainer);
    ageGenderContainer.appendChild(age);
    ageGenderContainer.appendChild(gender);
    userContainer.appendChild(email);
    userContainer.appendChild(phone);
    userContainer.appendChild(street);
    userContainer.appendChild(city);
  });
};

const plusButton = document.getElementById("plus");

plusButton.addEventListener("click", () => {
  clickCount++;
  resultsPerPage += 10;
  getData();

  if (clickCount >= 4) {
    plusButton.style.display = "none";
  }
});

// Run app
getData();
