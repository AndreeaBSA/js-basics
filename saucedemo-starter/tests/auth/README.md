# Auth Scenarios

1) Standard user login -> lands on inventory, session cookie set.  
   PRECONDITIE: user pe pagina de login.  
   ACTIUNE: completare `standard_user` / `secret_sauce` si submit.  
   REZULTAT: URL `/inventory.html`, sesiune activa.  
2) Locked-out user -> error banner text matches fixture, URL stays `/`.  
   PRECONDITIE: pe login.  
   ACTIUNE: `locked_out_user` / `secret_sauce` si submit.  
   REZULTAT: banner specific, URL ramane `/`.  
3) Problem/performance users -> login succeeds but UI glitches appear as expected.  
   PRECONDITIE: pe login.  
   ACTIUNE: login cu `problem_user` sau `performance_glitch_user`.  
   REZULTAT: autentificare reusita; se observa anomaliile documentate.  
4) Invalid password -> inline error, fields stay populated, button enabled.  
   PRECONDITIE: pe login.  
   ACTIUNE: user valid + parola invalida, submit.  
   REZULTAT: mesaj generic, campurile raman populate.  
5) Empty credentials -> both required field messages shown, no navigation.  
   PRECONDITIE: pe login cu campuri goale.  
   ACTIUNE: apas Login.  
   REZULTAT: erori per camp, fara navigare.  
6) Session persistence -> refresh keeps logged-in state until logout.  
   PRECONDITIE: user deja logat.  
   ACTIUNE: refresh pagina interna.  
   REZULTAT: ramane autentificat pana la logout.
