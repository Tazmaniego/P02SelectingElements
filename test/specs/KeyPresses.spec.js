import KeyPressesPage from "../pageobjects/KeyPresses.page.js";

describe ('My KeyPresses application', () => {
    it('should display what is entered into the input', async () => {
        await KeyPressesPage.open();
        await browser.pause(3000)
        await KeyPressesPage.pressAkey('C');
        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining('You entered: C');
        await browser.pause(3000)
    });
});