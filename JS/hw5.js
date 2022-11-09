/* *********************************************
 Part 1 - User Information
********************************************* */
function submitUserInfo() {
    const fieldRquired = "<p>This field is required.</p>";
    // get user's name
    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("name_empty").innerHTML = fieldRquired;
    } else {
        document.getElementById("name_empty").innerHTML = "";
    }
    // get age group
    let agegroups = document.querySelectorAll('input[name="age_group"]');
    let agegroup = -1;
    for (let item of agegroups) {
        if (item.checked) {
            agegroup = item.value;
            break;
        }
    }
    if (agegroup === -1) {
        document.getElementById("radio_empty").innerHTML = fieldRquired;
    } else {
        document.getElementById("radio_empty").innerHTML = "";
    }
    // get browser info
    let browsers = document.querySelectorAll('input[name="browser"]');
    let selectedBrowsers = [];
    for (let item of browsers) {
        if (item.checked) {
            selectedBrowsers.push(item.value);
        }
    }
    if (selectedBrowsers.length === 0) {
        document.getElementById("browser_empty").innerHTML = fieldRquired;
    } else {
        document.getElementById("browser_empty").innerHTML = "";
    }
    // get genre
    let genre = document.querySelector("#movie-genre").value;

    // print result into textarea
    document.getElementById("userinfo").value = `Hi ${username}, you are ${agegroup} years old. You use ${selectedBrowsers.join(', ')}. Your favorite movie genre is ${genre}.`
}

function clearUserInfo() {
    // clear name
    document.getElementById("username").value = "";
    // clear radio buttons
    let radios = document.querySelectorAll('input[name="age_group"]');
    for (let radio of radios) { radio.checked = false; }
    // clear checked buttons
    let browsers = document.querySelectorAll('input[name="browser"]');
    for (let browser of browsers) { browser.checked = false; }
    // clear textarea
    document.getElementById("userinfo").value = "";
}


/* *********************************************
 Part 2 - User Information
********************************************* */