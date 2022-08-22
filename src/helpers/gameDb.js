import GameData from "../../public/cms.json";
import { 
  Database, 
  startupGameFlowState, 
  advanceGameFlowState, 
  refreshBranches
} from "articy-js";

// Create a new database
const GameDB = new Database(GameData)

// ARTICY CONNECTION
// First, we need to create a configuration to tell the runtime what nodes to 'stop' at. In most simple games, this'll be just DialogueFragment nodes.
// const iterationConfig = { 
//     stopAtTypes: ["DialogueFragment"]
// };
// Use startupGameFlowState to create a new flow state beginning at the given node
// const [initialState, initialNode] = startupGameFlowState(GameDB, "0x0100000000000153", iterationConfig);
// Access information about the current state
// console.log("Current node", initialState, initialNode);
// Move down the first (0th) branch
// const [nextState] = advanceGameFlowState(GameDB, initialState, iterationConfig, 0);
// console.log(nextState)
// Refresh the branch set
// const stateWithRefreshedBranches = refreshBranches(GameDB, nextState, iterationConfig);
// console.log(stateWithRefreshedBranches)

// Export the database
export default GameDB;