import ChallengeDomPage from "../pageobjects/challenging_dom.page.js";

describe('My ChallengeDOM Page', () => {
    it('should detect elemental selenium link and text', async () => {
        await ChallengeDomPage.open();
        await expect(ChallengeDomPage.link1).toHaveText('Elemental Selenium');
        await expect(ChallengeDomPage.link1).toHaveAttribute('href', 'http://elementalselenium.com/');
    });
    it('should detect elemental selenium partial link and text', async () => {
        await ChallengeDomPage.open();
        await expect(ChallengeDomPage.link2).toHaveTextContaining('Element');
        await expect(ChallengeDomPage.link2).toHaveAttribute('href', 'http://elementalselenium.com/');
    });
    it('should define Apeirian0', async () => {
        await ChallengeDomPage.open();
        await expect(ChallengeDomPage.element).toBeExisting();
        await expect(ChallengeDomPage.element).toHaveText('Apeirian0')
    });
});