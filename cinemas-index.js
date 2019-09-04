import {
  initLoading,
  hideCity,
  showCity,
  generateFilterCity,
  cinemaListener
} from "./components/cinemas.js";
// import { setItem, getItem } from "./components/storage.js";
import { setLocation, getLocation } from "./components/user.js";

initLoading();
cinemaListener();
getLocation();
