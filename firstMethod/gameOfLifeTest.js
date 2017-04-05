const sinon = require('sinon')
const chai = require('chai')
const game = require('./gameOfLife')
const assert = chai.assert
// chai.should()
require('should')

context('生命游戏', function () {
  describe('game of life', function () {
    it('a live cell without any neighbour will dead after tick', function () {
      let cells = [[0,0,0], [0,1,0], [0,0,0]]
      console.log(game(cells))
      // assert.deepEqual(game(cells), [[0,0,0], [0,0,0], [0,0,0]])
      game(cells).should.deepEqual([[0,0,0], [0,0,0], [0,0,0]])
    })
    it('a live cell with two live neighbour on the right and left will live after tick', function () {
      let cells = [[0,0,0], [1,1,1]]
      console.log(game(cells))
      // assert.deepEqual(game(cells), [[0,1,0], [0,1,0]])
      game(cells).should.deepEqual([[0,1,0], [0,1,0]])
    })
    it('a live cell with two live neighbour on the top and bottom will live after tick', function () {
      let cells = [[0,1], [0,1],[0,1]]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[0,0], [1,1], [0,0]])
      // game(cells).should.deepEqual([[0,0], [1,1], [0,0]])
    })
    it('a live cell with two live neighbour on the top-right and bottom-left will live after tick', function () {
      let cells = [[0,0,1], [0,1,0],[1,0,0]]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[0,0,0], [0,1,0], [0,0,0]])
      // game(cells).should.deepEqual([[0,0,0], [0,1,0], [0,0,0]])
    })
    it('a live cell with two live neighbour on the top-left and bottom-right will live after tick', function () {
      let cells = [[1,0,0], [0,1,0],[0,0,1]]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[0,0,0], [0,1,0], [0,0,0]])
      // game(cells).should.deepEqual([[0,0,0], [0,1,0], [0,0,0]])
    })
    it('a live cell with three live neighbour will live after tick', function () {
      let cells = [[1,1,0], [0,1,0],[0,0,1]]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[1,1,0], [1,1,1], [0,0,0]])
      // game(cells).should.deepEqual([[1,1,0], [1,1,1], [0,0,0]])
    })
    it('a dead cell with two live neighbour will still dead after tick', function () {
      let cells = [[1,0], [0,1]                                                   ]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[0,0], [0,0]])
      // game(cells).should.deepEqual([[0,0], [0,0]])
    })
    it('a dead cell with three live neighbour will live after tick', function () {
      let cells = [[1,1], [1,0]                                                   ]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[1,1], [1,1]])
      // game(cells).should.deepEqual([[1,1], [1,1]])
    })
    it('a dead cell with four live neighbour will still dead after tick', function () {
      let cells = [[0,1,0], [1,0,1],[0,1,0]]
      console.log(game(cells))
      assert.deepEqual(game(cells), [[0,1,0], [1,0,1],[0,1,0]])
      // game(cells).should.deepEqual([[1,1], [1,1]])
    })
  })
})
