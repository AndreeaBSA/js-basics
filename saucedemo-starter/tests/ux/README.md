# UX Scenarios

1) Global header/footer present on all authenticated pages.  
   PRECONDITIE: user logat pe pagini interne.  
   ACTIUNE: verific prezenta header/footer.  
   REZULTAT: vizibile peste tot.  
2) Side menu opens/closes smoothly; overlay scroll lock works.  
   PRECONDITIE: user logat, meniu inchis.  
   ACTIUNE: deschid/inchid si verific scroll lock.  
   REZULTAT: animatie ok, scroll blocat cand e deschis.  
3) Responsive checks at 1280px/768px/375px for layout breakpoints.  
   PRECONDITIE: setez viewporturile.  
   ACTIUNE: incarc pagini cheie.  
   REZULTAT: layout stabil, fara suprapuneri.  
4) Error messages styling consistent (colors, icons, spacing).  
   PRECONDITIE: provoc erori (ex. login invalid).  
   ACTIUNE: inspectez mesajele.  
   REZULTAT: stil consistent cu designul.  
5) Loading states/spinners appear when expected during slow actions.  
   PRECONDITIE: scenariu cu latency (ex. performance user).  
   ACTIUNE: declansez actiunea lenta.  
   REZULTAT: se afiseaza loading corect.  
6) Visual regression baselines captured for key pages.  
   PRECONDITIE: pagini randate stabil.  
   ACTIUNE: captez snapshot/baseline.  
   REZULTAT: baseline stocata, comparatii posibile.
