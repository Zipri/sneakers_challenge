import state from "./state.js";
import counter from "./components/counter.js";
import initializeMobileInterface from "./components/initializeMobileInterface.js";
import slider from "./components/slider.js";

initializeMobileInterface();
counter(state);
slider(state);
