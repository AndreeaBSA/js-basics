# Checkout Step One Scenarios

1) Required fields -> first name, last name, postal code required; inline errors per field.  
   PRECONDITIE: user logat, pe Step One, form gol.  
   ACTIUNE: apas Continue.  
   REZULTAT: erori per camp, fara navigare.  
2) Postal code format -> accepts alphanumeric, rejects blank/too short.  
   PRECONDITIE: pe Step One.  
   ACTIUNE: introduc valori valide/greseite in Postal Code si Continue.  
   REZULTAT: accepta valori valide, respinge restul.  
3) Cancel -> returns to cart with items intact.  
   PRECONDITIE: pe Step One cu cos populat.  
   ACTIUNE: apas Cancel.  
   REZULTAT: revin la cart, produse prezente.  
4) Continue -> moves to Step Two and keeps entered customer data.  
   PRECONDITIE: form complet.  
   ACTIUNE: apas Continue.  
   REZULTAT: Step Two afiseaza datele completate.  
5) Browser back/refresh -> retains inputs when navigating back from Step Two.  
   PRECONDITIE: Step One completat, ajuns pe Step Two.  
   ACTIUNE: Back/refresh.  
   REZULTAT: campurile din Step One raman populate.
