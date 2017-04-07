
/**
 *  灯
 *
 * @class Light
 */
class Light {
  constructor () {
    this._on = false
  }

  /**
   * 开
   *
   *
   * @memberOf Light
   */
  on () {
    this._on = true
    console.log('Light is on')
  }

  /**
   * 关
   *
   *
   * @memberOf Light
   */
  off () {
    this._on = false
    console.log('Light is off')
  }
}

export default Light
