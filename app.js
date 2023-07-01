let toggle_bar = document.querySelector(".nav-header");

let sidebar = document.querySelector(".sidebar");

let closesidebar = document.querySelector(".sidearrowleftsidenext");

toggle_bar.addEventListener("click", function () {
    // if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    // {
    //     toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    // }
    // else
    // {
    //     toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    // }
    sidebar.classList.toggle("sidebaractive")
})
closesidebar.addEventListener("click", function () {
    sidebar.classList.toggle("sidebaractive")
})
let a = 0;

function openbar() {
    if (a == 0) {
        document.getElementById("notice_board_2").style.width = "80px";
        document.getElementById("notice_board_2").style.marginLeft = "129px"
        a = 1;
    }
    else {
        document.getElementById("notice_board_2").style.width = "0px";
        document.getElementById("notice_board_2").style.marginLeft = "167px"
        a = 0;
    }

}
let b = 0;
function showinfo() {
    if (b == 0) {

        document.getElementById("asset_container_in_mid").style.height = "120px";
        document.getElementById("asset_container").style.height = "580px";
        b = 1;
    }
    else {
        document.getElementById("asset_container_in_mid").style.height = "5px";
        document.getElementById("asset_container").style.height = "460px";
        b = 0;
    }

}


let c = 0;
function showinfo2() {
    if (c == 0) {

        document.getElementById("asset_container_in_mid2").style.height = "120px";
        document.getElementById("asset_container2").style.height = "580px";
        c = 1;
    }
    else {
        document.getElementById("asset_container_in_mid2").style.height = "0px";
        document.getElementById("asset_container2").style.height = "460px";
        c = 0;
    }

}
let d = 0;
function hide_thread() {
    if (d == 0) {

        document.getElementById("hide_thread").style.height = "10px";

        d = 1;
    }
    else {
        document.getElementById("hide_thread").style.height = "400px";
        d = 0;
    }

}
let e = 0;
function showinfo3() {
    if (e == 0) {

        document.getElementById("asset_container_in_mid3").style.height = "120px";
        document.getElementById("asset_container3").style.height = "580px"

        e= 1;
    }
    else {
        document.getElementById("asset_container_in_mid3").style.height = "0px";
        document.getElementById("asset_container3").style.height = "460px"
        e = 0;
    }

}
let g = 0;
function showinfo4() {
    if (g== 0) {

        document.getElementById("asset_container_in_mid4").style.height = "120px";
        document.getElementById("asset_container4").style.height = "580px"

        g= 1;
    }
    else {
        document.getElementById("asset_container_in_mid4").style.height = "0px";
        document.getElementById("asset_container4").style.height = "460px"
        g = 0;
    }

}
let h = 0;
function hide_thread4() {
    if (h == 0) {

        document.getElementById("hide_thread4_lower").style.height = "0px";

        h = 1;
    }
    else {
        document.getElementById("hide_thread4_lower").style.height = "100px";
        h= 0;
    }

}
let i = 0;
function hide_thread4_2() {
    if (i== 0) {

        document.getElementById("hide_thread4_lower_2").style.height = "0px";

        i= 1;
    }
    else {
        document.getElementById("hide_thread4_lower_2").style.height = "100px";
        i= 0;
    }

}

function make_more_div() {
    var board = document.getElementsByClassName(two_input_box);
    board.className = "thread_2";
    document.getElementById('board').appendChild(board);
}