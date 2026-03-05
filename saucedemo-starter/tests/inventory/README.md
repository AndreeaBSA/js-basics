# Inventory Scenarios

1) Initial load -> 6 products visible with names/prices matching fixture data.  
   PRECONDITIE: user logat pe inventory.  
   ACTIUNE: astept randarea listei.  
   REZULTAT: 6 carduri cu date corecte.  
2) Sorting -> validates A→Z, Z→A, price low→high, price high→low orders.  
   PRECONDITIE: pe inventory cu lista incarcata.  
   ACTIUNE: aplic fiecare sortare.  
   REZULTAT: ordinea respecta criteriul ales.  
3) Product links -> each card navigates to detail page with matching title/price/desc.  
   PRECONDITIE: pe inventory.  
   ACTIUNE: dau click pe titlu/poza produs.  
   REZULTAT: pagina detalii corespunde cardului.  
4) Add/Remove -> toggles button label and updates cart badge count.  
   PRECONDITIE: pe inventory, badge initial cunoscut.  
   ACTIUNE: Add to cart / Remove pe un item.  
   REZULTAT: butonul si badge-ul se actualizeaza corect.  
5) Persistent state -> added items remain after page refresh.  
   PRECONDITIE: produs adaugat.  
   ACTIUNE: refresh pagina.  
   REZULTAT: buton in stare Remove, badge pastreaza valoarea.  
6) Pagination/scroll -> images lazy-load correctly and have alt text.  
   PRECONDITIE: pe inventory, scroll jos.  
   ACTIUNE: derulez pana la ultimele carduri.  
   REZULTAT: imaginile se incarca si au `alt` corect.
