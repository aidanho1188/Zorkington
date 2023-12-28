const {locationLookUp} = require("../helpers/lookUps");
const {print} = require("../helpers/print");
const {ask} = require("../helpers/prompt");
const {getCurrentLocation} = require("../helpers/getFunctions");

async function look(player, ...args) {
  // if (args != null) {
  //   console.log(`I can't look at this "${args}"`);
  //   return;
  // }
  try {
    const room = getCurrentLocation(player);
    validateLook(room, ...args);
    print(`${room.description1}`);
    await ask("Press enter to continue...");
    print(`${room.description2}`);
    await ask("Press enter to continue...");
    return true;
  } catch (error) {
    throw error;
  }
}

function validateLook(room, args) {
  if (!roomExists(room)) {
    throw new RoomDoesntExistError("Room does not exist.");
  }
  if (args) {
    throw new Error('I can\'t look at this, please try with just "look".');
  }
}

function roomExists(room) {
  return room.description1 !== null && room.description2 !== null;
}
exports.look = look;
