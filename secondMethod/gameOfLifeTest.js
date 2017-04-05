const sinon = require('sinon');
const chai = require('chai');
const up = require('./gameOfLife').moveUp;
const down = require('./gameOfLife').moveDown;
const left = require('./gameOfLife').moveLeft;
const right = require('./gameOfLife').moveRight;
const leftUp = require('./gameOfLife').moveLeftUP;
const rightUp = require('./gameOfLife').moveRightUP;
const leftDown = require('./gameOfLife').moveLeftDown;
const rightDown = require('./gameOfLife').moveRightDown;
const next = require('./gameOfLife').nextTick;
const assert = chai.assert;
chai.should()
require('should');

describe('The Second Method Test', () => {
    it("should be [[0, 0], [0, 1]] when the world is [[0, 1], [1, 1]]", () => {
        up([[0, 1],[1, 1]]).should.deepEqual([[0, 0],[0, 1]])
    });
    it("should be [[0, 0], [0, 1], [0, 0], [0, 1]] when the world is [[0, 1], [0, 0], [0, 1], [1, 1]]", () => {
        up([[0, 1], [0, 0], [0, 1], [1, 1]]).should.deepEqual([[0, 0], [0, 1], [0, 0], [0, 1]])
    });
    it("should be [[1, 1], [0, 0]] when the world is [[0, 1], [1, 1]]", () => {
        down([[0, 1],[1, 1]]).should.deepEqual([[1, 1],[0, 0]])
    });
    it("should be [ [0, 0], [0, 1], [1, 1], [0, 0]] when the world is [[0, 1], [0, 0], [0, 1], [1, 1]]", () => {
        down([[0, 1], [0, 0], [0, 1], [1, 1]]).should.deepEqual([[0, 0], [0, 1], [1, 1], [0, 0]])
    });
    it("should be [[1, 1], [0, 0]] when the world is [[0, 1], [1, 1]]", () => {
        left([[0, 1],[1, 1]]).should.deepEqual([[0, 0],[0, 1]])
    });
    it("should be [[0, 0], [0, 1], [1, 1], [0, 0]] when the world is [[0, 1], [0, 0], [0, 1], [1, 1]]", () => {
        left([[0, 1], [1, 0], [0, 1], [1, 1]]).should.deepEqual([[0, 0], [0, 1], [0, 0], [0, 1]])
    });
    it("should be [[0, 0], [1, 0]] when the world is [[0, 1], [1, 1]]", () => {
        right([[0, 1],[1, 1]]).should.deepEqual([[1, 0],[1, 0]])
    });
    it("should be [[1, 0], [0, 0], [1, 0], [1, 0]] when the world is [[0, 1], [1, 0], [0, 1], [1, 1]]", () => {
        right([[0, 1], [1, 0], [0, 1], [1, 1]]).should.deepEqual([[1, 0], [0, 0], [1, 0], [1, 0]])
    });
    it("should be [[0, 0], [0, 1]] when the world is [[1, 0], [1, 1]]", () => {
        leftUp([[1, 0],[1, 1]]).should.deepEqual([[0, 0],[0, 1]])
    });
    it("should be [[0, 0], [0, 0], [0, 1], [0, 0]] when the world is [[0, 1], [1, 0], [0, 1], [1, 1]]", () => {
        leftUp([[0, 1], [1, 0], [0, 1], [1, 1]]).should.deepEqual([[0, 0], [0, 0], [0, 1], [0, 0]])
    });
    it("should be [[0, 0], [0, 0]] when the world is [[1, 0], [1, 1]]", () => {
        rightUp([[1, 0],[1, 1]]).should.deepEqual([[0, 0],[0, 0]])
    });
    it("should be [[0, 1], [0, 0]] when the world is [[1, 0], [1, 1]]", () => {
        leftDown([[1, 0],[1, 1]]).should.deepEqual([[0, 1],[0, 0]])
    });
    it("should be [[1, 0], [0, 0]] when the world is [[1, 0], [1, 1]]", () => {
        rightDown([[1, 0],[1, 1]]).should.deepEqual([[1, 0],[0, 0]])
    });

    //import the test cases of the firstMethod
    it('a live cell without any neighbour will dead after tick', function () {
        let cells = [[0,0,0], [0,1,0], [0,0,0]]
        console.log(next(cells))
        // assert.deepEqual(next(cells), [[0,0,0], [0,0,0], [0,0,0]])
        next(cells).should.deepEqual([[0,0,0], [0,0,0], [0,0,0]])
    })
    it('a live cell with two live neighbour on the right and left will live after tick', function () {
        let cells = [[0,0,0], [1,1,1]]
        console.log(next(cells))
        // assert.deepEqual(next(cells), [[0,1,0], [0,1,0]])
        next(cells).should.deepEqual([[0,1,0], [0,1,0]])
    })
    it('a live cell with two live neighbour on the top and bottom will live after tick', function () {
        let cells = [[0,1], [0,1],[0,1]]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[0,0], [1,1], [0,0]])
        // next(cells).should.deepEqual([[0,0], [1,1], [0,0]])
    })
    it('a live cell with two live neighbour on the top-right and bottom-left will live after tick', function () {
        let cells = [[0,0,1], [0,1,0],[1,0,0]]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[0,0,0], [0,1,0], [0,0,0]])
        // next(cells).should.deepEqual([[0,0,0], [0,1,0], [0,0,0]])
    })
    it('a live cell with two live neighbour on the top-left and bottom-right will live after tick', function () {
        let cells = [[1,0,0], [0,1,0],[0,0,1]]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[0,0,0], [0,1,0], [0,0,0]])
        // next(cells).should.deepEqual([[0,0,0], [0,1,0], [0,0,0]])
    })
    it('a live cell with three live neighbour will live after tick', function () {
        let cells = [[1,1,0], [0,1,0],[0,0,1]]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[1,1,0], [1,1,1], [0,0,0]])
        // next(cells).should.deepEqual([[1,1,0], [1,1,1], [0,0,0]])
    })
    it('a dead cell with two live neighbour will still dead after tick', function () {
        let cells = [[1,0], [0,1]                                                   ]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[0,0], [0,0]])
        // next(cells).should.deepEqual([[0,0], [0,0]])
    })
    it('a dead cell with three live neighbour will live after tick', function () {
        let cells = [[1,1], [1,0]                                                   ]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[1,1], [1,1]])
        // next(cells).should.deepEqual([[1,1], [1,1]])
    })
    it('a dead cell with four live neighbour will still dead after tick', function () {
        let cells = [[0,1,0], [1,0,1],[0,1,0]]
        console.log(next(cells))
        assert.deepEqual(next(cells), [[0,1,0], [1,0,1],[0,1,0]])
        // next(cells).should.deepEqual([[1,1], [1,1]])
    })
});
