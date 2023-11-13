// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
//     Volume of a cylinder: V = πr2h
// where r is the radius and h is the height of the cylinder.

// Honda CB500x Bore x Stroke: 67.0 x 66.8 mm 471cc pararel piston

const pi = 22 / 7;
let v = 0;

function pistonCal(boreR, stroke, pistons) {

    v = pi * (boreR * boreR) * stroke;
    let vollume = (v * pistons) / 1000; //cc
    console.log(vollume);
    v = vollume.toFixed(2);
    return vollume;
}


pistonCal(67 / 2, 66.8, 2)
console.log(v);
console.log(`if you wanna cal a vollume pls use "pistonCal(67 / 2, 66.8, 2)" this code and change the value "boreR, stroke, pistons"`);