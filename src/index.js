import state from "./state.js";
import counter from "./components/counter.js";
import initializeMobileInterface from "./components/initializeMobileInterface.js";
import slider from "./components/slider.js";
import cart from "./components/cart.js";

initializeMobileInterface();
counter(state);
slider(state);
cart(state);
