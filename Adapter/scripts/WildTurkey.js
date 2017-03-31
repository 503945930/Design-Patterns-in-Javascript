import Turkey from './Turkey'

/**
 * 野火鸡
 *
 * @class WildTurkey
 * @extends {Turkey}
 */
class WildTurkey extends Turkey {
  /**
   * 飞
   *
   *
   * @memberOf WildTurkey
   */
  fly () {
    console.log('Fly short distance!')
  }

  /**
   *咯咯叫声
   *
   *
   * @memberOf WildTurkey
   */
  gobble () {
    console.log('Gobble!, Gobble!')
  }
}

export default WildTurkey
