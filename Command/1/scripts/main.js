import Light from '../../common/Light'
import LightOnCommand from '../../common/LightOnCommand'
import SimpleRemoteControl from '../../common/SimpleRemoteControl'

let oSimpleRemote = new SimpleRemoteControl()
let oLight = new Light()
let oLightCommand = new LightOnCommand(oLight)

// 灯   开灯的命令   执行命令的人  都是不同的对象
oSimpleRemote.setCommand(oLightCommand)
oSimpleRemote.buttonWasPressed()
