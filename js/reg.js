

function d(id) {
    return document.getElementById(id);
}

LS.init('ulogovan');
LS.init('korisnici');

jelUlogovan();

function jelUlogovan() {
   let email = LS.get('ulogovan').email;
    let logged = typeof email === "string";

    d("imeUlogovanogKorisnika").innerHTML = email;
    if (logged) {
        prikaziDiv("ulogovan");
    } else {
        prikaziDiv("login-form");
    }
}

document.querySelector("#ulogovan a").addEventListener("click", function (event) {
    event.preventDefault();
    prikaziDiv("login-form");
    LS.remove("ulogovan")
});

d("link-register")
    .addEventListener("click", function (event) {
        event.preventDefault();
        prikaziDiv("register-form");
    });

d("link-reminder")
    .addEventListener("click", function (event) {
        event.preventDefault();
        prikaziDiv("reminder-form");
    });

d("reminder-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = d('email-reminder').value;
    let korisnik = LS.getElement('korisnici', email);
    if (korisnik) {

    } else {
        alert("Korisnik ")
    }

});
d("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = d('email-login').value;
    let pass = d('password-login').value;
    let korisnik = LS.getElement('korisnici', email);
    if (korisnik) {
        if (korisnik.password === pass) {
            prikaziDiv("ulogovan");
            LS.set("ulogovan", korisnik);
            jelUlogovan();
        } else {
            alert("Pogrešna šifra!");
        }
    } else {
        // console.log('getELement',LS.getElement('korisnici',email),email);
        alert("Uneti korisnik ne postoji");
    }

});

d("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let korisnik = {
        email: d('email').value,
        password: d('password').value,
        question: d('questionform').value,
        answer: d('answer').value
    };
    if (d('password').value === d('confirm').value) {
        console.log('korisnik', korisnik);
        LS.setElement('korisnici', korisnik.email, korisnik);
        LS.set("ulogovan", korisnik);
        jelUlogovan();
    } else {
        alert("Šifra i potvrda moraju biti isti");
    }
});



function prikaziDiv(id) {
    let ids = [
        "login-form",
        "register-form",
        "reminder-form",
        "ulogovan",
    ];
    // prikazuje div sa ovim id-em ostale divove sklanja

    for (let i = 0; i < ids.length; i++) {
        if (id != ids[i]) {
            d(ids[i]).style.display = "none";
        }
    }

    d(id).style.display = "block";
}

