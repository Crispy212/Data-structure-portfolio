export default class Grid {
  constructor(rows, cols) {
    if (rows <= 0 || cols <= 0)
      throw new Error("Rows and columns must be positive integers.");
    this._rows = rows;
    this._cols = cols;
    this._data = new Array(rows * cols).fill(undefined);
  }

  rows() { return this._rows; }
  cols() { return this._cols; }
  size() { return this._data.length; }

  index(row, col) {
    return row * this._cols + col;
  }

  inBounds(row, col) {
    return row >= 0 && row < this._rows && col >= 0 && col < this._cols;
  }

  cell(row, col) {
    return this.inBounds(row, col)
      ? { row, col, value: this.get({ row, col }) }
      : undefined;
  }

  set({ row, col }, value) {
    if (!this.inBounds(row, col)) throw new Error("Out of bounds");
    this._data[this.index(row, col)] = value;
  }

  get({ row, col }) {
    if (!this.inBounds(row, col)) return undefined;
    return this._data[this.index(row, col)];
  }

  fill(value) {
    this._data.fill(value);
  }

  indexFor({ row, col }) {
    return this.inBounds(row, col) ? this.index(row, col) : undefined;
  }

  rowColFor(index) {
    if (index < 0 || index >= this._data.length) return undefined;
    return {
      row: Math.floor(index / this._cols),
      col: index % this._cols
    };
  }

  north({ row, col }) { return this.cell(row - 1, col); }
  south({ row, col }) { return this.cell(row + 1, col); }
  west({ row, col }) { return this.cell(row, col - 1); }
  east({ row, col }) { return this.cell(row, col + 1); }
  northWest({ row, col }) { return this.cell(row - 1, col - 1); }
  northEast({ row, col }) { return this.cell(row - 1, col + 1); }
  southWest({ row, col }) { return this.cell(row + 1, col - 1); }
  southEast({ row, col }) { return this.cell(row + 1, col + 1); }

  nextInRow(pos) { return this.east(pos); }
  nextInCol(pos) { return this.south(pos); }

  neighbours({ row, col }) {
    const dirs = [
      [-1,  0], // north
      [ 1,  0], // south
      [ 0, -1], // west
      [ 0,  1], // east
      [-1, -1], // north-west
      [-1,  1], // north-east
      [ 1, -1], // south-west
      [ 1,  1]  // south-east
    ];
    return dirs
      .map(([dr, dc]) => ({ row: row + dr, col: col + dc }))
      .filter(({ row, col }) => this.inBounds(row, col));
  }

  neighbourValues({ row, col }) {
    return this.neighbours({ row, col }).map(p => this.get(p));
  }
}