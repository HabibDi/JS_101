var valeurs = [4, 22, 7, 35, 9, 13, 1, 86, 25, 49];

for (var i = 0; i <= 100; i++) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(10);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    valeurs.push(getRandomIntInclusive());
}

console.log(valeurs);// Je déclare un tableau de quinze valeurs (nombres)

var valeurs = [4, 22, 7, 35, 9, 13, 1, 86, 25, 49, 54, 8, 3, 5, 2];

console.log('Tableau initial: ' + valeurs)

// J'ajoute 100 valeurs aléatoires comprises entre 10 et 100 à mon tableau.

for (var i = 0; i < 100; i++) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(10);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    valeurs.push(getRandomIntInclusive());
}

console.log(valeurs);

// Je parcours mon tableau pour déterminer le plus grand nombre

var max = 0;

for (var i = 0; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}

console.log('La plus grande valeur du tableau est ' + max);


// Je parcours mon tableau pour déterminer le plus grand nombre

var min = 100;

for (var i = 0; i < valeurs.length; i++) {
    if (valeurs[i] < min) {
        min = valeurs[i];
    }
}

console.log('La plus petite valeur du tableau est ' + min);


// Je fais la somme des valeurs de mon tableau

var somme = 0;

for (i = 0; i < valeurs.length; i++) {
    somme = somme += valeurs[i];
}

console.log(somme);

// Je fais la moyenne des valeurs de mon tableau

var moyenne = somme / valeurs.length;

console.log(moyenne);

// Je tri les valeurs de mon tableau dans deux tableau différents

var tab1 = [];
var tab2 = [];

valeurs.forEach(function (element) {
    if (element <= 10) {
        tab1.push(element)
    } else if (element > 10) {
        tab2.push(element)
    };
})

console.log(tab1);
console.log(tab2);

// Je tri mes tableaux dans l'ordre croissant

for (let i = 0; i < tab1.length; i++) {
    for (let j = 0; j < tab1.length; j++) {
        if (tab1[i] < tab1[j]) {
            let temp = tab1[i];
            tab1[i] = tab1[j];
            tab1[j] = temp;
        }
    }
}

console.log(tab1);


for (let i = 0; i < tab2.length; i++) {
    for (let j = 0; j < tab2.length; j++) {
        if (tab2[i] < tab2[j]) {
            let temp = tab2[i];
            tab2[i] = tab2[j];
            tab2[j] = temp;
        }
    }
}

console.log(tab2);

// Fonction pour calculer un prix TTC à partir du prix HT

function mDemission(a) {
    var b = a * 1.2;
    console.log('Pour un prix HT de ' + a + '€, alors le prix TTC sera de: ' + b + '€');
}

mDemission(100);


// Fonction puissance

function puissance(a, b) {
    var c = 1;
    for (i = 0; i < b; i++) {
        c *= a;
    }
    console.log(c);
}


// Fonction calcul d'un année bissextile


function bissextile(a) {
    if ((a % 4 == 0) && (a % 100 != 0) || (a % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

bissextile(1999);
bissextile(2000);

// Fonction pour répertorier toutes les années bissextiles de l'an 1 à l'année 2010

var bissextYears = new Array();

// function tabBissextile() {
//     for (i = 1; i <= 2020; i++) {
//         if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
//             bissextYears.push(i);
//         }
//     }
//     console.table(bissextYears);
// }

// tabBissextile();

for (i = 1; i <= 2020; i++) {
    if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
        bissextYears.push(i);
    }
}
console.table(bissextYears);

function factoriel(a) {
    for (i = a - 1; i > 0; i--) {
        a *= i;
    }
    console.log(a)
};

factoriel(5);

// Fonction pour retourner le bénéfices après impots

// function giletJaune(mula) {

//     var benef = 0;
//     var caramel = 0;

//     if (mula < 38000) {
//         benef = Math.floor(mula / 0.85);
//     } else {
//         caramel = 38000;
//         benef = Math.floor.((caramel / 0.85) + (mula - caramel))
//     }

//     console.log("Le bénéfice après impots est de: " + benef)
// };


function copyText(param) {
    document.getElementById("monid").innerHTML = param;
}