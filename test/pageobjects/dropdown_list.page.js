import Page from './page.js';

class DropdownListPage extends Page {
    
    get DropList () {
        return $('//*[@id="dropdown"]');
    }

    get SelectList1 () {
        return $('//*[@id="dropdown"]/option[2]');
    }

    get SelectList2 () {
        return $('//*[@id="dropdown"]/option[3]');
    }

    open() {
        return super.open('dropdown');
    }
}

export default new DropdownListPage();