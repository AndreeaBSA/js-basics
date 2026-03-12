import {test,expect} from '../../fixtures/test-fixtures'
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';
import { loginAs } from '../../utils/actions';
import {users,routes,logginErrors} from '../../utils/test-data'

test.describe('auth',()=>{


     test('Standard user login -> lands on inventory, session cookie set', async ({loginPage})=>{

    // am mers pe pagina de login
      await  loginPage.goto();

      // m-am logat
      await  loginPage.login(users.standard.username,users.standard.password);

      // verific  ruta sa fie invetory

      await expect(loginPage.page).toHaveURL(routes.inventory);

      //verific seiunea de cookie

      const cookies= await loginPage.page.context().cookies();

      const sessionCookie= cookies.find((cookie)=>cookie.name==='session-username');

      console.log(sessionCookie, users.standard.username);
      expect(sessionCookie?.value).toBe(users.standard.username);
     });


     test('2.Locked-out user -> error banner text matches fixture, URL stays', async ({loginPage})=> {


        await loginAs(loginPage,users.locked,false);

        // await loginPage.goto();

        // await loginPage.login(users.locked.username, users.locked.password);

        await expect(loginPage.errorBanner).toContainText(logginErrors.lockedOut);

        await expect(loginPage.page).toHaveURL(routes.base);

     });


     test('3.Problem/performance users -> login succeeds but UI glitches appear as expected', async ({inventoryPage,loginPage})=> {

        await loginAs(loginPage, users.problem);

        const imagesSrc= await inventoryPage.getSrcImages();

        const first=imagesSrc[0];

        for(let i=0;i<imagesSrc.length;i++){

             expect(first===imagesSrc[i]);
        }
        
     });

     test('4.Invalid password -> inline error, fields stay populated, button enabled', async ({loginPage, inventoryPage})=> {
      await loginAs(loginPage, users.invalid, false); 
      await expect(loginPage.errorBanner).toContainText('Epic sadface: Username and password do not match any user in this service')
      //await expect(loginPage.errorBanner).toContainText(logginErrors.invalidCredentials);

      await expect(loginPage.page).

      });


     test('5.Empty credentials -> both required field messages shown, no navigation.', async ({loginPage, inventoryPage})=> {
      await loginAs(loginPage, users.invalid, false); 



      });

     test('6.Session persistence -> refresh keeps logged-in state until logout', async ({loginPage, inventoryPage})=> {
      await loginAs(loginPage, users.invalid, false); 



      });

})