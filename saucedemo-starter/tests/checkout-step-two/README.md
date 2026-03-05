# Checkout Step Two Scenarios

1) Overview accuracy -> items, qty, prices match cart selections.  
   PRECONDITIE: Step One complet; cos definit.  
   ACTIUNE: verific lista pe Overview.  
   REZULTAT: items/qty/preturi coincid cu cart.  
2) Totals math -> item total + tax equals displayed total; currency formatting correct.  
   PRECONDITIE: pe Overview.  
   ACTIUNE: calculez subtotal + tax.  
   REZULTAT: total afisat este corect, formatat corect.  
3) Finish -> navigates to checkout complete and clears cart storage.  
   PRECONDITIE: Overview afisat.  
   ACTIUNE: apas Finish.  
   REZULTAT: ajung pe Complete, cart gol.  
4) Cancel -> returns to cart/inventory without losing customer info.  
   PRECONDITIE: Overview afisat.  
   ACTIUNE: apas Cancel.  
   REZULTAT: revin la cart/inventory, datele client pastrate.  
5) Back to Step One -> retains customer fields and selections.  
   PRECONDITIE: Overview.  
   ACTIUNE: back la Step One.  
   REZULTAT: campurile raman populate, selectiile pastrate.
