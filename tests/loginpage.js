import { Selector,t } from "testcafe";
import homepageElements from './homepageElements';

fixture `loginpage`
    .page('https://127.0.0.1:8000/login');

test('First test on Football site', async t => {
    const pageTitle = Selector('.container h1');
    await t
        .click(homepageElements.loginButton)
        .click(homepageElements.username)
        .typeText(homepageElements.username,'admin')
        .click(homepageElements.password)
        .typeText(homepageElements.password,'000000')
        .click(homepageElements.signIn)
        .click(homepageElements.signOut)



}); 
