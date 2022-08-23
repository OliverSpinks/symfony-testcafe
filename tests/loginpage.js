import { Selector,t } from "testcafe";
import homepageElements from './homepageElements';

fixture `loginpage`
    .page('https://127.0.0.1:8000/login');

test('login with correct details', async t => {
    await t 
        .expect(homepageElements.username.value).eql('', 'input is empty')
        .typeText(homepageElements.username, "admin")
        .expect(homepageElements.username.value).eql('admin', 'input contains "admin"');
    await t     
        .expect(homepageElements.password.value).eql('', 'input is empty')
        .typeText(homepageElements.password, "000000")
        .expect(homepageElements.password.value).eql('000000', 'input contains "000000"');
    await t
        .click(homepageElements.formSubmit)
        .expect(homepageElements.homepageHeading.innerText).eql('List of all Football Teams');
}); 

test('logging in with wrong details doesnt work', async t => {
    await t 
        .expect(homepageElements.username.value).eql('', 'input is empty')
        .typeText(homepageElements.username, "admin")
        .expect(homepageElements.username.value).eql('admin', 'input contains "admin"');
    await t     
        .expect(homepageElements.password.value).eql('', 'input is empty')
        .typeText(homepageElements.password, "fail")
        .expect(homepageElements.password.value).eql('fail', 'input contains "fail"');
    await t
        .click(homepageElements.formSubmit)
        .expect(homepageElements.alert.innerText).eql('Invalid credentials.');
});
