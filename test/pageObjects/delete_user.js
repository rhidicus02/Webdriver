class DeleteUser {
  get deleteBtn() {
    return $("/html/body/div/div[2]/div[11]/div/div/button[2]");
  }
  get deleteBtn2() {
    return $("//button[@name='Delete']");
  }
}
export default new DeleteUser();
