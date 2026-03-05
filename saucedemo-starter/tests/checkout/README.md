# Checkout Scenarios

1) Happy path -> add items, complete Step One/Two, reach confirmation, cart empties.  
   PRECONDITIE: user logat, cos cu produse.  
   ACTIUNE: parcurg Step One/Two si finalizez.  
   REZULTAT: pagina Complete, badge 0, cart gol.  
2) Missing customer info -> Step One validation blocks progress.  
   PRECONDITIE: pe Step One.  
   ACTIUNE: omit campuri si apas Continue.  
   REZULTAT: erori inline, nu avanseaza.  
3) Review accuracy -> Step Two shows correct items, totals, and tax.  
   PRECONDITIE: Step One complet.  
   ACTIUNE: verific tabela si totalurile.  
   REZULTAT: match cu cart; total = subtotal + tax.  
4) Cancel from Step Two -> returns to inventory/cart without losing items.  
   PRECONDITIE: pe Step Two.  
   ACTIUNE: apas Cancel.  
   REZULTAT: revin la cart/inventory cu cos intact.  
5) Back navigation -> using browser Back keeps entered data intact.  
   PRECONDITIE: Step One completat.  
   ACTIUNE: navighez inainte pe Step Two apoi Back.  
   REZULTAT: datele raman populate.  
6) Multi-user -> repeat flow with each special account to validate behavior.  
   PRECONDITIE: selectez userul testat.  
   ACTIUNE: rulez fluxul complet.  
   REZULTAT: comportament specific userului, dar fara blocaje neprevazute.
