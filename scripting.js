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

function deleteCookie(name){
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