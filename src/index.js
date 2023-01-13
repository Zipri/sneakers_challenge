import counter from "./components/counter.js";
import state from "./state.js";
import initializeMobileInterface from "./components/initializeMobileInterface.js";

initializeMobileInterface();
counter(state);