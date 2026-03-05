# Login Scenarios

1) Field defaults -> username/password inputs empty, login button enabled.  
   PRECONDITIE: pagina login, form gol.  
   ACTIUNE: inspectez campuri si buton.  
   REZULTAT: campuri goale, buton activ.  
2) Happy path -> valid creds route to `/inventory.html` and show header menu.  
   PRECONDITIE: pe login.  
   ACTIUNE: `standard_user` / `secret_sauce` + submit.  
   REZULTAT: redirect `/inventory.html`, header vizibil.  
3) Invalid username -> error banner text matches spec, URL unchanged.  
   PRECONDITIE: pe login.  
   ACTIUNE: user invalid + parola corecta, submit.  
   REZULTAT: banner generic, URL ramane `/`.  
4) Invalid password -> same error banner, password field cleared only.  
   PRECONDITIE: pe login.  
   ACTIUNE: user valid + parola gresita, submit.  
   REZULTAT: banner generic, parola stearsa, URL `/`.  
5) Rate limiting -> rapid 5 failed attempts do not lock out standard user.  
   PRECONDITIE: pe login.  
   ACTIUNE: 5 submit-uri cu parola gresita.  
   REZULTAT: nu devine locked_out; mesaj generic la fiecare.  
6) Accessibility -> labels associated to inputs, submit works via Enter key.  
   PRECONDITIE: pe login.  
   ACTIUNE: verific asocierea label-urilor si trimit cu Enter.  
   REZULTAT: accesibilitate ok; formularul se trimite cu Enter.
