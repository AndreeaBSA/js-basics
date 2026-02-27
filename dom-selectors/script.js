// ============================================
//       DOM SELECTORS - TEORIE
// ============================================
//
// Metodele principale:
//   document.querySelector("selector")      -> returnează PRIMUL element
//   document.querySelectorAll("selector")   -> returnează TOATE elementele
//
// ============================================
//       TABEL SELECTORI CSS
// ============================================
//
//  #  | Tip Selector      | Sintaxă                    | Exemplu
// ----|-------------------|----------------------------|------------------------
//  1  | ID                | #numeId                    | #email
//  2  | Clasă             | .numeClasa                 | .login-button
//  3  | Atribut           | [atribut="valoare"]        | [data-testid="btn"]
//  4  | Atribut type      | input[type="email"]        | input[type="text"]
//  5  | Descendent        | părinte copil              | .form input
//  6  | Copil direct      | părinte > copil            | ul > li
//  7  | nth-child         | element:nth-child(n)       | li:nth-child(2)
//  8  | Combinat          | element.clasă[atribut]     | input.form-input[type="text"]
//
// ============================================
//       OPERAȚII FRECVENTE
// ============================================
//
//  Operație              | Sintaxă
// -----------------------|----------------------------------------
//  Citește text          | element.textContent
//  Schimbă text          | element.textContent = "Text nou"
//  Citește valoare       | element.value
//  Setează valoare       | element.value = "valoare"
//  Adaugă clasă          | element.classList.add("clasa")
//  Șterge clasă          | element.classList.remove("clasa")
//  Verifică clasă        | element.classList.contains("clasa")
//  Dezactivează          | element.disabled = true
//  Schimbă stil          | element.style.color = "red"
//  Citește atribut       | element.getAttribute("data-id")
//  Setează atribut       | element.setAttribute("data-id", "5")
//  Numără elemente       | elemente.length
//  Iterare               | elemente.forEach(function(el) { ... })
//
// ============================================


// ============================================
// FUNCȚIE HELPER PENTRU AFIȘARE
// ============================================
function log(message) {
    const output = document.querySelector('#output');
    output.textContent += message + '\n';
    console.log(message);
}

document.querySelector('#clear-btn').addEventListener('click', () => {
    document.querySelector('#output').textContent = '';
});

log('=== EXERCIȚII DOM SELECTORS ===\n');


// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 1: SELECTOR ID                    █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 1: #email
// ============================================
// TODO: Selectează input-ul cu id="email" și setează valoarea "test@mail.com"
// SINTAXĂ: document.querySelector("#id")
// EXEMPLU: element.value = "valoare";




// ============================================
// EX 2: #password
// ============================================
// TODO: Selectează input-ul password și setează valoarea "parola123"




// ============================================
// EX 3: #username
// ============================================
// TODO: Selectează input-ul username și schimbă placeholder-ul în "Introdu nume"
// EXEMPLU: element.placeholder = "text";




// ============================================
// EX 4: #country
// ============================================
// TODO: Selectează dropdown-ul țară și setează valoarea la "ro"




// ============================================
// EX 5: #login-form
// ============================================
// TODO: Selectează formularul și loghează id-ul lui
// EXEMPLU: log(element.id);




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 2: SELECTOR CLASĂ                 █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 6: .login-button
// ============================================
// TODO: Selectează butonul de login și schimbă textul în "Intră în cont"
// SINTAXĂ: document.querySelector(".clasa")
// EXEMPLU: element.textContent = "text";




// ============================================
// EX 7: .reset-button
// ============================================
// TODO: Selectează butonul reset și dezactivează-l
// EXEMPLU: element.disabled = true;




// ============================================
// EX 8: .form-input (querySelectorAll)
// ============================================
// TODO: Selectează TOATE input-urile cu clasa form-input și numără-le
// SINTAXĂ: document.querySelectorAll(".clasa")
// EXEMPLU: log("Total: " + elemente.length);




// ============================================
// EX 9: .product-card (querySelectorAll)
// ============================================
// TODO: Selectează TOATE cardurile de produs și numără-le




// ============================================
// EX 10: .notification.error (două clase)
// ============================================
// TODO: Selectează notificarea care are AMBELE clase: notification ȘI error
// SINTAXĂ: document.querySelector(".clasa1.clasa2")




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 3: SELECTOR ATRIBUT               █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 11: [data-testid="save-btn"]
// ============================================
// TODO: Selectează elementul cu data-testid="save-btn" și loghează textul
// SINTAXĂ: document.querySelector('[atribut="valoare"]')




// ============================================
// EX 12: [data-testid="reset-btn"]
// ============================================
// TODO: Selectează butonul reset prin data-testid și schimbă backgroundColor
// EXEMPLU: element.style.backgroundColor = "gray";




// ============================================
// EX 13: [data-cy="login"]
// ============================================
// TODO: Selectează elementul cu data-cy="login" și loghează tagName
// EXEMPLU: log(element.tagName);




// ============================================
// EX 14: [data-category="electronics"]
// ============================================
// TODO: Selectează TOATE produsele din categoria electronics și numără-le




// ============================================
// EX 15: [data-user-id="2"]
// ============================================
// TODO: Selectează rândul utilizatorului cu ID 2 și adaugă clasa "highlighted"
// EXEMPLU: element.classList.add("highlighted");




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 4: SELECTOR ATRIBUT TYPE          █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 16: input[type="email"]
// ============================================
// TODO: Selectează input-ul de tip email și adaugă clasa "highlighted"
// SINTAXĂ: document.querySelector('input[type="valoare"]')




// ============================================
// EX 17: input[type="password"]
// ============================================
// TODO: Selectează input-ul password prin type și schimbă placeholder-ul




// ============================================
// EX 18: button[type="submit"]
// ============================================
// TODO: Selectează butonul de tip submit și loghează textul lui




// ============================================
// EX 19: input[type="checkbox"] (querySelectorAll)
// ============================================
// TODO: Selectează TOATE checkbox-urile și numără-le




// ============================================
// EX 20: input[type="radio"] (querySelectorAll)
// ============================================
// TODO: Selectează TOATE radio buttons și numără-le




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 5: SELECTOR DESCENDENT            █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 21: .form-container input
// ============================================
// TODO: Selectează TOATE input-urile din formular și numără-le
// SINTAXĂ: document.querySelectorAll("părinte descendent")




// ============================================
// EX 22: .nav-menu li
// ============================================
// TODO: Selectează TOATE elementele li din meniu și numără-le




// ============================================
// EX 23: .data-table tbody tr
// ============================================
// TODO: Selectează TOATE rândurile din tbody și numără-le




// ============================================
// EX 24: .products-grid .btn-buy
// ============================================
// TODO: Selectează TOATE butoanele de cumpărare și numără-le




// ============================================
// EX 25: .blog-post .post-title
// ============================================
// TODO: Selectează TOATE titlurile de articole și afișează fiecare
// EXEMPLU: elemente.forEach(function(el) { log(el.textContent); });




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 6: SELECTOR COPIL DIRECT          █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 26: .nav-menu > li
// ============================================
// TODO: Selectează elementele li care sunt COPII DIRECȚI ai nav-menu
// SINTAXĂ: document.querySelectorAll("părinte > copil")




// ============================================
// EX 27: .products-grid > .product-card
// ============================================
// TODO: Selectează cardurile de produs copii direcți și numără-le




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 7: NTH-CHILD                      █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 28: li:nth-child(1)
// ============================================
// TODO: Selectează PRIMUL li din nav-menu și loghează textul
// SINTAXĂ: document.querySelector(".nav-menu li:nth-child(1)")




// ============================================
// EX 29: li:nth-child(2)
// ============================================
// TODO: Selectează AL DOILEA li și schimbă textul în "MODIFICAT"




// ============================================
// EX 30: li:nth-child(3)
// ============================================
// TODO: Selectează AL TREILEA li și adaugă clasa "selected"




// ============================================
// EX 31: li:last-child
// ============================================
// TODO: Selectează ULTIMUL li din nav-menu și loghează textul
// SINTAXĂ: document.querySelector(".nav-menu li:last-child")




// ============================================
// EX 32: tr:nth-child(2)
// ============================================
// TODO: Selectează al doilea rând din tbody și adaugă clasa "highlighted"
// SINTAXĂ: document.querySelector(".data-table tbody tr:nth-child(2)")




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 8: SELECTORI COMBINAȚI            █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 33: input.form-input[type="text"]
// ============================================
// TODO: Selectează input-ul cu clasa form-input ȘI type="text"
// SINTAXĂ: document.querySelector("tag.clasa[atribut]")




// ============================================
// EX 34: .form-container input[type="email"]
// ============================================
// TODO: Selectează input-ul email din formular




// ============================================
// EX 35: .checkbox-group input[type="checkbox"]
// ============================================
// TODO: Selectează checkbox-urile din grupul checkbox și numără-le




// ████████████████████████████████████████████████████████████
// █              SECȚIUNEA 9: OPERAȚII DOM                   █
// ████████████████████████████████████████████████████████████

// ============================================
// EX 36: getAttribute()
// ============================================
// TODO: Selectează primul .product-card și citește valoarea data-price
// EXEMPLU: const pret = element.getAttribute("data-price");
//          log("Preț: " + pret);




// ============================================
// EX 37: setAttribute()
// ============================================
// TODO: Selectează #username și adaugă atributul data-valid="true"
// EXEMPLU: element.setAttribute("data-valid", "true");




// ============================================
// EX 38: classList.add() și classList.remove()
// ============================================
// TODO: Selectează .notification.success și înlocuiește clasa "success" cu "warning"
// EXEMPLU: element.classList.remove("success");
//          element.classList.add("warning");




// ============================================
// EX 39: classList.contains()
// ============================================
// TODO: Selectează .blog-post.featured și verifică dacă are clasa "featured"
// EXEMPLU: const are = element.classList.contains("featured");
//          log("Are clasa featured: " + are);




// ============================================
// EX 40: Parcurgere cu forEach și index
// ============================================
// TODO: Selectează toate .nav-menu li și afișează indexul + textul fiecăruia
// EXEMPLU: elemente.forEach(function(el, index) {
//              log(index + ": " + el.textContent);
//          });




log('\n=== FELICITĂRI! ===');
log('Ai terminat exercițiile DOM Selectors!');
