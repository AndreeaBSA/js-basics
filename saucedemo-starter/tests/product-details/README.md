# Product Details Scenarios

1) Deep link -> direct hit on `inventory-item.html?id=X` renders correct product.  
   PRECONDITIE: user logat; acces direct cu query id.  
   ACTIUNE: navighez la URL-ul produsului.  
   REZULTAT: pagina incarca produsul corect.  
2) Content parity -> title, price, description, and image match inventory card.  
   PRECONDITIE: pe pagina produsului.  
   ACTIUNE: compar cu valorile din fixture/lista.  
   REZULTAT: toate campurile coincid.  
3) Add/Remove -> actions sync with cart badge and inventory card state.  
   PRECONDITIE: pe pagina produsului, badge cunoscut.  
   ACTIUNE: Add/Remove.  
   REZULTAT: badge si buton sincronizate; stare reflectata si in lista.  
4) Back navigation -> Back to Products returns to prior sort state.  
   PRECONDITIE: venit din lista sortata.  
   ACTIUNE: apas Back to Products.  
   REZULTAT: revin la aceeasi pozitie si sortare.  
5) Breadcrumb/URL -> id parameter changes per product and is unique.  
   PRECONDITIE: acces pe mai multe produse.  
   ACTIUNE: observ URL-urile.  
   REZULTAT: fiecare are id unic; URL se schimba corespunzator.
