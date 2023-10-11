import { fetchHelicopters, data } from "./api.js";
import {
  sortByTakeOffWeight,
  searchByModel,
  countTotalTakeOffWeight,
} from "./methods.js";
import { overlay, openModal, closeModal, closeEditModal } from "./modals.js";

document.addEventListener("DOMContentLoaded", function () {
  const sortToggle = document.querySelector(".sort-toggle");
  const countButton = document.querySelector(".count");
  const searchButton = document.querySelector(".searchButton");
  const openModalBtn = document.querySelector(".open");
  const closeModalBtn = document.querySelector(".close");
  const editHelicopterForm = document.getElementById("editHelicopterForm");
  const createHelicopterForm = document.getElementById("createHelicopterForm");

  createHelicopterForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(createHelicopterForm);

    console.log(Array.from(data));

    try {
      const response = await fetch(
        "http://localhost:8005/aircraft/helicopters/",
        {
          method: "POST",
          body: data,
        }
      );

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  });

  var selectedHelicopter = null;

  const editCloseButton = document.querySelector(".edit-close");
  editCloseButton.addEventListener("click", closeEditModal);

  function openEditModal(helicopter) {
    const editModal = document.querySelector(".edit-modal");
    document.getElementById("editModel").value = helicopter.model;
    document.getElementById("editWeight").value = helicopter.weight;
    document.getElementById("editFuelCapacity").value =
      helicopter.fuel_capacity;
    document.getElementById("editMaxAltitude").value = helicopter.max_altitude;
    document.getElementById("editTakeOffWeight").value =
      helicopter.take_off_weight;

    editModal.classList.remove("hidden");
    selectedHelicopter = helicopter;
  }

  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("edit-button")) {
      const helicopterId = event.target.getAttribute("data-id");
      const selectedHelicopter = data.find((h) => h.id == helicopterId);
      openEditModal(selectedHelicopter);
    }
  });

  editHelicopterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(editHelicopterForm);

    try {
      const response = await fetch(
        `http://localhost:8005/aircraft/helicopters/${selectedHelicopter.id}/`,
        {
          method: "PUT",
          body: data,
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      const editModal = document.querySelector(".edit-modal");
      editModal.classList.add("hidden");

      fetchHelicopters();
    } catch (error) {
      console.log(error);
    }
  });

  fetchHelicopters();

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  sortToggle.addEventListener("click", sortByTakeOffWeight);
  countButton.addEventListener("click", countTotalTakeOffWeight);
  searchButton.addEventListener("click", searchByModel);
});
