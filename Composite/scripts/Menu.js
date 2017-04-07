import MenuComponent from './MenuComponent'

class Menu extends MenuComponent {
  constructor (name, description) {
    super()
    this.menuComponents = []
    this.name = name
    this.description = description
    this.createIterator = function () {
      throw new Error('This method must be overwritten!')
    }
  }

  /**
   * 添加
   *
   * @param {any} menuComponent
   *
   * @memberOf Menu
   */
  add (menuComponent) {
    this.menuComponents.push(menuComponent)
  }

  /**
   * 移除
   *
   * @param {any} menuComponent
   *
   * @memberOf Menu
   */
  remove (menuComponent) {
    this.menuComponents = this.menuComponents.filter(component => {
      return component !== menuComponent
    })
  }

  /**
   * 子菜单
   *
   * @param {any} index
   * @returns
   *
   * @memberOf Menu
   */
  getChild (index) {
    return this.menuComponents[index]
  }

  getName () {
    return this.name
  }

  getDescription () {
    return this.description
  }

  print () {
    console.log(this.getName() + ': ' + this.getDescription())
    console.log('--------------------------------------------')
    this.menuComponents.forEach(component => {
      component.print()
    })
  }
}

export default Menu
