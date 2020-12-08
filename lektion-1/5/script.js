/* 
    Data Types

    String      =       Text
    Number      =       Heltal, decimaltal
    Boolean     =       Sant/Falskt True/False
    null        =       totalt tomt
    undefined   =       odefinerat värde
    Object      =       ett objekt/klass som innehåller ett eller fler värden
    Array       =       en lista med värden
 */

//  String
name = "Hans"
name = 'Hans'
name = `Hans`       // shift + ´
age = '36'

text = "Jag är \"bäst\" i hela världen"
text = 'Jag är "bäst" i hela världen'
text = 'Jag är "bäst" i \'hela\' världen'
text = `Jag är "bäst" i 'hela' världen`

text = "Jag heter " + name + " och är " + age + " år gammal."  
text = 'Jag heter ' + name + ' och är ' + age + ' år gammal.'  
text = `Jag heter ${name} och är ${age} år gammal. `  

text.length
text.indexOf()
text.replace()
text.toUpperCase()
text.toLowerCase()
text.concat()
text.trim()

console.log(text.trim())


// Number
/* 
    +   lägg till
    -   ta bort
    *   gångra
    /   dela
    %   divison remainder
    ++  öka med 1
    --  minska med 1

    =    lika med
    +=   lägg till
    -=   ta bort från
    *=   gångra och lägg till
    /=   dela och lägg till
    %=   divison remainder
*/

let num1 = 1
let num2 = 1.1

console.log(num1 + num2)
console.log(num1 += num2)


// Boolean
let status = true
    status = false

console.log(status)

// Null och Undefined

// Null är ingenting, har inget värde, har ingen datatyp
// men Null i Javascript är samma som ett tomt objekt

let middleName = null
console.log(typeof middleName)

let address
let address2 = undefined
console.log(typeof address)
console.log(typeof address2)