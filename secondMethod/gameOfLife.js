function moveUp(array) {
    return array.map((list, index, arr) => {
        return index === 0 ? new Array(list.length).fill(0) : arr[index - 1]
    })
}

function moveDown(array) {
    return array.map((list, index, arr) => {
        return index === arr.length - 1 ? new Array(list.length).fill(0) : arr[index + 1]
    })
}

function moveLeft(array) {
    return array.map((list) => {
        return list.map((value, index, arr) => {
            return index === 0 ? 0 : arr[index - 1]
        })
    })
}

function moveRight(array) {
    return array.map((list) => {
        return list.map((value, index, arr) => {
            return index === arr.length - 1 ? 0 : arr[index + 1]
        })
    })
}

function moveLeftUP(array) {
    return moveUp(moveLeft(array))
}

function moveRightUP(array) {
    return moveUp(moveRight(array))
}

function moveLeftDown(array) {
    return moveDown(moveLeft(array))
}

function moveRightDown(array) {
    return moveDown(moveRight(array))
}

function neighbourArray(array) {
    return array.map((list, i) => {
        return list.map((value, j) => {
            return moveUp(array)[i][j] + moveDown(array)[i][j] + moveLeft(array)[i][j] + moveRight(array)[i][j] + moveLeftUP(array)[i][j] + moveRightUP(array)[i][j] + moveLeftDown(array)[i][j] + moveRightDown(array)[i][j];
        })
    })
}

function newCell(array, neighbourArray) {
    return neighbourArray.map((list, i) => {
        return list.map((value, j) => {
            if (array[i][j] == 0) return neighbourArray[i][j] == 3 ? 1 : 0
            if (array[i][j] == 1) return neighbourArray[i][j] <= 1 || neighbourArray[i][j] >= 4 ? 0 : 1
        })
    })
}

function nextTick(array) {
    return newCell(array, neighbourArray(array))
}

module.exports = {moveUp, moveDown, moveLeft, moveRight, moveLeftUP, moveRightUP, moveLeftDown, moveRightDown, nextTick}
