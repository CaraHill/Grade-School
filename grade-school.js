class School {
  constructor() {
    this._roster = {};
  }

  roster() {
    return this._roster;
  }

  add(name, grade) {
    if (this._roster[grade]) {
      this._roster[grade].push(name);
      return this._roster[grade].sort()
    } else {
      return this._roster[grade] = [name];
    }
  }

  grade(grade) {
    if(this._roster[grade]) {
      return this._roster[grade].sort();
    } else {
      return [];
    }
  }

}

export default School;
