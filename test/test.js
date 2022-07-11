const { test, expect, chromium } = require('@playwright/test')
const data_login = require('../src/data/login');
const element_home = require('../src/elements/homePage');
const element_addPeople = require('../src/elements/addPeoplePage')
const commonActions = require('../src/actions/common')
test('Add 1 user', async ({ page }) => {
    try {
        await go_to_Add_People(page)

        // Initial data to insert
        const emailUser = await commonActions.createEmailFromCurrentDate()
        const objElementFirstUser = await returnElementByIndex(1)
        await inputPeople(page,objElementFirstUser,emailUser)
        await page.click(element_addPeople.btnAddPeople)

        expect(element_addPeople.txtCongratulations).toBeTruthy()
    }
    catch (error)
    {
        throw error
    }
});
test('Add 2 user', async ({ page }) => {
    try {
        await go_to_Add_People(page)
        
        // Initial data to insert
        var emailUser = await commonActions.createEmailFromCurrentDate()
        var objElementFirstUser = await returnElementByIndex(1)
        await inputPeople(page,objElementFirstUser,emailUser)

        emailUser = await commonActions.createEmailFromCurrentDate()
        objElementFirstUser = await returnElementByIndex(2)
        await inputPeople(page,objElementFirstUser,emailUser)
        await page.click(element_addPeople.btnAddPeople)

        expect(element_addPeople.txtCongratulations).toBeTruthy()
    }
    catch (error)
    {
        throw error
    }
});
async function go_to_Add_People(page){
    await page.goto(data_login.home)
    expect(page.locator(element_home.imgLogo)).toBeTruthy()
    await page.waitForLoadState("networkidle")
    await page.click( element_home.menuSetting)
    await page.click(element_home.menuAddPeople)
    expect(page.locator(element_addPeople.txtEmployee))
}
async function returnElementByIndex(_index) {
    var objElementAddPeople = {
        fistname : element_addPeople.txtFirstName_idx.replace("_index_",_index.toString()),
        lastname : element_addPeople.txtLastName_idx.replace("_index_",_index.toString()),
        email : element_addPeople.txtEmail_idx.replace("_index_",_index.toString()),
        startdate : element_addPeople.drpStartDate_idx.replace("_index_",_index.toString()),
        manager : element_addPeople.drpManager_idx.replace("_index_",_index.toString())
    }
    return objElementAddPeople
}

async function inputPeople(page,objElement,emailUser) {
    await page.fill(objElement.fistname,"test")
    await page.fill(objElement.lastname,"test")
    await page.fill(objElement.email,emailUser)
    await page.click(objElement.startdate)
    await page.click(element_addPeople.optDatePicker)
    await page.click(objElement.manager)
    await page.click(element_addPeople.firstOptManager)

}