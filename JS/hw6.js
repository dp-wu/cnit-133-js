function clearMessage(part) {
    switch (part) {
        case 1:
            document.getElementById("error1").innerHTML = "";
            break;
        case 3:
            document.getElementById("error3").innerHTML = "";
            break;
    }
}

function clearTextarea(part) {
    switch (part) {
        case 1:
            document.getElementById("result1").value = "";
            break;
        case 2:
            document.getElementById("paragraphInput").value = "";
            break;
        case 3:
            document.getElementById("areaCode").innerHTML = "";
            document.getElementById("areaCodeLabel").innerHTML = "";
            document.getElementById("phoneNumberLabel").innerHTML = "";
            document.getElementById("phoneNumber1").innerHTML = "";
            document.getElementById("phoneNumber2").innerHTML = "";
            break;
    }
}

function clearInput(part) {
    switch (part) {
        case 1:
            document.getElementById("userinput").value = "";
            break;
        case 2:
            document.getElementById("charInput").value = "";
            break;
        case 3:
            document.getElementById("phoneNum").value = "";
    }
}

function clearResult(part) {
    switch (part) {
        case 2:
            document.getElementById("result2").value = "";
            break;
    }
}

/* **********************************************************************************
 * Part 1 - Validate for at least 4 decimal positions and show different results   *
********************************************************************************** */
function validateInput(i) {
    // hold return value
    let result;

    // validate
    if (isNaN(i)) {
        // not a number
        result = 1;
    } else {
        let parsed = i.toString().split('.');
        // NOTE this does not validate if user puts more than 1 decimal point in the input
        if (parsed.length === 1) {
            // no decimal point has found
            result = 2;
        } else if (parsed.length === 2) {
            if (parsed[1].length < 4) {
                // wrong decimal places
                result = 2;
            } else {
                // valid input
                result = 0;
            }
        } else {
            // unknown input value
            result = -1;
        }
    }
    return result;
}

function printResult(i) {
    // A
    let A = Math.round(i);
    // B
    let B = Math.round(Math.sqrt(i));
    // C
    let C = i.toFixed(1);
    // D
    let D = i.toFixed(2);
    // E
    let E = i.toFixed(3);

    // show result in textarea
    document.getElementById("result1").value = `User input number ${i}\nits nearest integer is ${A}\nits square root is ${B}\nits nearest 10th position is ${C}\nits nearest 100th position is ${D}\nits nearest 1000th position is ${E}`;
}

function processInput() {
    // read user input
    let userInput = parseFloat(document.getElementById("userinput").value);
    // validate and process
    switch (validateInput(userInput)) {
        case 0:
            // if the user input is valid, process the request
            printResult(userInput);
            clearMessage(1);
            break;
        case 1:
            // if input is of wrong type
            document.getElementById("error1").innerHTML = "<p>Incorrect input type</p>";
            clearTextarea(1);
            break;
        case 2:
            // if input is of wrong decimal places
            document.getElementById("error1").innerHTML = "<p>Incorrect decimal places</p>";
            clearTextarea(1);
            break;
        default:
            // if input is of unknown incorrect situation
            document.getElementById("error1").innerHTML = "<p>Unrecognized input, please try another one.</p>";
            clearTextarea(1);
    }

}

function clearFloat() {
    clearTextarea(1);
    clearMessage(1);
    clearInput(1);
}


/* **********************************************************************************
 * Part 2 - Matching a Char and get Appearance Count  *
********************************************************************************** */
function matchCh() {
    let c = document.getElementById("charInput").value;
    let content = document.getElementById("paragraphInput").value;     
    let regexp = new RegExp(c, 'g');
    
    let result = content.match(regexp);
    let msg;
    if (result == null) {
        msg = `Search character \"${c}\" not found in the content you typed.`;
        // Professor's code:
        // assemble HTML to pump into new window:
        let myText = "<!DOCTYPE html>\n";
        myText += "<html lang='en'>\n";
        myText += "<head>\n";
        myText += "<title>Popup Window</title>\n";
        myText += "</head>\n";
        myText += "<body>\n";
        myText += "<div style='margin:0 auto;'>\n";
        myText += "<p><strong>" + msg + "</strong></p>\n";
        myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        myText += "</div>\n";
        myText += "</body>\n";
        myText += "</html>";
        
        let newWindow = window.open("", "new_window", "top=1,left=1,width=300,height=100");
        newWindow.opener = null;
        newWindow.focus();
        newWindow.document.write(myText);
        newWindow.document.close();
    } else {
        msg = `There are ${result.length} \"${c}\" found in content.`;
    }
    document.getElementById("result2").value = msg;
}

function clearMatch2() {
    clearTextarea(2);
    clearInput(2);
    clearResult(2);
}


/* **********************************************************************************
 * Part 3 - Matching Phone Numbers  *
********************************************************************************** */
function processPhoneNum() {
    let pn = document.getElementById("phoneNum").value;
    let regexp = /\([0-9]{3}\)[0-9]{3}-[0-9]{4}/s;
    let matched = pn.match(regexp);

    let phone;
    if (matched != null && matched.length === 1) {
        phone = matched[0];
        let areaCode = phone.match(/(?!=\()[0-9]{3}(?=\))/);
        let first3Digits = phone.match(/(?!=\))[0-9]{3}(?=-)/);
        let last4Digits = phone.match(/(?!=-)[0-9]{4}$/);
        clearMessage(3);
        document.getElementById("areaCodeLabel").innerHTML = "<p><strong>Area Code</strong></p>";
        document.getElementById("areaCode").innerHTML = `<textarea readonly>${areaCode}</textarea>`;
        document.getElementById("phoneNumberLabel").innerHTML = "<p><strong>Phone Number</strong></p>";
        document.getElementById("phoneNumber1").innerHTML = `<textarea readonly>${first3Digits}</textarea>`;
        document.getElementById("phoneNumber2").innerHTML = `<textarea readonly>${last4Digits}</textarea>`;
    } else {
        document.getElementById("error3").innerHTML = "Invalid format, please enter it again.";
        clearTextarea(3);
    }
}

function clearPhoneNum() {
    clearTextarea(3);
    clearInput(3);
    clearMessage(3);
}


/* **********************************************************************************
 * Extra Credit - Matching Phone Numbers  *
********************************************************************************** */
$('input[name="phoneNumber"]').mask('(000)000-0000');