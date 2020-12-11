/* 
    IF-statements 

    en if-sats är till för att kolla om ett påstående är sant eller falskt.
    Om ett påstående är sant. Då vill man göra nått. Annars gör man något annat.

    good practise
    ----------------
    if

    if
    else

    if
    else if
    else

    bad practise
    ----------------
    if
    else if
    else if
    else if
    else 

    if
    else if
    else if
    else if
    else if
    else if
    else 


    varianter
    ------------------

    if (compare statement) {
        true-actions
        more-actons
    }
    else if (compare statement) {
        true-actions
        more-actons
    }
    else if (compare statement) {
        true-actions
        more-actons
    }
    else {
        false-actions
        more-actons
    }


    if (compare statement) {
        true-actions
        more-actons
    }
    else {
        false-actions
        more-actons
    }


    if (compare statement) {
        true-actions
        more-actons
    }


    if (compare statement)
        true-actions
    else if (compare statement)
        true-actions
    else
        false-actions
     

    if (compare statement)
        true-actions
    else
        false-actions


    if (compare statement)
        true-actions

        
    (compare statment) ? true-actions : false-actions

    JS och andra språk                  Andra språk kan ha
    --------------------------------------------------------
    ==  lika med                        eq
    <   mindre än                       lt
    >   större än                       gt
    !=  inte lika med                   not
    <=  mindre eller lika med           le
    >=  större eller lika med           ge

    &&  och                             and
    ||  eller                           or
    !   inte lika med                   not

    === lika med och samma datatyp
    !== inte lika med och samma datatyp


*/



// if( 1 == 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }



// if (1 == 1) 
//     console.log(true);
// else 
//     console.log(false);

// (1 == 1) ? console.log(true) : console.log(false);



// if(1 === '1') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if(1 === '1' && 1 < 2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if(1 === '1' & 1 < 2) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// var employees = [
//     { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36},
//     { firstName: 'Tommy', lastName: 'Mattin-Lassei', age: 38},
//     { firstName: 'Haithem', lastName: 'Smirani', age: 35},
//     { firstName: 'Joakim', lastName: 'Wahlström', age: 33},
//     { firstName: 'Anki', lastName: 'Mattin-Lassei', age: 42}
// ]

// let sorted = []
// let letters = [];

// employees.forEach(person => {
//     let index = 0;
//     const {firstName} = person

//     if(sorted.length !== 0) {
//         letters.push(firstName[0]);
//         letters.sort();
//     }

//     index = letters.indexOf(firstName[0])
//     sorted.splice(index, 0, person)
// })
// console.log(sorted)


let value = 5;

if(value === 1) { console.log('värdet är ett'); }
else if(value === 2) {console.log('värdet är två');}
else if(value === 3) {console.log('värdet är tre');}
else if(value === 4) {console.log('värdet är fyra');}
else if(value === 5) {console.log('värdet är fem');}
else {console.log('finns inte i if-satsen');}