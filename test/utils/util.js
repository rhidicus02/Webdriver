class objUtil {
  /**
   *@function clickButton
   * @param {*} button
   * @description Clicks add button
   */
  async clickButton(button) {
    if (button) {
      await button.waitForExist({ timeOut: 5000 });
      await button.click();
    } else {
      throw new Error("Button is undefined");
    }
  }
  /**
   * @function inputField
   * @param {*} field
   * @param {*} value
   * @description Inputs value into field
   */
  async inputField(field, value) {
    await field.setValue(value);
  }
  /**
   * @function getObjectText
   * @param {*} object
   * @description Returns text of object
   * @returns {string} text
   */
  async getObjectText(object) {
    await object.waitForExist();
    return object.getText();
  }
  async getInputSearch() {
    return $("//*[@placeholder= 'Search users...']");
  }
}
export default new objUtil();
