# Sauce Demo - Playwright E2E Project

Ghid scurt ca sa poti rula si extinde testele end-to-end pentru https://www.saucedemo.com.

## Cerinte
- Node.js 18+ (Playwright 1.58).
- Browserele Playwright se instaleaza cu `npx playwright install` (ruleaza daca e prima oara).

## Instalare si rulare
1. `npm install`
2. (optional, prima rulare) `npx playwright install`
3. Toate testele: `npx playwright test`
   - UI runner: `npx playwright test --ui`
   - Raport HTML dupa un run: `npx playwright show-report`

## Structura repo
- `pages/` - Page Objects pentru fiecare zona (Login, Inventory, Cart, Checkout, Menu, Footer etc.).
- `tests/` - suite tematice (vezi `tests/README.md` pentru descriere pe foldere).
- `utils/test-data.ts` - date centralizate (conturi, rute).
- `fixtures/` - fixtures Playwright injectabile in teste.
- `playwright.config.ts` - configurare globala (baseURL, browsere, retry/trace).

## Cum sa incepi rapid
1) Completeaza locatorii si actiunile din Page Objects (`pages/*.ts`).
2) Scrie scenarii in `tests/<aria>/` folosind fixtures + Page Objects; incepe cu login.
3) Ruleaza `npx playwright test login` pana e stabil, apoi extinde pe inventory/cart/checkout.
4) Foloseste `trace: 'on-first-retry'` deja setat; deschide un trace cu `npx playwright show-trace trace.zip`.

## Scopul testelor (rezumat)
- Login: fluxuri de succes/eroare pentru toti userii (standard, locked_out, problem etc.).
- Inventory: listare produse, sortari, add/remove, badge cart, navigare in detalii.
- Product details: consistenta datelor si starea butoanelor dupa revenire.
- Cart & Checkout (step one/two/complete): validari formular, subtotal/tax, finalizare si reset stare.
- Menu & Footer: burger menu, logout, linkuri externe in tab nou, accesibilitate minima.

## Conventii rapide
- Foloseste `test.describe` per feature si `test.step` pentru pasi cheie.
- Nu lasa `test.only` in repo (configul opreste CI).
- Denumeste clar testele: `should <comportament>` si acopera un singur comportament per test.

## Resurse utile
- Documentatie Playwright: https://playwright.dev/docs/intro
- Exemplu de organizare suite: `tests/README.md`
