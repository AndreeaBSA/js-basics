    import { Page, Locator } from '@playwright/test';
    import { User } from '../models/User';
    import {routes} from '../utils/test-data'
    export class LoginPage{

        readonly page:Page;
        readonly usernameInput: Locator;
        readonly passwordInput: Locator;
        readonly loginButton: Locator;
        readonly errorBanner: Locator;
        

        constructor(page:Page){
            this.page=page;
            this.usernameInput=page.locator('[data-test="username"]');
            this.passwordInput=page.locator('[data-test="password"]');
            this.loginButton=page.locator('[data-test="login-button"]');
            this.errorBanner=page.locator('[data-test="error"]');
            
        }

        async goto(){
            await this.page.goto(routes.base);
        }

        async login(username:string,password:string){

            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();

        }


        async fillUsername(username:string){
            await this.usernameInput.fill(username)
        }


         async fillPassword(password:string){
            await this.passwordInput.fill(password);
        }


        async submit(){
             await this.loginButton.click();
        }

        async  loginAs(user:User) {
            await this.goto();
            await this.login(user.username,user.password);
        }
        
        
    }