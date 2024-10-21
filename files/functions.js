function change_dark_state() {
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].style.backgroundColor == "white" ? "black" : "white";
    document.getElementsByTagName("body")[0].style.color = document.getElementsByTagName("body")[0].style.color == "black" ? "whitesmoke" : "black";
}

function on_nav_bar_press(c) {
    if(c == "study") {
        document.getElementsByClassName("main-study-group")[0].style.visibility = document.getElementsByClassName("main-study-group")[0].style.visibility == "visible" ? "hidden" : "visible";
        document.getElementsByClassName("main-study-group-section-problem")[0].style.visibility = document.getElementsByClassName("main-study-group-section-problem")[0].style.visibility == "visible" ? "hidden" : "visible";
        document.getElementsByClassName("main-study-group-section-affinity")[0].style.visibility = document.getElementsByClassName("main-study-group-section-affinity")[0].style.visibility == "visible" ? "hidden" : "visible";
        document.getElementsByClassName("main-study-group-section-sketch")[0].style.visibility = document.getElementsByClassName("main-study-group-section-sketch")[0].style.visibility == "visible" ? "hidden" : "visible";
        document.getElementsByClassName("main-study-group-section-prototype")[0].style.visibility = document.getElementsByClassName("main-study-group-section-prototype")[0].style.visibility == "visible" ? "hidden" : "visible";
    }
}