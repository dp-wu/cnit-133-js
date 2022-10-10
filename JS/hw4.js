const FOUR = 4;
const THREE = 3;
const P = 1000; // principal

function loadContents() {
    // part 1
    prod4(FOUR, '4prod');
    sum4(FOUR, '4sum');
    prod3(THREE, '3prod');
    sum3(THREE, '3sum');
    // part 2
    interestRates('interest');
}


/* **********************
Part 1 Products and Sums
********************** */
function prod4(step, id) {
    // compute product of every four integers in [5, 25]
    let result = 5;
    let resultText = '5';
    for (let i=9; i<=25; i+=step) {
        result *= i;
        resultText += " * " + i.toString();
    }
    document.getElementById(id).innerHTML = `<p><b>The result of</b> ${resultText} <b>is</b> ${result.toLocaleString()}</p>`;
}

function sum4(step, id) {
    // compute sum of every four integers in [5, 25]
    let result = 5;
    let resultText = '5';
    for (let i=9; i<=25; i+=step) {
        result += i;
        resultText += " + " + i.toString();
    }
    document.getElementById(id).innerHTML = `<p><b>The result of</b> ${resultText} <b>is</b> ${result.toLocaleString()}</p>`;
}

function prod3(step, id) {
    // compute product of every four integers in [3, 18]
    let result = 3;
    let resultText = '3';
    let counter = 6;
    while (counter <= 18) {
        resultText += " * " + counter.toString();
        result *= counter;
        counter += step;
    }
    document.getElementById(id).innerHTML = `<p><b>The result of</b> ${resultText} <b>is</b> ${result.toLocaleString()}</p>`;
}

function sum3(step, id) {
    // compute sum of every four integers in [3, 18]
    let result = 3;
    let resultText = '3';
    let counter = 6;
    while (counter <= 18) {
        resultText += " + " + counter.toString();
        result += counter;
        counter += step;
    }
    document.getElementById(id).innerHTML = `<p><b>The result of</b> ${resultText} <b>is</b> ${result.toLocaleString()}</p>`;
}

$( function() {
    $( "#answer-p1").draggable();
} )


/* **********************
Part 2 Compound Interest
********************** */
function interestRates(id) {
    let rate = [0.05, 0.06, 0.07];
    let table, row, aod, even;
    let result = '';
    for (let i=0; i<3; i++) {
        table = "<table><tr><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr>";
        for (let y=1; y<=5; y++) {
            even = y%2===0? ' class="even"': '';
            aod = P * Math.pow(1+rate[i], y);
            row = `<tr ${even}><td>${y}</td><td>${aod.toFixed(2)}</td><td>${rate[i]}</td></tr>`;
            table += row;
        }
        table += "</table>"
        result += table;
    }
    document.getElementById(id).innerHTML = result;
}


/* ************************
Extra Credit Hollow Square
************************ */
function square() {
    let s = parseInt(document.getElementById('squaresize').value);

    if (isNaN(s) || s>10 || s<2) {
        document.getElementById('showsquare').innerHTML = "<p>Please make sure the input number is between 2 and 10 (inclusively).</p>";
    } else {
        document.getElementById('showsquare').innerHTML = drawSquare(s);
    }
}

function drawSquare(n) {
    let result = "<p>";
    for (let r=0; r<n; r++) {
        for (let c=0; c<n; c++) {
            if (c!==0 && c!==n-1 && r!==0 && r!==n-1) {
                // the hollow part
                result += "&nbsp&nbsp";
            } else {
                if (c===n-1) {
                    // right wall
                    result += "*<br>";
                } else {
                    // left wall and top and bottom walls
                    result += "*&nbsp";
                }
            }
        }
    }
    result += "</p>";
    return result;
}