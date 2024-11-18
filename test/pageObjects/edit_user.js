export default class EditUser {
  get editBtn() {
    return $("/html/body/div/div[2]/div[11]/div/div']");
  }
  get editName() {
    return $("//*[@name='input_user']");
  }
  get editEmail() {
    return $("//*[@name='input_email']");
  }
  get editPhone() {
    return $("//*[@name='input_phone']");
  }
  get editCompany() {
    return $("//*[@name='input_company']");
  }
  get editAddress() {
    return $("//*[@name='input_address']");
  }
  get editComment() {
    return $("//*[@name='input_comment']");
  }
  get editSave() {
    return $("//*[@name='Add']");
  }
  get buttonCancel() {
    return $("//*[@name='Cancel']");
  }
}
