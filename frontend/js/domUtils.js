const helicopterList = document.getElementById("helicopter-list");

export const displayHelicopters = (dataToDisplay) => {
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
      <button class="edit-button" data-id="${helicopter.id}">Edit</button>
    `;

    currentRow.appendChild(helicopterItem);
  });
};
