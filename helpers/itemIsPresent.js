const {itemNameLookUp, locationLookUp} = require("./lookUps");
const {itemLookUp} = require("./itemsLookUp");
const {getObjectName} = require("./getFunctions");

function itemIsPresent(player, item) {
  let itemObjectName = getObjectName(item, itemNameLookUp);
  let locationItems = locationLookUp[player.location].inventory;
  return itemLookUp.hasOwnProperty(itemObjectName) && checkAvailableItem(itemObjectName, locationItems);
}

function checkAvailableItem(itemObjectName, availableItems) {
  for (var i = 0; i < availableItems.length; i++) {
    if (getObjectName(availableItems[i], itemNameLookUp) == itemObjectName) {
      return true;
    }
  }
  return false;
}
exports.itemIsPresent = itemIsPresent;
