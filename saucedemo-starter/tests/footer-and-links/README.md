# Footer & Links Scenarios

1) Footer visible on login, inventory, cart, and checkout pages.  
   PRECONDITIE: paginile relevante deschise.  
   ACTIUNE: verific prezenta footer-ului.  
   REZULTAT: footer vizibil peste tot.  
2) Social links (Twitter/Facebook/LinkedIn) point to correct URLs and open in new tab.  
   PRECONDITIE: pagina cu footer.  
   ACTIUNE: deschid linkurile in nou tab.  
   REZULTAT: URL-urile sunt cele oficiale si raspund 200.  
3) Footer text/copyright matches spec; no broken anchors.  
   PRECONDITIE: pagina cu footer.  
   ACTIUNE: citesc text/ancore.  
   REZULTAT: text conform, fara linkuri rupte.  
4) External links blocked from navigation when intercept disabled in tests.  
   PRECONDITIE: intercept on/off configurat.  
   ACTIUNE: click pe link extern.  
   REZULTAT: navigarea se blocheaza conform setarii.
