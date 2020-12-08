/* 
    variabel = nått vi lagrar information i
        camelCase   =   Javascript, Java, c, c++
        Pascal      =   C#, Pascal, Turbo Pascal
        _private    =   en variabel som "bara" lever inom en viss del.

        ex. firstName, lastName, email, postalCode, city, ssn, 

        _firstName = "Hans"
        firstName = _firstName

*/


/* 
    Deklarera variabler 
    
    name = "Hans"
    var name = "Hans"
    let name = "Hans"
    const name = "Hans"
*/

    name = "Hans"           //global deklarering (gör inte såhär)
    name = "Hans"           //global deklarering (gör inte såhär)
    var name = "Hans"       //global deklarering
    var name = "Hans"       //global deklarering

    let firstName = "Hans"       //lokal deklarering (gör såhär)
    firstName = "Anna"

    const pi = 3.14

    console.log(name);
    console.log(firstName);
    console.log(pi);