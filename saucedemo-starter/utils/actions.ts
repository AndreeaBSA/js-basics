import { User } from "../models/User";
import { LoginPage } from "../pages/LoginPage";
import { users,routes } from "./test-data";

import  {expect} from '../fixtures/test-fixtures';
export async function loginAs(loginPage:LoginPage,user:User=users.standard,expectInventory=true) {
    await loginPage.goto();
    await loginPage.login(user.username,user.password);
    if(expectInventory){
         await expect(loginPage.page).toHaveURL(routes.inventory);
    }
}