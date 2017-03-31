import Duck from './Duck'

/**
 * 野鸭
 *
 * @class MallardDuck
 * @extends {Duck}
 */
class MallardDuck extends Duck {
  /**
   * 飞的方式
   *
   *
   * @memberOf MallardDuck
   */
  fly () {
    console.log('Can fly long distances!')
  }

  /**
   *
   *叫的方式
   *
   * @memberOf MallardDuck
   */
  quack () {
    console.log('Quack! Quack!')
  }
}

export default MallardDuck
