/* CONSOLE */
// console.log("vanligt meddelande")
// console.warn("varningsmeddelande")
// console.error("felmeddelande")

/* DOM - Document Object Model (HTML, CSS + JS) */
// document.body.innerText = '<h1>Hejsan</h1>'
// document.body.innerHTML = '<h1>Hejsan</h1>'
// document.body.createElement("div").innerText = "hej" // skapar felmeddelande se console

// let results = document.getElementById('input-id').value
// let results = document.getElementsByName('input-name')[0].value
// let results = document.getElementsByTagName('input')[0].value
// let results = document.getElementsByClassName('input-class')[0].value

// let results = document.querySelector('#input-id').value
// let results = document.querySelector('input').value
// let results = document.querySelector('.input-class').value
// document.getElementById('results').innerText = results

/* VARIABLES */
// name = 'Hans'                // Deklarerar något gobalt. GÖR INTE SÅ HÄR
// var name = 'Hans'            // Deklarar något globalt. UNDVIK DET HÄR
// let name = 'Hans'            // Deklarar något lokalt i ett scope. GÖR DET HÄR
// const name = 'Hans'          // Deklarar något skrivskyddat lokalt. GÖR DET HÄR

/* DATA TYPES */
// string, number, boolean, null, undefined, object, array

    /* string - till för texter */
    // var name = "Hans"
    // var name = 'Hans'
    // var name = `Hans`       // när vi vill använda placeholders för variabler

    // var text = "Använder \"citat\" och 'enkel' fnuttar och variabeln "+ name +"."
    // var text = 'Använder "citat" och \'enkel\' fnuttar och variabeln '+ name +'.'
    // var text = ` Använder "citat" och 'enkel' fnuttar och variabeln ${name}.`
    // var email = 'hans.mattin-lassei@utb.ecutbildning.se'
    // var number = 1

    // console.log(text.length)
    // console.log(text.indexOf('och'))
    // console.log(text.lastIndexOf('och'))
    // console.log(text.replace('och', '&'))
    // console.log(text.replaceAll('och', '&'))
    // console.log(text.toLocaleUpperCase())
    // console.log(text.toLowerCase())
    // console.log(text.toUpperCase())
    // console.log(text.concat(name))
    // console.log(text.trim())
    // console.log(text.split(' '))
    // console.log(email.split('@'))
    // console.log(number.toString())


    /* number - till för nummer av olika slag heltal och decimaltal och stora tal */

    // number = 1
    // var number = 1
    // let number = 1
    // const number = 1

    // let value = 1; value = "hej";
    // console.log(value)

    // JS (.js)   let value = 1;      DET GÅR ATT GÖRA value = "hej";
    // C# (.cs)   int value = 1;      DET GÅR DÅ INTE ATT GÖRA value = "hej";
    // TS (.ts)   value: number = 1;  DET GÅR DÅ INTE ATT GÖRA value = "hej";

    // let value1 = 1
    // let value2 = "1"

    // if(1 == "1") {
    //     console.log("ja det stämmer det är samma värde")
    // }

    // var value = 1
    // var value = 2.5
    // var value = 1e+6
    // var value = 1e-6
    // console.log(value)

    // let value1 = 11
    // let value2 = 5

    // result = value1 + value2
    // result = value1 - value2
    // result = value1 * value2
    // result = value1 / value2
    // result = value1 % value2

    // result += value1
    // result -= value1
    // result *= value1
    // result /= value1
    // result %= value1

    // console.log(result)

    // Number(true);          // returns 1
    // Number(false);         // returns 0
    // Number("10");          // returns 10
    // Number("  10");        // returns 10
    // Number("10  ");        // returns 10
    // Number(" 10  ");       // returns 10
    // Number("10.33");       // returns 10.33
    // Number("10,33");       // returns NaN
    // Number("10 33");       // returns NaN
    // Number("John");        // returns NaN

    // let value = 1
    // console.log(value.toString()) // gör om det till en text


    /* boolean - sant eller falskt (true/false) (1/0) */
    // status = false
    // status = true

    /* undefined - när den inte vet vad den är för typ */
    // var value  
    // let value    
    // console.log(typeof value)

    /* null - är definerad men saknar ett värde */
    // value = null
    // var value = null
    // let value = null
    // const value = null
    // console.log(typeof value)