# Menu & Navigation Scenarios

1) Burger menu toggles open/close; overlay dismisses with ESC and outside click.  
   PRECONDITIE: user logat, meniu inchis.  
   ACTIUNE: deschid/ inchid cu click si ESC/outside.  
   REZULTAT: meniu si overlay se comporta corect.  
2) Menu links -> All Items, About, Logout, Reset State route/act correctly.  
   PRECONDITIE: meniu deschis.  
   ACTIUNE: selectez fiecare optiune.  
   REZULTAT: navigare/actiune corespunzatoare.  
3) Logout -> clears session cookies and sends user to login.  
   PRECONDITIE: logat, meniu deschis.  
   ACTIUNE: aleg Logout.  
   REZULTAT: ajung pe login, sesiunea invalida.  
4) Reset App State -> empties cart and resets filters.  
   PRECONDITIE: cos cu produse/filtre aplicate.  
   ACTIUNE: aleg Reset State.  
   REZULTAT: cos gol, filtre resetate.  
5) Navigation while cart populated -> items remain unless Reset used.  
   PRECONDITIE: cos populat.  
   ACTIUNE: navighez intre pagini via meniu.  
   REZULTAT: continutul ramane, cu exceptia cazului Reset.
