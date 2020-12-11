/* 
    LOOPAR
*/

let names = ['Hans','Tommy','Anki','Joakim','Haithem']

// array foreach loop
// names.forEach((name, index) => {
//     console.log(index, name)
// })


// for-loop - loopa något ett givet antal gånger
// for (let i=0; i < names.length; i++) {
//     console.log(i + " " + names[i]);
// }


// foreach-loop/for-of - loopa genom allt i en viss array
// for (let name of names) {
//     console.log(name)
// }


// while
// let index = 0;
// while (index < names.length) {
//     console.log(names[index])
//     index++;
// }


// do-while - kommer göra actions minst en gång
// let index = 0;
// do {
//     console.log(names[index])
//     index++;
// } while(index < names.length)


/* 
    while/do-while : vill vi använda tills ett visst tillstånd
    är uppnåt. 
    
        "Är jag uppkopplad? Nej, okej då försöker jag koppla upp mig".
        "Så länge det är för varmt. Kör fläkten."

    for-of : när vi vill loopa igenom alla objekt oavsett hur 
    många det än är. Som i en array eller liknande.

    .forEach : när vi vill loopa igenom alla värden i en array

    for : när vi vill loopa ett givet/visst antal gånger såsom
    visa de 10 sista meddelandena.

*/