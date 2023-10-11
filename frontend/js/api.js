import { displayHelicopters } from "./domUtils.js";

export let data = [];

export async function fetchHelicopters() {
  try {
    const response = await fetch("http://localhost:8005/aircraft/helicopters/");
    data = await response.json();
    displayHelicopters(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
