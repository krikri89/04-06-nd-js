/*Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.*/
let suma = 0;
while (suma < 100) {
    suma += Math.floor((Math.random() *10));
    console.log(suma);
    }


console.log('----2---------------');
/*2.Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotųskaičių suma bus dali iš 7.*/
let suma2 = 0;
while (suma2 % 7 === 0) {
    suma2 += Math.floor((Math.random()*10));
    console.log(suma2);
}
console.log('---3--------------------');
/*
3.Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą –2, trečią –3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, 
per kelias dienas d Tadas perskaitys visą knygą ir 
kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.Kontroliniai duomenys:
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).*/

// let knyga = m;
// let skyriai = s;
// let dienos = d;
// m=d*s++

let skyriuSuma = 0;
let i = 0;
    while (i < skyriuSuma) {
        skyriuSuma = i+2; 
        
        console.log(skyriuSuma);
    }


/*
4.Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.
5.naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.*/