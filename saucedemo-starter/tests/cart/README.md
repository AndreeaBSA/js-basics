# Cart Scenarios

1) Add items from inventory -> badge increments and cart table shows correct rows.  
   PRECONDITIE: user logat pe inventory, badge initial cunoscut.  
   ACTIUNE: adaug produse.  
   REZULTAT: badge si tabel cart reflecta adaugarea.  
2) Remove items from inventory view -> cart reflects removal immediately.  
   PRECONDITIE: item deja in cos.  
   ACTIUNE: Remove din inventory.  
   REZULTAT: badge scade, randul dispare din cart.  
3) Remove items inside cart -> badge decrements and empty cart shows zero state.  
   PRECONDITIE: item in cart view.  
   ACTIUNE: Remove in cart.  
   REZULTAT: badge scade; zero state daca nu mai sunt produse.  
4) Price accuracy -> per-item and subtotal match inventory prices.  
   PRECONDITIE: produse adaugate.  
   ACTIUNE: compar preturi si subtotal.  
   REZULTAT: valori identice cu lista.  
5) Persistence -> cart contents survive navigation and refresh.  
   PRECONDITIE: cart populat.  
   ACTIUNE: navighez inapoi la inventory si dau refresh.  
   REZULTAT: continutul ramane.  
6) Continue Shopping -> returns to inventory preserving sort state.  
   PRECONDITIE: in cart cu produse.  
   ACTIUNE: apas Continue Shopping.  
   REZULTAT: revin la inventory cu sortul/starea pastrate.
