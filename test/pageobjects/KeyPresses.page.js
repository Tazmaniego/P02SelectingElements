import Page from './page.js'

class KeyPressesPage extends Page {

    get keyPressInput() {
        return $('#target');
    }
    
    get keyPressResult() {
        return $('#result')
    }

    async pressAkey (input) {
        await this.keyPressInput.setValue(input);
    }

    open() {
        return super.open('key_presses');
    }
}

export default new KeyPressesPage();