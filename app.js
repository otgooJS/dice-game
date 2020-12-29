//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#score-1").textContent = "<em>Yes!<em>"; //32.05 TextContent-ryy HTML bichih yamarch bolomjgyi bh ni!!! em=emphasize tashyy

//Tegbel HTML bichie gebel yah ve?
//document.querySelector("#score-1").innerHTML = "<em>Yes!<em>"; //Now Italic Yes! appeared. :)
console.log("Dice : " + dice);

//<img src="dice-5.png" alt="Dice" class="dice" />
document.querySelector(".dice").style.display = "none"; //JS Lesson003.41_37.00: making dice png invisible

// <div class="player-score" id="score-0">43</div>
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
