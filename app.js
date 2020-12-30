//All Global vars declared here:
//Which player rolls dice? Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;

//2 тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;

//Идэвхитэй ьоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;

//Шооны зургыг үзүүлэх элементийг DOM-оос олоод энд хадгална
var diceDom = document.querySelector(".dice");

//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч. Хаана ч ажиллаж чадаж байх ёстой учраас Global var бх
var isNewGame;

//Тоглоомыг эхлүүлнэ. Тэгэхгүй бол 2 тоглогчийн өмнө хураагдсан оноонууд гарё ирээд заавал New Game-ийг дарах шаардлагатай болоод бсан
initGame();

//Тоглоомыг шинээр эхлүүлэхэд бэлтгэх функц
function initGame() {
  //"Тоглоом эхэлллээ" гэсэн төлөвт оруулья
  isNewGame = true;

  //Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе!
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";

  //Тоглогчийн нэрийг буцааж гаргах /WINNER!-ийг болиулах/
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  //WINNER! гээд улаанаар бичигдсэн УЛААН өнгийг болиулах
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  //Аль тоглогч хожсоныг мэдэхгүй учраас эхлээд юу ч гэсэн 2-уулангаас нь "active"-г авья!!
  // document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  //Шинэ тоглоомыг байнга Player 1-ээс эхлүүлэхээр хийж байгаа тул active-ийг авчирч Идэвхитэй тоглогчийг тодруулж харуулах red point, mun arai tod background-ийг ирүүлье
  document.querySelector(".player-0-panel").classList.add("active");
}

//btn-roll: class ychiraas query-iig ashigna!!!! 03.042_29.10

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block"; // if none, invisible, block is visible
    diceDom.src = "dice-" + diceNumber + ".png";

    //03.043 Улаан хэсэгт оноо хураах, Тоглогчийн ээлжийг солих,  2020.12.29
    //sum score in red box, Change players round.
    // byysan too 1-ees yalgaatai bol eeljiin onoog +dyylne

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан тул New Game товчийг дарж шинэ тоглоом эхлүүлнэ үү");
  }
}); // 04.042_32.30 Anonymous function used here coz roll dice btn is only one.

//btn-hold-iin event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //Yg toglogchiin onoog global onoon deer nemj ugnu
    //var scores = [00, 0];
    scores[activePlayer] = scores[activePlayer] + roundScore; //Nice!!! 03.044_10.30
    //Eeljiin onoog hevleh
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Ug toglogch hojison esehiig (onoo>=100) shalgah
    if (scores[activePlayer] >= 100) {
      //Тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;
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
  } else {
    alert("Тоглоом дууссан тул New Game товчийг дарж шинэ тоглоом эхлүүлнэ үү");
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
document.querySelector(".btn-new").addEventListener("click", initGame);

//Tuluviin hyvisagch gej bdag
//Ytsaar togloj baital duudlaga orj irbel tyr PAUSE boloh
