
//   let tilder = document.getElementsByClassName("tilder")[0];
//   let tilderPos = tilder.getBoundingClientRect().x;
//   let row = document.getElementsByClassName("row-1-start")[0];
//   row.style.position = "relative";
//   row.style.left = tilderPos + "px";

// console.log(tilder);
//   alert("Start the keyboard test");

let start = false;
let startBtn = document.getElementById("start_btn");
startBtn.addEventListener("click", function (e) {
    start = true;
});
// D:\Misc. Files\Web Apps\Tool\laptopChecker\audio\key-press.mp3

let tink = new Audio('../audio/key-press.mp3');

document.onkeydown = function (e) {

    if (start == true) {



        tink = new Audio('../audio/key-press.mp3');
        tink.play();
        // console.log(e.keyCode);
        // console.log(e.shiftKey);
        // let Key= e.keyCode;
        // console.log(key);

        let key = document.getElementById(`${e.keyCode}`);
        e.preventDefault();
        key.classList.remove("key-pressed");
        // console.log(key);
        setTimeout(() => {
            key.classList.add("key-pressed");
        }, 100);

        if (
            e.keyCode == 16 ||
            e.keyCode == 17 ||
            e.keyCode == 18 ||
            e.keyCode == 13 ||
            e.keyCode == 91
        ) {
            let key2 = document.getElementsByClassName(`${e.keyCode}`);
            key2[0].classList.remove("key-pressed");
            // console.log(key2);
            // e.preventDefault();
            setTimeout(() => {
                key2[0].classList.add("key-pressed");
            }, 100);
        }

    }
    else {
        alert("Press the start button to start the test!");
    }
};
document.onkeyup = function (e) {

    if (start == true) {

        if (e.keyCode == 44) {
            tink.play();
            let keyp = document.getElementById("44");
            keyp.classList.add("key-pressed");
        }
    }
    else {
        alert("Press the start button to start the test!");
    }
};

let reset = document.getElementById("reset");
reset.addEventListener("click", function (e) {
    let keys = document.getElementsByTagName("button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.remove("key-pressed");
    }
});
