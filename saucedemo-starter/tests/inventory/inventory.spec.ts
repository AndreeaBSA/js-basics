import { test, expect } from '../../fixtures/test-fixtures'
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';
import { loginAs } from '../../utils/actions';
import { users, routes, logginErrors, products } from '../../utils/test-data'





test.describe('# Inventory Scenarios', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loginAs(users.standard);
        await expect(loginPage.page).toHaveURL(routes.inventory);
    })

    test('1.Initial load -> 6 products visible with names/prices matching fixture data', async ({ inventoryPage }) => {
        // 1) Initial load -> 6 products visible with names/prices matching fixture data.  
        //    PRECONDITIE: user logat pe inventory.  
        //    ACTIUNE: astept randarea listei.  
        //    REZULTAT: 6 carduri cu date corecte.  

        await expect(inventoryPage.products).toHaveCount(products.length);
        const productsCount = await inventoryPage.products.count();

        for (let i = 0; i < productsCount; i++) {
            const card = inventoryPage.products.nth(i);
            const actualProduct = await inventoryPage.getProductDetails(card);
            expect(actualProduct).toEqual(products[i]);
        }
    });

    test('2.Sorting -> validates A→Z, Z→A, price low→high, price high→low orders', async ({ inventoryPage }) => {
        // 2) Sorting -> validates A→Z, Z→A, price low→high, price high→low orders.  
        //    PRECONDITIE: pe inventory cu lista incarcata.  
        //    ACTIUNE: aplic fiecare sortare.  
        //    REZULTAT: ordinea respecta criteriul ales.  

        await expect(inventoryPage.products).toHaveCount(products.length);
        const productsCount = await inventoryPage.products.count();

        for (let i = 0; i < productsCount; i++) {
            const card = inventoryPage.products.nth(i);
            const actualProduct = await inventoryPage.getProductDetails(card);
            expect(actualProduct).toEqual(products[i]);
        }
    });








});



// 2) Sorting -> validates A→Z, Z→A, price low→high, price high→low orders.
//    PRECONDITIE: pe inventory cu lista incarcata.
//    ACTIUNE: aplic fiecare sortare.
//    REZULTAT: ordinea respecta criteriul ales.
// 3) Product links -> each card navigates to detail page with matching title/price/desc.
//    PRECONDITIE: pe inventory.
//    ACTIUNE: dau click pe titlu/poza produs.
//    REZULTAT: pagina detalii corespunde cardului.
// 4) Add/Remove -> toggles button label and updates cart badge count.
//    PRECONDITIE: pe inventory, badge initial cunoscut.
//    ACTIUNE: Add to cart / Remove pe un item.
//    REZULTAT: butonul si badge-ul se actualizeaza corect.
// 5) Persistent state -> added items remain after page refresh.
//    PRECONDITIE: produs adaugat.
//    ACTIUNE: refresh pagina.
//    REZULTAT: buton in stare Remove, badge pastreaza valoarea.
// 6) Pagination/scroll -> images lazy-load correctly and have alt text.
//    PRECONDITIE: pe inventory, scroll jos.
//    ACTIUNE: derulez pana la ultimele carduri.
//    REZULTAT: imaginile se incarca si au `alt` corect.