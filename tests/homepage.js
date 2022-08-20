import { Selector } from "testcafe";
import homepageElements from '../pages/homepageElements'

fixture `homepage`
    .page('https://127.0.0.1:8000/');

test('First test on Football site', async t => {
    const pageTitle = Selector('.container h1');
    await t
        .expect(pageTitle.innerText).eql('List of all Football Teams'); 
}); 