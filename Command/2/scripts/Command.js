import Command from '../../common/Command'

/**
 * 支持撤消的命令类
 *
 * @class CommandWithUndo
 * @extends {Command}
 */
class CommandWithUndo extends Command {
  undo () {
    throw new Error('This method must be overwritten!')
  }
}

export default CommandWithUndo
