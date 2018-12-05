class School {
  constructor() {
    this._roster = {}
  }

  roster() {
    return this._roster;
  }

  add(name, grade) {
    if (this._roster[grade]) {
      return this._roster[grade].push(name);
    } else {
      return this._roster[grade] = [name];
    }
  }

}

export default School;
