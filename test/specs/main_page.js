const { expect, browser, $ } = require("@wdio/globals");
import AddUser from "../pageObjects/add_user";
import DeleteUser from "../pageObjects/delete_user";
import Utils from "../utils/util";
import SearchUser from "../pageObjects/search_user";
describe("My Robohash Application", () => {
  it("Add User", async () => {
    await AddUser.navigateToMainPage();
    await Utils.clickButton(AddUser.addButton);
    await Utils.inputField(AddUser.inputName, "Winter");
    await Utils.inputField(AddUser.inputEmail, "winter@email.com");
    await Utils.inputField(AddUser.inputPhone, "1234567890");
    await Utils.inputField(AddUser.inputCompany, "Winter Company");
    await Utils.inputField(AddUser.inputAddress, "123 Winter Street");
    await Utils.inputField(AddUser.inputComment, "Winter is coming");
    await Utils.clickButton(AddUser.buttonAddUser);
    const validateAdded = await Utils.getObjectText(
      $("//html/body/div/div[2]/div[11]/div/button/div/div[text()='Winter']")
    );
    expect(validateAdded).toEqual("Winter");
  });
  it("Edit User", async () => {
    await Utils.clickButton(
      $("/html/body/div/div[2]/div[11]/div/div/button[1]")
    );
    await Utils.inputField($("//*[@name='input_user']"), "Summer");
    await Utils.inputField($("//*[@name='input_email']"), "summer@email.com");
    await Utils.inputField($("//*[@name='input_phone']"), "0987654321");
    await Utils.inputField($("//*[@name='input_company']"), "Summer Company");
    await Utils.inputField(
      $("//*[@name='input_address']"),
      "123 Summer Street"
    );
    await Utils.inputField($("//*[@name='input_comment']"), "Summer is here");
    await Utils.clickButton(AddUser.buttonAddUser);
    const validateEdited = await Utils.getObjectText(
      $("//html/body/div/div[2]/div[11]/div/button/div/div[text()='Summer']")
    );
    expect(validateEdited).toEqual("Summer");
  });
  it("Delete User", async () => {
    await Utils.clickButton(DeleteUser.deleteBtn);
    await Utils.clickButton(DeleteUser.deleteBtn2);
    await browser.pause(1000);

    // Count user cards after deletion
    const userCardsAfterDeletion = await $$(
      "//div[contains(@class, 'user-card')]"
    );

    console.log(
      "User  Cards After Deletion Count:",
      userCardsAfterDeletion.length
    );

    // Validate that the total number of user cards is equal to 10
    const totalCards = userCardsAfterDeletion.length;
    expect(totalCards).toEqual(10);
  });

  it("Search User", async () => {
    const inputSearch = await Utils.getInputSearch();
    const textInput = "er";
    inputSearch.setValue(textInput);
    await browser.pause(5000);
    const cardText = await Utils.getObjectText(
      $("/html/body/div/div[2]/div[1]/div/button/div/div")
    );
    expect(cardText).toHaveText(textInput);
  });
});
