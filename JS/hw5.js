/* *********************************************
 Part 1 - User Information
********************************************* */
function submitUserInfo() {
    const fieldRquired = "<p>This field is required.</p>";
    let flag = true;
    // get user's name
    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("name_empty").innerHTML = fieldRquired;
        flag = false;
    } else {
        document.getElementById("name_empty").innerHTML = "";
        flag = true;
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
        flag = false;
    } else {
        document.getElementById("radio_empty").innerHTML = "";
        flag = true;
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
        flag = false;
    } else {
        document.getElementById("browser_empty").innerHTML = "";
        flag = true;
    }
    // get genre
    let genre = document.getElementById("movie-genre");
    if (genre.selectedIndex === 0) {
        document.getElementById("genre_empty").innerHTML = fieldRquired;
        flag = false;
    } else {
        document.getElementById("genre_empty").innerHTML = "";
        flag = true;
    }

    // print result into textarea
    if (flag) {
        document.getElementById("userinfo").value = `Hi ${username}, you are ${agegroup} years old. You use ${selectedBrowsers.join(', ')}. Your favorite movie genre is ${genre.value}.`
    }
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
    // clear checked genre
    document.querySelector("#movie-genre").selectedIndex = 0;
    // clear textarea
    document.getElementById("userinfo").value = "";
}


/* *********************************************
 Part 2 - OnClick() / OnChange() Exercise
********************************************* */
function artWorks(thisForm) {
    let addressIndex = thisForm.LifeSkillSeries.selectedIndex;
    if (addressIndex === 0) {
        document.getElementById("select_empty").innerHTML = "<p>Please select an art work.</p>";
    } else {
        window.open(thisForm.LifeSkillSeries.options[addressIndex].value);
        document.getElementById("select_empty").innerHTML = "";
    }
}

function funnyVideos(thisForm) {
    let addressIndex = thisForm.FunnyAnimes.selectedIndex;
    if (addressIndex !== 0) {
        window.open(thisForm.FunnyAnimes.options[addressIndex].value);
    }
}


/* *********************************************
 Part 3 - User State Information
********************************************* */
