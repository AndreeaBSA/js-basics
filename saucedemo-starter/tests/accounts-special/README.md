# Special Accounts Scenarios

1) Problem user -> broken images/links appear on inventory; checkout still possible.  
   PRECONDITIE: logare cu `problem_user`.  
   ACTIUNE: accesez inventory, navighez flux normal.  
   REZULTAT: imagini/links rupte observate, dar checkout posibil.  
2) Performance glitch user -> slower load, but inventory renders within timeout threshold.  
   PRECONDITIE: logare cu `performance_glitch_user`.  
   ACTIUNE: masor timpul de load inventory.  
   REZULTAT: pagina se incarca sub pragul agreat; restul fluxului functional.  
3) Error user -> add-to-cart triggers error banner; checkout blocked.  
   PRECONDITIE: logare cu `error_user`.  
   ACTIUNE: adaug produs in cos.  
   REZULTAT: apare banner de eroare, checkout nu continua.  
4) Visual user -> UI layout deviations (item alignment/colors) detected via snapshots.  
   PRECONDITIE: logare cu `visual_user`.  
   ACTIUNE: capturez snapshots pe paginile cheie.  
   REZULTAT: diferente vizuale documentate fata de baseline.  
5) Locked user -> reused from auth suite to ensure consistent messaging.  
   PRECONDITIE: pe login.  
   ACTIUNE: `locked_out_user` + submit.  
   REZULTAT: mesaj blocare si raman pe login.
