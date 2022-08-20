import { Selector, t } from "testcafe";

class homepageElements{
    
constructor() {
    this.footballTeamTable = Selector('.football-teams-table')
    this.firstElement = Selector('.football-teams-table')
    this.homepageHeading = Selector('h1').withText('List of all Football Teams')
    this.loginButton = Selector('a.nav-link.login')
    this.signIn = Selector('button').withText('Sign in')
    this.signOut = Selector('a').withText('Logout')
    this.username = Selector('input#inputUsername')
    this.password = Selector('input#inputPassword')
    this.logoutButton = Selector('a.nav-link.logout')
    this.createButton = Selector('a.btn-primary')
    this.formTitle = Selector('input#post_title')
    this.formAttachment = Selector('input#post_attachment')
    this.formCategory = Selector('select#post_category')
    this.formSubmit = Selector('button.btn-primary')
}
}

export default new homepageElements();