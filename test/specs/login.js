const LoginPage = require('../pageObjects/login.page')

describe('Login/Sign Up Form', () => {
    it('should signup with valid credentials', async () => {
        await LoginPage.signUp('qatest000@yopmail.com', 'Akuntest1!')
        await expect(LoginPage.popupSignupSuccessMessage).toBeExisting()
        await expect(LoginPage.popupSignupSuccessMessage).toHaveTextContaining('You successfully signed up!')
    })
})