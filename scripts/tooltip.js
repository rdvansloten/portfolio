function iconToolTip(x) {

    var tooltip;

    if(x === "linkedin") {
        tooltip = "LinkedIn";
    }
    else if(x === "github") {
        tooltip = "GitHub";
    }
    else if(x === "medium") {
        tooltip = "Medium";
    }
    else if(x === "email") {
        tooltip = "Email";
    }
    else if(x === "yunikon") {
        tooltip = "Yunikon";
    }
    else if(x === "void") {
        tooltip = "&nbsp;";
    }

    document.getElementById("icon-tooltip").innerHTML = tooltip;
}
