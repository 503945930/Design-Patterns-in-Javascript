
/**
 * 远程控制
 *
 * @class SimpleRemoteControl
 */
class SimpleRemoteControl {
  constructor () {
    this.command = null
  }

  /**
   * 设置命令方法
   *
   * @param {any} command
   *
   * @memberOf SimpleRemoteControl
   */
  setCommand (command) {
    this.command = command
  }

  /**
   * 按下执行命令
   *
   *
   * @memberOf SimpleRemoteControl
   */
  buttonWasPressed () {
    this.command.execute()
  }
}

export default SimpleRemoteControl
