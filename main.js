//Bai 1
localStorage.setItem("name", "Phước");
localStorage.setItem("age", "18");
localStorage.setItem("name", "Hà");
localStorage.removeItem("age");
localStorage.clear()
//Bai 2

var lyric = [
    "SHE SLEEPS ALONE",
    "MY HEART WANTS TO COME",
    "HOME...",
    "I WISH I WAS...",
    "I WISH I WAS...",
    "BESIDE YOU"
];
var display =  document.getElementById("lyric")
display.innerHTML ="";
function spawm() {
    for (item of lyric) {
        let item_ele = document.createElement("div");
        item_ele.classList.add("text");
        item_ele.innerHTML = item;
        display.appendChild(item_ele)
    }
}
var x = setTimeout(spawm(), 1000);