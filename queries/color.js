const db = require("../db/dbConfig.js");


const getAllColors = async () => {
    try {
     const allColors = await db.any("SELECT * FROM colors");//where we roght our queru
     //creating a variable that awaits db with anything inside all our colors// db.any() -- db is the connection to the database. `.any` is one of the methods that say what kind of data we're expecting to get back. "Any" specifically means we will be happy with ANY kind of data, as in NO data, SOME data, or just ONE piece of data
    return allColors;
    } catch (error) {
      return error;
    }
};

module.exports = {getAllColors};