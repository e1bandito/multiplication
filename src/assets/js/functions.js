function shuffle (arr) {
  arr.sort(() => Math.random() - 0.5)
}

function getRes (a, b) {
  return a * b
}

function getRndNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { shuffle, getRes, getRndNum }
