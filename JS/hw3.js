/* *******************************
   Part 1 - Student Grades
 * *******************************/
function compute() {
    // define min and max constants
    const MIN = 0;
    const MAX = 100;
    // get inputs
    let hwa = parseInt(document.getElementById("hwa").value); // hw avg
    let mes = parseInt(document.getElementById("mes").value); // mid-term score
    let fes = parseInt(document.getElementById("fes").value); // final score
    let par = parseInt(document.getElementById("par").value); // participation
    // compute final average grade
    let fav = ((0.5 * hwa) + (0.2 * mes) + (0.2 * fes) + (0.1 * par)).toFixed(0);
    let errMsg = "Invalid input, inputs should between [0-100].";
    let grade;
    // compute final letter grade
    if ((hwa > MAX || hwa < MIN) || (mes > MAX || mes < MIN) || (fes > MAX || fes < MIN) || (par > MAX || par < MIN)) {
        document.getElementById("fav").value = errMsg;
    } else {
        if (fav >= 90) { grade = "A"; }
        else if (fav >= 80) { grade = "B"; }
        else if (fav >= 70) { grade = "C"; }
        else if (fav >= 60) { grade = "D"; }
        else { grade = "F"; }
        // print results in the textarea
        if (fav >= 70) {
            document.getElementById("fav").value = `Final average grade is ${fav}. \bFinal letter grade is ${grade}.`;
        } else {
            document.getElementById("fav").value = `Final average grade is ${fav}. \bFinal letter grade is ${grade}. \bStudent must retake the course.`;
        }
    }
}


/* *******************************
   Part 2 - Salesperson Commission
 * *******************************/
function validation(n) {
    // validate if the input field filled correctly
    return (n < 0 || isNaN(n) || !Number.isInteger(n));
}

function clearResults() {
    document.getElementById("item1q").value = "";
    document.getElementById("item1t").value = "";
    document.getElementById("item2q").value = "";
    document.getElementById("item2t").value = "";
    document.getElementById("item3q").value = "";
    document.getElementById("item3t").value = "";
    document.getElementById("item4q").value = "";
    document.getElementById("item4t").value = "";
    document.getElementById("total").value = "";
    document.getElementById("weekly").value = "";
}

function clearInputs() {
    document.getElementById("item1").value = "";
    document.getElementById("item2").value = "";
    document.getElementById("item3").value = "";
    document.getElementById("item4").value = "";
}

function clearError() {
    document.getElementById("err1").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err4").innerHTML = "";
}

function calculate() {
    // define constants
    const P1 = 20.99;
    const P2 = 12.75;
    const P3 = 9.95;
    const P4 = 35.89;
    const BASE = 250;
    const PER = 0.09;
    // get user quantity inputs
    let q1 = parseInt(document.getElementById("item1").value);
    let q2 = parseInt(document.getElementById("item2").value);
    let q3 = parseInt(document.getElementById("item3").value);
    let q4 = parseInt(document.getElementById("item4").value);
    // define error message
    let errMsg = "<span style='font-weight: bold; color: red; font-size: 12px;'>Quantity must be 0 or positive integer, put 0 if none was sold.</span>";
    // define computed variables
    let t1, t2, t3, t4, total, weekly;
    // validation user input
    if (validation(q1) || validation(q2) || validation(q3) || validation(q4)) {
        if (validation(q1)) { document.getElementById("err1").innerHTML = errMsg; }
        if (validation(q2)) { document.getElementById("err2").innerHTML = errMsg; }
        if (validation(q3)) { document.getElementById("err3").innerHTML = errMsg; }
        if (validation(q4)) { document.getElementById("err4").innerHTML = errMsg; }
        // clear other fields
        clearResults();
    } else {
        // clear error message
        clearError();
        // calculate final results
        t1 = P1 * q1;
        t2 = P2 * q2;
        t3 = P3 * q3;
        t4 = P4 * q4;
        total = t1 + t2 + t3 + t4;
        weekly = total * PER + BASE;
        // show result
        document.getElementById("item1q").value = q1;
        document.getElementById("item1t").value = t1.toFixed(2);
        document.getElementById("item2q").value = q2;
        document.getElementById("item2t").value = t2.toFixed(2);
        document.getElementById("item3q").value = q3;
        document.getElementById("item3t").value = t3.toFixed(2);
        document.getElementById("item4q").value = q4;
        document.getElementById("item4t").value = t4.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        document.getElementById("weekly").value = weekly.toFixed(2);
    }
}

function clearForm() {
    // clear error message
    clearError();
    // clear other fields
    clearInputs();
    clearResults();
}

$(function () {
    $(document).tooltip();
});


/* *******************************
   Part 3 - Temperature Converter
 * *******************************/
function converter(conv) {
    let temp1 = parseInt(document.getElementById("temp").value);
    let temp2;
    if (!isNaN(temp1)) {
        if (conv === "c2f") {
            temp2 = ((9/5 * temp1) + 32).toFixed(0);
            document.getElementById("converted").value = `${temp1}C is ${temp2}F`;
        } else if (conv === "f2c") {
            temp2 = (5/9 * (temp1 - 32)).toFixed(0);
            document.getElementById("converted").value = `${temp1}F is ${temp2}C`;
        }
    } else {
        document.getElementById("converted").value = "Input must be an integer.";
    }
}


/* *******************************
   Extra Credit - Multiplication
 * *******************************/
let X, Y;
function randints() {
    X = Math.floor(Math.random() * 10);
    Y = Math.floor(Math.random() * 10);
    document.getElementById("questions").innerHTML = `<span>How much is ${X} times ${Y}?</span>`;
}

function checkresult() {
    let answer = X * Y;
    let useranswer = parseInt(document.getElementById("ans").value);
    if (answer === useranswer) {
        document.getElementById("checked").innerHTML = "<span>Very good!</span>";
        document.getElementById("tryagain").innerHTML = "<span><b>Would you like to try another one?</b></span>";
        document.getElementById("yes").innerHTML = "<input type=button value=\"Yes\" onclick=\"yes();\">";
        document.getElementById("no").innerHTML = "<input type=button value=\"No\" onclick=\"no();\">";
    } else {
        document.getElementById("checked").innerHTML = "<span>No. Please try again.</span>";
    }
}

function yes() {
    randints();
    document.getElementById("checked").innerHTML = "";
    document.getElementById("tryagain").innerHTML = "";
    document.getElementById("yes").innerHTML = "";
    document.getElementById("no").innerHTML = "";
}

function no() {
    document.getElementById("tryagain").innerHTML = "<span>Thanks for playing, see you next time.</span>";
    document.getElementById("yes").innerHTML = "";
    document.getElementById("no").innerHTML = "";
}