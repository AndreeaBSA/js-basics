# Checkout Complete Scenarios

1) Confirmation copy -> header/body text matches spec; image displayed.  
   PRECONDITIE: comanda finalizata, pe Complete.  
   ACTIUNE: verific textul si imaginea.  
   REZULTAT: corespund specificatiei.  
2) Back Home -> routes to inventory and cart badge returns to 0.  
   PRECONDITIE: pe Complete.  
   ACTIUNE: apas Back Home.  
   REZULTAT: navighez la inventory, badge 0.  
3) History navigation -> using Back does not resurrect completed cart.  
   PRECONDITIE: tocmai am terminat checkout.  
   ACTIUNE: apas Back in browser.  
   REZULTAT: nu pot reface Overview, cos ramas gol.  
4) Direct access -> hitting URL without prior checkout redirects to login/cart.  
   PRECONDITIE: user neincheiat checkout.  
   ACTIUNE: accesez direct URL Complete.  
   REZULTAT: redirect catre login sau cart, fara ecran de confirmare.
