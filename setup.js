const { chromium  } = require ('@playwright/test');
const data_login = require('./src/data/login');
const element_login = require('./src/elements/loginPage');

module.exports = async config  =>{
    const use = config.projects[0].use;
    const browser = await chromium.launch(
        {
            headless : use.headless
        }
    )
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto(data_login.url)
    await page.fill(element_login.txtEmail, data_login.email)
    await page.click(element_login.btnNext)
    await page.fill(element_login.txtPassword, data_login.password)
    await page.click(element_login.btnSignIn)
    await page.waitForLoadState("networkidle")
    await page.context().storageState({ path: use.storageState });
    await browser.close();
}