import MallardDuck from './MallardDuck'
import WildTurkey from './WildTurkey'
import TurkeyAdapter from './TurkeyAdapter'

let oMallardDuck = new MallardDuck() // 实例化野鸭
let oWildTurkey = new WildTurkey()  // 实例化野火鸡
let oTurkeyAdapter = new TurkeyAdapter(oWildTurkey)

oMallardDuck.fly()
oMallardDuck.quack()

oWildTurkey.fly()
oWildTurkey.gobble()

// 同时具体鸭的飞   野火鸡的叫声
oTurkeyAdapter.fly()
oTurkeyAdapter.quack()
