class AddUser {
  get addButton() {
    return $("//button[@name='add_btn']");
  }
  get inputName() {
    return $("//*[@name='input_user']");
  }
  get inputEmail() {
    return $("//*[@name='input_email']");
  }
  get inputPhone() {
    return $("//*[@name='input_phone']");
  }
  get inputCompany() {
    return $("//*[@name='input_company']");
  }
  get inputAddress() {
    return $("//*[@name='input_address']");
  }
  get inputComment() {
    return $("//*[@name='input_comment']");
  }
  get buttonAddUser() {
    return $("//*[@name='Add']");
  }
  get buttonCancel() {
    return $("//*[@name='Cancel']");
  }
  get deleteBtn() {
    return $("/html/body/div/div[2]/div[11]/div/div/button[2]");
  }
  get deleteBtn2() {
    return $("//button[@name='delete_btn]");
  }

  async navigateToMainPage() {
    await browser.url(`http://localhost:5173/`);
  }
}

export default new AddUser();
