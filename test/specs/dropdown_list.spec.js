import DropdownListPage from "../pageobjects/dropdown_list.page.js";

describe('My DropdownList Page', () => {
    it('should dropdown list and select both options', async () => {
        await DropdownListPage.open();
        await browser.pause(3000);
        await (DropdownListPage).DropList.click();
        await browser.pause(1500);
        await (DropdownListPage).SelectList1.click();
        await browser.pause(1500);
        await (DropdownListPage).DropList.click();
        await browser.pause(1500);
        await (DropdownListPage).DropList.click();
        await browser.pause(1500);
        await (DropdownListPage).SelectList2.click();
        await browser.pause(1500);
        await (DropdownListPage).DropList.click();
        await browser.pause(3000);
        
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    });
});