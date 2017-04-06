/**
 *命令类
 *
 * @class Command
 */
class Command {
  execute () {
    throw new Error('This method must be overwritten!')
  }
}

export default Command
