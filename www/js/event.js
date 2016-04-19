var event
switch (new Date().getHours()) {
    case 0:
        event="DJ";
        break;
    case 1:
        event="Red Velvet Dance Group";
        break;
    case 2:
        event="Cardell's Steel Band";
        break;
    case 3:
        event="DJ";
        break;
    case 4:
        event="Ice Princess & Ice Queen (Kid's Show)";
        break;
    case 5:
        event="Rainbow Kids Club";
        break;
    case 6:
        event="Akwaba Group";
        break;
    case 7:
        event="N2 Caribbean Band";
        break;
    case 8:
        event="Waterloo Dance Team";
        break;
    case 9:
        event="Fateh DOE";
        break;
    case 10:
        event="Audience Activity";
        break;
    case 11:
        event="Arya Dance Team";
        break;
    case 12:
        event="Sudesh Kumari/Arminder Bobby";
        break;
    default:
        event="Fusion of Taste is currently closed. See you soon!";
}
document.getElementById("event").innerHTML = event;