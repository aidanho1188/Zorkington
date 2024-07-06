const {itemLookUp} = require('../helpers/itemsLookUp')
const {itemIsPresent} = require('../helpers/itemIsPresent')
const {NoItemSelected, ItemDoesntExist, ItemIsUnreadable, PlayerDoesntHaveItem} = require('../errors/itemErrors')
const {print} = require('../helpers/print')

function read(player, item) {
  try {
    console.log('item', item)
    validateRead(player, item)
    item = itemLookUp[item]
    return `${item.description}`
  } catch (error) {
    throw error
  }
}

function validateRead(player, item) {
  if (!item) {
    throw new NoItemSelected('Please provide an item to read.')
  }
  if (!itemDoesExist(item)) {
    throw new ItemDoesntExist('This item does not exist.')
  }
  if (!readable(item)) {
    throw new ItemIsUnreadable('There is no description for this item.')
  }
  if (!itemIsPresent(player, item)) {
    throw new PlayerDoesntHaveItem("You don't have this item.")
  }
}

function itemDoesExist(item) {
  return itemLookUp.hasOwnProperty(item)
}

function readable(item) {
  item = itemLookUp[item]
  return item.description !== null
}

exports.read = read