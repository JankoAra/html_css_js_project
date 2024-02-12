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

// void evaluates the expression inside it, but doesn't return the value
// void(expression)


// constructor function
function PersonObject(name, age) {
    // atributes
    this.name = name;
    this.age = age;

    // methods
    this.birthday = function () {
        this.age++;
    };

    this.setCity = function (city) {
        // can declare new atributes inside methods
        this.city = city;
    };
}

function println(text) {
    document.write(text + "<br>");
}

function testStringMethods() {
    var text = "ja sam janko";
    println(text);
    println(text.length);
    println(text.charAt(0));
    println(text.charCodeAt(0));
    println(text.concat(" i jos jedan string"));

    //vraca indeks gde pocinje trazeni podstring, -1 ako ne postoji podstring
    println(text.indexOf("janko"));
    println(text.indexOf("jaja"));

    // komparacija stringova leksikografski, vraca -1 ako je pozivalac ranije, 0 ako su isti, 1 ako je pozivalac kasnije
    println(text.localeCompare("aja"));
    println(text.localeCompare("za"));
    println(text.localeCompare("ja sam janko"));

    // rad sa regex izrazima, postoje i match i search
    println(text.replace(" ", "*"));
    println(text.replaceAll(" ", "*"));

    //slice kao u python-u
    println(text.slice(0, 5));
    println(text.slice(7, -1));

    // vraca niz stringova
    println(text.split(" "));

    // zadaje se pocetni indeks i broj karaktera
    println(text.substr(3, 3));

    // zadaje se pocetni indeks inkluzivno i krajnji ekskluzivno
    println(text.substring(3, 9));

    println(text.toLocaleLowerCase());
    println(text.toLocaleUpperCase());
}

function stringHTMLWrappers(){
    text = "ja sam janko";
    println(text.anchor('anchor_name'));
    //alert(text.anchor('anchor_name'));
    println(text.big());
    println(text.bold());
    println(text.fontcolor("red"));
    println(text.fontsize(20));
    println(text.italics());
    println(text.link("start.html"));
}