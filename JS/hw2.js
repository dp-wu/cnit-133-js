/***************
hw2 part2 answer
***************/

function errMsg(arr, arrErr) {
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            // display error message
            document.getElementById(arrErr[i]).innerHTML = "<span style='font-weight: bold; color: red; font-size: 12px;'>Inputs are integers-only</span>";
        } else {
            // remove error message
            document.getElementById(arrErr[i]).innerHTML = "";
        }
    }
}

function fade(arr, flag) {
    // arr is the array of fading/unfading fields
    // flag indicates either to fade (true) or to unfade (false)
    for (i = 0; i < arr.length; i++) {
        if (flag) {
            // if true, fade away boxes
            $("#" + arr[i]).fadeTo("slow", 0.15);
            document.getElementById(arr[i]).value = 0;
        } else {
            // if false, unfade boxes
            $("#" + arr[i]).fadeTo("slow", 1);
        }
    }
}

function compute() {
    // read input numbers
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);
    const N = 3;
    let idArr = ["sum", "prod", "avg", "max", "min"];
    let arr = [n1, n2, n3];
    let err = ["err1", "err2", "err3"];

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        // unfade result
        fade(idArr, false);
        // remove error message
        errMsg(arr, err);
        // return result
        document.getElementById("sum").value = n1 + n2 + n3;
        document.getElementById("prod").value = n1 * n2 * n3;
        document.getElementById("avg").value = ((n1 + n2 + n3) / N).toFixed(2);
        document.getElementById("max").value = Math.min(n1, n2, n3);
        document.getElementById("min").value = Math.max(n1, n2, n3);
    } else {
        // fade result
        fade(idArr, true);
        // show error message
        errMsg(arr, err);
        for (i = 0; i < idArr.length; i++) {
            document.getElementById(idArr[i]).value = 0;
        }
    }
}

function res() {
    // remove error message
    document.getElementById("err1").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err3").innerHTML = "";
    // unfade results
    $("#sum").fadeTo("slow", 1);
    $("#prod").fadeTo("slow", 1);
    $("#avg").fadeTo("slow", 1);
    $("#max").fadeTo("slow", 1);
    $("#min").fadeTo("slow", 1);
    // reset focus
    document.calculator.input.focus();
}


/***************
hw2 extra credit answer
***************/

function exchange() {
    // get variable values
    const EUR = 0.84;
    const CAN = 1.23;
    const HKD = 7.76;
    const JPY = 110.80;
    const MXN = 19.82;
    let usd = parseFloat(document.getElementById("usd").value);

    // set values
    document.getElementById("to-eur").value = (usd * EUR).toFixed(2);
    document.getElementById("to-can").value = (usd * CAN).toFixed(2);
    document.getElementById("to-hkd").value = (usd * HKD).toFixed(2);
    document.getElementById("to-jpy").value = (usd * JPY).toFixed(2);
    document.getElementById("to-mxn").value = (usd * MXN).toFixed(2);
}

$(document).ready(function() {
    // toggle the message
    $("#show-hide").click(function() {
        $(".message").toggle();
    });
    // change textarea background color
    $("#usd").focus(function() {
        $(this).css('background-color', '#ffffff');
    });
});