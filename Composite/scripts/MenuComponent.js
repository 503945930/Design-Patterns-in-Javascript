class MenuComponent {
  constructor (name = '', description = '', isVegetarian = false, price = 0) {
    this.name = name
    this.description = description
    this._isVegetarian = isVegetarian
    this.price = price
  }

  getName () {
    return this.name
  }

  getDescription () {
    return this.description
  }

  getPrice () {
    return this.price
  }

  isVegetarian () {
    return this._isVegetarian
  }

  print () {
   // shouldBeOverwritten()
    throw new Error('This method must be overwritten!')
  }

  add () {
    // shouldBeOverwritten()
    throw new Error('This method must be overwritten!')
  }

  remove () {
    // shouldBeOverwritten()
    throw new Error('This method must be overwritten!')
  }

  getChild () {
    // shouldBeOverwritten()
    throw new Error('This method must be overwritten!')
  }
}

export default MenuComponent
