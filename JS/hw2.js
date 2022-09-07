// hw2 part2 answer

function isValid(s, id) {
    /* error message to be presented if invalid */
    const ERR_MSG = "<span style='font-weight: bold; color: red; font-size: 12px;'>Inputs are integers-only</span>"
    /* validation */
    if (isNaN(s) || s=="") {
        document.getElementById(id).innerHTML = ERR_MSG;
        return false;
    } else {
        return true;
    }
}

function compute() {
    /* define constant */
    const N = 3;

    /* read input numbers */
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);

    /* input type validation */
    if (isValid(n1, "err1") && isValid(n2, "err2") && isValid(n3, "err3")) {
        /* result variables */
        let sum3 = n1 + n2 + n3;
        let prod3 = n1 * n2 * n3
        let avg3 = sum3 / N;
        let min3 = Math.min(n1, n2, n3);
        let max3 = Math.max(n1, n2, n3);
        /* return result */
        document.getElementById("sum").value = sum3;
        document.getElementById("prod").value = prod3;
        document.getElementById("avg").value = avg3;
        document.getElementById("max").value = max3;
        document.getElementById("min").value = min3;
    } else {
        /* if not a valid input, fade away the results */
        $(document).ready(function(){
            $("#sum").fadeTo("slow", 0.15);
            $("#prod").fadeTo("slow", 0.15);
            $("#avg").fadeTo("slow", 0.15);
            $("#max").fadeTo("slow", 0.15);
            $("#min").fadeTo("slow", 0.15);
        })
    }
}

function res() {
    /* remove warnings */
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err1").innerHTML = "";
    /* unfade the results */
    $(document).ready(function(){
            $("#sum").fadeTo("slow", 1);
            $("#prod").fadeTo("slow", 1);
            $("#avg").fadeTo("slow", 1);
            $("#max").fadeTo("slow", 1);
            $("#min").fadeTo("slow", 1);
        })
    /* reset focus */
    document.calculator.input.focus();
}


// hw2 extra credit answer
function exchange() {
    /* get variable values */
    const EUR = 0.84;
    const CAN = 1.23;
    const HKD = 7.76;
    const JPY = 110.80;
    const MXN = 19.82;
    let usd = parseFloat(document.getElementById("usd").value);

    /* set values */
    document.getElementById("to-eur").value = usd * EUR;
    document.getElementById("to-can").value = usd * CAN;
    document.getElementById("to-hkd").value = usd * HKD;
    document.getElementById("to-jpy").value = usd * JPY;
    document.getElementById("to-mxn").value = usd * MXN;
}