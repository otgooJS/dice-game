//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

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
//document.getElementById("score-0").textContent = 0; // ene ni ilyy hyrdan ajillana!!!! ID-gaar ni elements-iig haij bgaa tohgioldold get-iig should use. 03.042_25.20
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
  /*function shooShid() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  alert("Шоо буулаа:" + diceNumber);
}
*/

  //03.043 Улаан хэсэгт оноо хураах, Тоглогчийн ээлжийг солих,  2020.12.29
  //sum score in red box, Change players round.
  // byysan too 1-ees yalgaatai bol eeljiin onoog +dyylne

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
}); // 04.042_32.30 Anonymous function used here coz roll dice btn is only one.

//btn-hold-iin event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  //Yg toglogchiin onoog global onoon deer nemj ugnu
  //var scores = [00, 0];
  scores[activePlayer] = scores[activePlayer] + roundScore; //Nice!!! 03.044_10.30
  //Eeljiin onoog hevleh
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //Ug toglogch hojison esehiig (onoo>=100) shalgah
  if (scores[activePlayer] >= 20) {
    //If score reaches 100, Winner! label.
    document.getElementById("name-" + activePlayer).textContent = "winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    //If you want to remove winner's red color, code is below
    /*
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    */
  } else {
    //toglogchiin eeljiig solino
    switchToNextPlayer();
  }
});

// This function switches active status to another player!!!
function switchToNextPlayer() {
  //Onoog tegleed toglogchiin eeljiig solih
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //If active player equials to 0, make it 1. If not, active player=1
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //ActiveIcon must be moved: Red point
  document.querySelector(".player-0-panel").classList.toggle("active"); //03.046_29.00: toggle: bval remove
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog tyr alga bolgoh
  diceDom.style.display = "none";
}

//btn-newGame Шинэ тоглоом эхлүүлэх товчний эвэнт листенэр
document.querySelector(".btn-new").addEventListener("click", function () {
  //ActiveIcon must be moved: Red point
  document.querySelector(".player-0-panel").classList.add("active"); //03.046_29.00: toggle: bval remove
  //document.querySelector(".player-1-panel").classList.toggle("active");
  //shoog tyr alga bolgoh
  document.querySelector(".player-1-panel").classList.remove("active");
  diceDom.style.display = "none";

  for (var i = 0; i < 2; i++) {
    document.getElementById(".name-" + (i + 1)).textContent =
      "PLAYER " + (i + 1);
    document
      .querySelector(".player-" + (i + 1) + "-panel")
      .classList.remove("winner");
    scores[i] = 0;
    //Eeljiin onoog hevleh -holdiin board deer
    document.getElementById("score-" + (i + 1)).textContent = scores[i];

    document.getElementById("current-" + i).textContent = "0";
  }
  activePlayer = 0;
});
