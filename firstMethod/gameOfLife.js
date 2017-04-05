function newCells(array) {
  return array.map((list, index, arr) => {
    return list.map((value, idx) => {
      let count = checkNeighbours(index, idx, array)
      return checkStatus(array[index][idx], count)
    })
  })
}

function checkNeighbours(x, y, array) {
  let count = 0
  for (let i = x - 1; i <= x + 1; i ++ ){
    for ( let j = y - 1; j <= y + 1; j ++){
      if (i == x && j == y ) continue
      try{
         if(array[i][j] == 1) count += 1;
      }
      catch(err) {
      }
    }
  }
  return count
}

function checkStatus(status, count) {
  if (status == 0) return count == 3 ? 1 : 0
  if (status == 1) return count <= 1 || count >= 4 ? 0 : 1
}

function createCell() {
  let row = parseInt(Math.random() * 10)
  let column = parseInt(Math.random() * 10)
  let array = []
  for(let i = 0; i <= column; i ++){
    array.push([])
    for(let j = 0; j <= row; j ++){
      array[i][j] = parseInt(Math.random() * 2)
    }
  }
  return array
}

function nextTick() {
  let cells = createCell()
  setInterval(() => {
    cells = newCells(cells)
    console.log(cells)
  }, 2000)
}
// nextTick()
module.exports = newCells