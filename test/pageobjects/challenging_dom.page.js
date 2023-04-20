import Page from './page.js';

class ChallengeDomPage extends Page {

get link1() {
    return $('=Elemental Selenium')
}

get link2() {
    return $('*=Element')
}

get element() {
    return $('#content > div > div > div > div.large-10.columns > table > tbody > tr:nth-child(1) > td:nth-child(2)')
}

open() {
    return super.open('challenging_dom');
}
}

export default new ChallengeDomPage();