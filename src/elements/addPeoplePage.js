const element_addPeople = {
    txtEmployee : "//div[contains(text(),'Add your employees')]",
    txtFirstName_idx : "input[field='firstName'][refkey='_index_']",
    txtLastName_idx : "input[field='lastName'][refkey='_index_']",
    txtEmail_idx : "input[field='email'][refkey='_index_']",
    drpStartDate_idx : "//input[@field='email'][@refkey='_index_']/../../..//input[@field='startDate']",
    optDatePicker : "//div[contains(@class,'DateItem__selected')]",
    drpManager_idx : "//input[@field='email'][@refkey='_index_']/../../..//span[contains(@class,'Selecteds')]",
    firstOptManager : "(//div[contains(@class,'select-email-item')])[1]",
    btnAddPeople : "//div[contains(@class,'send-invite')]//span[text()='Add People']",
    txtCongratulations : "//div[text()='Congratulations']"
}
module.exports = element_addPeople