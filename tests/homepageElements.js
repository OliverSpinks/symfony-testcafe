import { Selector, t } from "testcafe";

class homepageElements{
    
constructor() {
    this.firstElement = Selector('.football-teams-table ')
    this.heading = Selector('h1').withText('List of all Football Teams')
    this.loginButton = Selector('a.nav-link.login')
    this.signIn = Selector('button').withText('Sign in')
    this.signOut = Selector('a').withText('Logout')
    this.username = Selector('input#inputUsername')
    this.password = Selector('input#inputPassword')
    this.logoutButton = Selector('a.nav-link.logout');

}
}
export default new homepageElements();