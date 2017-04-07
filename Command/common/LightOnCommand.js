
import Command from './Command'

/**
 *开灯命令类
 *
 * @class LightOnCommand
 * @extends {Command}
 */
class LightOnCommand extends Command {
  constructor (light) {
    super()
    this.light = light
  }

  execute () {
    this.light.on()
  }
}

export default LightOnCommand
