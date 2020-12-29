//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#score-1").textContent = "<em>Yes!<em>"; //32.05 TextContent-ryy HTML bichih yamarch bolomjgyi bh ni!!! em=emphasize tashyy

//Tegbel HTML bichie gebel yah ve?
//document.querySelector("#score-1").innerHTML = "<em>Yes!<em>"; //Now Italic Yes! appeared. :)
//console.log("Dice : " + dice);

//<img src="dice-5.png" alt="Dice" class="dice" />
//document.querySelector(".dice").style.display = "none"; //JS Lesson003.41_37.00: making dice png invisible. ''block' geheer visible

//document.querySelector("#score-0").textContent = 0;
//document.getElementById("#score-0").textContent = 0; // ene ni ilyy hyrdan ajillana!!!! ID-gaar ni elements-iig haij bgaa tohgioldold get-iig should use. 03.042_25.20
// <div class="player-score" id="score-0">43</div>

document.getElementById("score-0").textContent = "0"; // 03.042_25.26: Text content ryy string uguh ystoi!!
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//btn-roll: class ychiraas query-iig ashigna!!!! 03.042_29.10
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block"; // if none, invisible, block is visible
  diceDom.src = "dice-" + diceNumber + ".png";
}); // 04.042_32.30 Anonymous function used here coz roll dice btn is only one.

/*function shooShid() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  alert("Шоо буулаа:" + diceNumber);
}
*/
