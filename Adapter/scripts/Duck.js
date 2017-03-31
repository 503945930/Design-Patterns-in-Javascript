
/**
 * 鸭子
 *
 * @class Duck
 */
class Duck {
  // constructor () {}

  /**
   * 飞
   *
   *
   * @memberOf Duck
   */
  fly () {
    throw new Error('This method must be overwritten!')
  }

  /**
   *
   * 叫声
   *
   * @memberOf Duck
   */
  quack () {
    throw new Error('This method must be overwritten!')
  }
}

export default Duck
