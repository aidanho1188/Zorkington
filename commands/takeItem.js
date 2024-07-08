const {itemNameLookUp} = require('../helpers/lookUps')
const {itemLookUp} = require('../helpers/itemsLookUp')
const {getObjectName} = require('../helpers/getFunctions')
const {print} = require('../helpers/print')
const {itemIsPresent} = require('../helpers/itemIsPresent')
const {removeItemFromRoom} = require('../helpers/roomItems')
const {NoItemSelected, ItemIsNotPresent, ItemDoesntExist, ItemIsNotTabkeable} = require('../errors/itemErrors')
const {checkItemExist} = require('../helpers/checkItemExist')
const {playerHasItem} = require('../helpers/playerHasItem')

function take(player, item) {
  const itemObjectName = getObjectName(item, itemNameLookUp)
  try {
    validateTake(player, itemObjectName)
    player.inventory.push(itemObjectName)
    removeItemFromRoom(player.location, itemObjectName)
    return `You took the ${itemObjectName}. 📚`
  } catch (error) {
    throw error
  }
}

function validateTake(player, item) {
  if (!item && typeof item === 'boolean') {
    throw new NoItemSelected('Please provide an item to take. 📚')
  }
  if (!checkItemExist(item)) {
    throw new ItemDoesntExist('This item does not exist. Please try again. 🔄')
  }
  if (!itemIsPresent(player, item)) {
    if (playerHasItem(player, item)) {
      throw new ItemIsNotTabkeable('You already have this item in your inventory. 🚫')
    }
    throw new ItemIsNotPresent("You can't take this item! It doesn't exist in this room. 🔄")
  }
  if (!isTakeable(item)) {
    throw new ItemIsNotTabkeable('You are not allow to take this item. 🚫')
  }
}

function isTakeable(item) {
  item = itemLookUp[item]
  return item.isTakeable
}

exports.take = take
