/* 
    switch


en dålig lösning - ett bättre sätt är att använda switch
----------------------------------------------------------
let value = 5;

if(value === 1) { console.log('värdet är ett'); }
else if(value === 2) {console.log('värdet är två');}
else if(value === 3) {console.log('värdet är tre');}
else if(value === 4) {console.log('värdet är fyra');}
else if(value === 5) {console.log('värdet är fem');}
else {console.log('finns inte i if-satsen');}

switch(value) {
    case compare-value:
        action
        break;
    case compare-value:
        action
        break;

    default:
        action
        break;
}

*/


let value = 0;

switch(value) {
    case 1: { console.log('värdet är ett'); break; }
    case 2: { console.log('värdet är två'); break; }
    case 3: { console.log('värdet är tre'); break; }
    case 4: { console.log('värdet är fyra'); break; }
    case 5: { console.log('värdet är fem'); break; }
    
    default: { console.log('värdet finns inte i switchen'); break; }
}