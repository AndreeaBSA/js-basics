# Accessibility & UX Scenarios

1) Page titles/headings -> appropriate `<title>` and H1 per view.  
   PRECONDITIE: pagina tinta deschisa.  
   ACTIUNE: inspectez title si H1.  
   REZULTAT: corespund contextului.  
2) Landmarks -> header/nav/main/footer roles present.  
   PRECONDITIE: pagina incarcata.  
   ACTIUNE: verific landmark roles.  
   REZULTAT: toate prezente si unice.  
3) Keyboard -> tab order sensible; menu and modals trap focus correctly.  
   PRECONDITIE: focus pe pagina.  
   ACTIUNE: navighez cu Tab/Shift+Tab.  
   REZULTAT: ordine logica, trap unde e cazul.  
4) ARIA -> form controls have labels; buttons have accessible names.  
   PRECONDITIE: pagina incarcata.  
   ACTIUNE: citesc atribute aria/label.  
   REZULTAT: fiecare control are nume accesibil.  
5) Color contrast -> primary text/buttons meet WCAG AA.  
   PRECONDITIE: pagina incarcata.  
   ACTIUNE: verific contrastul elementelor cheie.  
   REZULTAT: valori peste pragul AA.  
6) Responsive -> layout holds on mobile viewport (e.g., 375px wide).  
   PRECONDITIE: setez viewport mic.  
   ACTIUNE: observ layout si functionalitatea.  
   REZULTAT: elementele raman vizibile si utilizabile.
