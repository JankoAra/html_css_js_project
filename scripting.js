var ime = 'janko';
var broj = 10;
var email;
email = 'janko@jankic';
document.writeln(ime + broj + email);

function cao() {
    document.write("janko kaze cao");
}

function setCookie(name, value, expiration) {
    value = encodeURIComponent(value);
    name = encodeURIComponent(name);
    expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expiration);
    const cookieString = name + '=' + value + '; expires=' + expirationDate.toUTCString() + ';';
    document.cookie = cookieString;
}

function setUsernameCookie() {
    value = document.formular.singleLineInput.value;
    name = document.formular.multiline.value;
    if (value != "") {
        setCookie(name, value, 1);
    }
}

function deleteCookie(name) {
    setCookie(name, "bla", -1);
}

function readCookies() {
    var allCookies = document.cookie;
    //document.write(allCookies);

    cookiearray = allCookies.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        document.write("Key is : " + name + " and Value is : " + value + "<br>");
    }
}

function redirect(url) {
    window.location = url;
}

function redirectTimeout(url, seconds) {
    document.write("You will be redirected in " + seconds + " sec.<br>");
    document.write(`You will be redirected in ${seconds} sec.`);
    setTimeout(() => { redirect(url); }, seconds * 1000);
}

function pageReload() {
    location.reload(true);
}

function dialogBox(type) {
    var retVal;
    switch (type) {
        case "alert":
            // ima samo dugme OK
            alert("This is a warning message!");
            break;
        case "confirmation":
            // vraca true ako se klikne OK, false ako se klikne Cancel
            retVal = confirm("Do you want to continue ?");
            if (retVal == true) {
                document.write("User wants to continue!");
            } else {
                document.write("User does not want to continue!");
            }
            break;
        case "prompt":
            // prvi parametar je labela, drugi je pocetna vrednost polja
            // vraca vrednost ako se klikne OK, vraca null ako se klikne Cancel
            retVal = prompt("Enter your name : ", "your name here");
               document.write("You have entered : " + retVal);
            break;
        default:
            document.write("dijalog ne postoji");
    }
}