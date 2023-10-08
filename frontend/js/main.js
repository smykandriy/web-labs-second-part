document.addEventListener("DOMContentLoaded", function () {
  const helicopterList = document.getElementById("helicopter-list");
  const sortToggle = document.querySelector(".sort-toggle");
  const countButton = document.querySelector(".count");
  const counterOutput = document.querySelector(".counterOutput p");
  const searchInput = document.querySelector(".searchInput");
  const searchButton = document.querySelector(".searchButton");

  let data = [];

  async function fetchHelicopters() {
    try {
      const response = await fetch(
        "http://localhost:8005/aircraft/helicopters/"
      );
      data = await response.json();
      displayHelicopters(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function displayHelicopters(dataToDisplay) {
    helicopterList.innerHTML = "";
    let currentRow;

    dataToDisplay.forEach((helicopter, index) => {
      if (index % 3 === 0) {
        currentRow = document.createElement("div");
        currentRow.classList.add("containerRows");
        helicopterList.appendChild(currentRow);
      }

      const helicopterItem = document.createElement("div");
      helicopterItem.classList.add("helicopter-item");

      helicopterItem.innerHTML = `
        <img src="assets/images/helicopter.jpg" />
        <h3>${helicopter.model}</h4>
        <p>Weight: ${helicopter.weight}</p>
        <p>Fuel Capacity: ${helicopter.fuel_capacity}</p>
        <p>Max Altitude: ${helicopter.max_altitude}</p>
        <p>Take Off Weight: ${helicopter.take_off_weight}</p>
      `;

      currentRow.appendChild(helicopterItem);
    });
  }

  function sortByTakeOffWeight() {
    const sortedData = [...data];
    sortedData.sort((a, b) => a.take_off_weight - b.take_off_weight);
    displayHelicopters(sortedData);
  }

  function countTotalTakeOffWeight() {
    const totalWeight = data.reduce((acc, helicopter) => {
      return acc + parseFloat(helicopter.take_off_weight);
    }, 0);
    counterOutput.textContent = `Helicopters can take off: ${totalWeight} tonns`;
  }

  function searchByModel() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredData = data.filter((helicopter) =>
      helicopter.model.toLowerCase().includes(searchQuery)
    );
    displayHelicopters(filteredData);
  }

  fetchHelicopters();

  sortToggle.addEventListener("click", sortByTakeOffWeight);
  countButton.addEventListener("click", countTotalTakeOffWeight);
  searchButton.addEventListener("click", searchByModel);
});
