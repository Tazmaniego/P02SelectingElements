import Page from './page.js';

class AddRemovePage extends Page {
    
    get AddElement () {
        return $('//*[@id="content"]/div/button');
    }

    get RemoveElement () {
        return $('//*[@id="elements"]/button');
    }

    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();