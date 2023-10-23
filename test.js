import { Selector, ClientFunction } from 'testcafe'

fixture('Getting started')
    .page('http://127.0.0.1:5500/Form%20Validator/index.html')

// test('My first test', async t => {
//     await t
//         .typeText('#username', 'Khai Khai')
//         .selectText('#username')
//         .hover('#submit-btn')
//         .click('#submit-btn')
//         .expect(Selector('#email-err-msg').innerText).eql('Email is required')
//         .navigateTo('https://github.com/DevExpress/testcafe')
//         // .takeScreenshot()
// })

test('UI test', async t => {
    await t
        .click('#username')
        .expect(Selector('#username-underline').getStyleProperty('border-bottom-color')).eql('rgb(38, 145, 217)')
        .click('#email')
        .expect(Selector('#email-underline').getStyleProperty('border-bottom-color')).eql('rgb(38, 145, 217)')
        .click('#password')
        .expect(Selector('#password-underline').getStyleProperty('border-bottom-color')).eql('rgb(38, 145, 217)')
        .click('#confirm-password')
        .expect(Selector('#confirm-password-underline').getStyleProperty('border-bottom-color')).eql('rgb(38, 145, 217)')
        .hover('#submit-btn')
        .expect(Selector('#submit-btn').getStyleProperty('background-color')).eql('rgb(8, 96, 154)')
})

test('Test case 1', async t => {
    await t
        .click('#submit-btn')
        .expect(Selector('#username-err-msg').innerText).eql('Username is required')
        .expect(Selector('#email-err-msg').innerText).eql('Email is required')
        .expect(Selector('#password-err-msg').innerText).eql('Password is required')
        .expect(Selector('#confirm-password-err-msg').innerText).eql('Confirm-password is required')
        .expect(Selector('#username').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#email').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#confirm-password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})

test('Test case 2', async t => {
    await t
        .typeText('#username', 'Khai Khai')
        .click('#submit-btn')
        .expect(Selector('#username-err-msg').innerText).eql('')
        .expect(Selector('#email-err-msg').innerText).eql('Email is required')
        .expect(Selector('#password-err-msg').innerText).eql('Password is required')
        .expect(Selector('#confirm-password-err-msg').innerText).eql('Confirm-password is required')
        .expect(Selector('#email').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#confirm-password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})

test('Test case 3', async t => {
    await t
        .typeText('#username', 'Khai Khai')
        .typeText('#email', 'Quang Duong')
        .click('#submit-btn')
        .expect(Selector('#password-err-msg').innerText).eql('Password is required')
        .expect(Selector('#confirm-password-err-msg').innerText).eql('Confirm-password is required')
        .expect(Selector('#password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#confirm-password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})

test('Test case 4', async t => {
    await t
        .typeText('#username', 'Khai Khai')
        .typeText('#email', 'Quang Duong')
        .typeText('#password', '12345')
        .typeText('#confirm-password', '1234')
        .click('#submit-btn')
        .expect(Selector('#email-err-msg').innerText).eql('Invalid email')
        .expect(Selector('#password-err-msg').innerText).eql('Password must be greater than 6')
        .expect(Selector('#confirm-password-err-msg').innerText).eql('Passwords is not match')
        .expect(Selector('#email').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
        .expect(Selector('#confirm-password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})

test('Test case 5', async t => {
    await t
        .typeText('#username', 'Khai Khai')
        .typeText('#email', 'quangduong@gmail.com')
        .typeText('#password', '123456')
        .typeText('#confirm-password', '1234')
        .click('#submit-btn')
        .expect(Selector('#confirm-password-err-msg').innerText).eql('Passwords is not match')
        .expect(Selector('#confirm-password').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})

test('Test case 6', async t => {
    await t
        .typeText('#username', 'Khai Khai')
        .typeText('#email', 'quangduonggmail.com')
        .typeText('#password', '123456')
        .typeText('#confirm-password', '123456')
        .click('#submit-btn')
        .expect(Selector('#email-err-msg').innerText).eql('Invalid email')
        .expect(Selector('#email').getStyleProperty('border-bottom-color')).eql('rgb(231, 76, 60)')
})