function cell(array) {
  // let newArray = []
  // let column = array.length;
  // for(let i = 0; i < column; i ++ ){
  //   newArray.push([])
  //   for(let j = 0; j < array[i].length; j ++){
  //     let count =  checkNeighbours(i, j, array)
  //     newArray[i][j] =  checkStatus(array[i][j], count)
  //   }
  // }
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
  if (status == 0) return count >= 3 ? 1 : 0
  if (status == 1) return count <= 1 || count >= 4 ? 0 : 1
}
  // if(count >=3 ) {
  //   return 1
  // }
  // return 0

  //   if(count <= 1 || count >=4) {
  //     return 0
  //   }
  //   return 1
  // }
module.exports = cell