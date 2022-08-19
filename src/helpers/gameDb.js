// Example GameDB.ts

// Import data from the exported json
import GameData from "../../public/cms.json";
import { Database } from "articy-js";

// Create a new database
const GameDB = new Database(GameData)

// Export the database
export default GameDB;