import { data } from "./api.js";
import { displayHelicopters } from "./domUtils.js";

const counterOutput = document.querySelector(".counterOutput p");
const searchInput = document.querySelector(".searchInput");

export function sortByTakeOffWeight() {
  const sortedData = [...data];
  sortedData.sort((a, b) => a.take_off_weight - b.take_off_weight);
  displayHelicopters(sortedData);
}

export function countTotalTakeOffWeight() {
  const totalWeight = data.reduce((acc, helicopter) => {
    return acc + parseFloat(helicopter.take_off_weight);
  }, 0);
  counterOutput.textContent = `Helicopters can take off: ${totalWeight} tonns`;
}

export function searchByModel() {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredData = data.filter((helicopter) =>
    helicopter.model.toLowerCase().includes(searchQuery)
  );
  displayHelicopters(filteredData);
}
