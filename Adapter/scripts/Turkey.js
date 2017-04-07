
/**
 * 火鸡
 *
 * @class Turkey
 */
class Turkey {
  /**
   * 飞
   *
   *
   * @memberOf Turkey
   */
  fly () {
    throw new Error('This method must be overwritten!')
  }

  /**
   * 咯咯叫声
   *
   *
   * @memberOf Turkey
   */
  gobble () {
    throw new Error('This method must be overwritten')
  }
}

export default Turkey
