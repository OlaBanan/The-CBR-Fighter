// Selector vars ----------------------------------------------------------------------
var playerOne = "";
var playerTwo = "";
var selectionProces = true;

var loadingTimeFirstMS =  100; // soon -> Math.random() * 10000;

var typePower = "power";
var typeIntelligence = "intelligence";
var typeMobility = "mobility";

// gameplay vars -----------------------------------------------------------------------
var playerTurn = true;
// true = p1 turn
// false = p2 turn

var xxx = "xxx"; // player One
var yyy = "yyy"; // player two

// game vars ---------------------------------------------------------------------------
//player One
var p1Name = "";
var p1Power = 0;
var p1Intelligence = 0;
var p1Mobility = 0;
var p1Mentality = 0;
var p1Patience = 0;
var p1Weight = 0;
var p1HP = 100;

//console.log("Name: " + p1Name + "| Power: " + p1Power + "| Intelligence: " + p1Intelligence + "| Mobility: " + p1Mobility + "| Mentality: " + p1Mentality + "| Patience: " + p1Patience + "| Weight: " + p1Weight);

//player Two
var p2Name = "";
var p2Power = 0;
var p2Intelligence = 0;
var p2Mobility = 0;
var p2Mentality = 0;
var p2Patience = 0;
var p2Weight = 0;
var p2HP = 100;

//console.log("[PLAYER 2]: " + " Name: " + p2Name + " | Power: " + p2Power + " | Intelligence: " + p2Intelligence + " | Mobility: " + p2Mobility + " | Mentality: " + p2Mentality + " | Patience: " + p2Patience + " | Weight: " + p2Weight);

// Player vars -------------------------------------------------------------------------
// Fredrik - ment
var nameFredrik = "fredrik";
var powerFredrik = 70;
var intelligenceFredrik = 30;
var MobilityFredrik = 25;
var mentalityFredrik = 100;
var patienceFredrik = 25;
var weightFredrik = 30;

// Lukas - intell
var nameLukas = "lukas";
var powerLukas = 50;
var intelligenceLukas = 100;
var MobilityLukas = 30;
var mentalityLukas = 15;
var patienceLukas = 40;
var weightLukas = 20;

// Jaison
var nameJaison = "jaison";
var powerJaison = 20;
var intelligenceJaison = 5;
var MobilityJaison = 15;
var mentalityJaison = 50;
var patienceJaison = 10;
var weightJaison = 30;

// Mathias
var nameMathias = "mathias";
var powerMathias = 55;
var intelligenceMathias = 70;
var MobilityMathias = 50;
var mentalityMathias = 20;
var patienceMathias = 2;
var weightMathias = 60;

// Ola - power
var nameOla = "ola";
var powerOla = 100;
var intelligenceOla = 50;
var MobilityOla = 50;
var mentalityOla = 25;
var patienceOla = 5;
var weightOla = 5;

// Sipan
var nameSipan = "sipan";
var powerSipan = 40;
var intelligenceSipan = 30;
var MobilitySipan = 70;
var mentalitySipan = 35;
var patienceSipan = 5;
var weightSipan = 10;

// David - weig
var nameDavid = "david";
var powerDavid = 60;
var intelligenceDavid = 25;
var MobilityDavid = 20;
var mentalityDavid = 50;
var patienceDavid = 30;
var weightDavid = 100;

// Jona - mob
var nameJona = "jona";
var powerJona = 25;
var intelligenceJona = 40;
var MobilityJona = 100;
var mentalityJona = 60;
var patienceJona = 15;
var weightJona = 70;

// Adam - pati
var nameAdam = "adam";
var powerAdam = 15;
var intelligenceAdam = 75;
var MobilityAdam = 45;
var mentalityAdam = 45;
var patienceAdam = 100;
var weightAdam = 30;
// player vars ------------------------------------------------------------------

// må skrives med ("x")
function getPlayerInfoOnScreen (player) {
    if (player == "fredrik") {
        document.getElementById("stat1").innerHTML = "Power: " + powerFredrik ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceFredrik ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityFredrik ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityFredrik ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceFredrik ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightFredrik ;
        document.getElementById("inforHeader").innerHTML = "Fredrik";
        document.getElementById("qoute").innerHTML = "«Okay, hvis ikke du stopper nå så violater jeg rompehullet ditt» -Fredrik 14/9/2019";
    }
    if (player == "lukas") {
        document.getElementById("stat1").innerHTML = "Power: " + powerLukas ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceLukas ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityLukas ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityLukas ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceLukas ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightLukas ;
        document.getElementById("inforHeader").innerHTML = "Lukas";
        document.getElementById("qoute").innerHTML = "«Det var det jeg TENKTE meg, FUckings løp!» -Lukas 06.10.2019";
    }
    if (player == "jaison") {
        document.getElementById("stat1").innerHTML = "Power: " + powerJaison ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceJaison ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityJaison ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityJaison ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceJaison ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightJaison ;
        document.getElementById("inforHeader").innerHTML = "Jaison";
        document.getElementById("qoute").innerHTML = "«Stfu phaggot» - Jasion";
    }
    if (player == "mathias") {
        document.getElementById("stat1").innerHTML = "Power: " + powerMathias ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceMathias ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityMathias ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityMathias ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceMathias ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightMathias ;
        document.getElementById("inforHeader").innerHTML = "Mathias";
        document.getElementById("qoute").innerHTML = "«Well technically, even though only making up 13 percent of the population...» -Mathias";
    }
    if (player == "ola") {
        document.getElementById("stat1").innerHTML = "Power: " + powerOla ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceOla ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityOla ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityOla ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceOla ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightOla ;
        document.getElementById("inforHeader").innerHTML = "Ola";
        document.getElementById("qoute").innerHTML = "«Ola» -Ola";
    }
    if (player == "sipan") {
        document.getElementById("stat1").innerHTML = "Power: " + powerSipan ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceSipan ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilitySipan ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalitySipan ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceSipan ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightSipan ;
        document.getElementById("inforHeader").innerHTML = "Sipan";
        document.getElementById("qoute").innerHTML = "Grunnen til menn liker pupper er fordi de reproduserer -Sipan 20/9/2019";
    }
    if (player == "david") {
        document.getElementById("stat1").innerHTML = "Power: " + powerDavid ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceDavid ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityDavid ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityDavid ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceDavid ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightDavid ;
        document.getElementById("inforHeader").innerHTML = "David";
        document.getElementById("qoute").innerHTML = "";
    }
    if (player == "jona") {
        document.getElementById("stat1").innerHTML = "Power: " + powerJona ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceJona ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityJona ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityJona ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceJona ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightJona ;
        document.getElementById("inforHeader").innerHTML = "Jona";
        document.getElementById("qoute").innerHTML = "";
    }
    if (player == "adam") {
        document.getElementById("stat1").innerHTML = "Power: " + powerAdam ;
        document.getElementById("stat2").innerHTML = "Intelligence: " + intelligenceAdam ;
        document.getElementById("stat3").innerHTML = "Mobilety: " + MobilityAdam ;
        document.getElementById("stat4").innerHTML = "Mentality: " + mentalityAdam ;
        document.getElementById("stat5").innerHTML = "Patience: " + patienceAdam ;
        document.getElementById("stat6").innerHTML = "Weight: " + weightAdam ;
        document.getElementById("inforHeader").innerHTML = "Adam";
        document.getElementById("qoute").innerHTML = "«HVORFOR ER DU IKKE INNI MEG!» -Adam";
    }
}

function x1 () {
    getPlayerInfoOnScreen("fredrik");
}
function x2 () {
    getPlayerInfoOnScreen("lukas");
}
function x3 () {
    getPlayerInfoOnScreen("jaison");
}
function x4 () {
    getPlayerInfoOnScreen("mathias");
}
function x5 () {
    getPlayerInfoOnScreen("ola");
}
function x6 () {
    getPlayerInfoOnScreen("sipan");
}
function x7 () {
    getPlayerInfoOnScreen("david");
}
function x8 () {
    getPlayerInfoOnScreen("jona");
}
function x9 () {
    getPlayerInfoOnScreen("adam");
}

function playerOneThingy (ooo) {
  if (ooo == "fredrik") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "fredrik";
  }
  if (ooo == "lukas") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "lukas";
  }
  if (ooo == "jaison") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "jaison";
  }
  if (ooo == "mathias") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "mathias";
  }
  if (ooo == "ola") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "ola";
  }
  if (ooo == "sipan") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "sipan";
  }
  if (ooo == "david") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "david";
  }
  if (ooo == "jona") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "jona";
  }
  if (ooo == "adam") {
      document.getElementById("firstPlayerSelection").innerHTML = "Player 1: " + ooo;
      playerOne = "adam";
  }
}

function playerTwoThingy (uuu) {
    if (uuu == "fredrik" && uuu != playerOne) {
        playerTwo = "fredrik";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "lukas" && uuu != playerOne) {
        playerTwo = "lukas";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "jaison" && uuu != playerOne) {
        playerTwo = "jaison";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "mathias" && uuu != playerOne) {
        playerTwo = "mathias";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "ola" && uuu != playerOne) {
        playerTwo = "ola";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "sipan" && uuu != playerOne) {
        playerTwo = "sipan";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "david" && uuu != playerOne) {
        playerTwo = "david";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "jona" && uuu != playerOne) {
        playerTwo = "jona";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
    if (uuu == "adam" && uuu != playerOne) {
        playerTwo = "adam";
        document.getElementById("secondPlayerSelectoion").innerHTML = "Player 2: " + uuu;
    } else {
    }
}

function characterSelectioChooser (yyyy) {
    if (selectionProces == true) {
        playerOneThingy(yyyy);
        selectionProces = false;
    }
    if (selectionProces == false) {
        playerTwoThingy(yyyy);
        console.log(playerOne + "_" + playerTwo);
    }
}

function showOrHideDiv(TheDiv) {
  var xy = document.getElementById(TheDiv);
  if (xy.style.display === "none") {
    xy.style.display = "block";
  } else {
    xy.style.display = "none";
  }
}

function startTheMatch () {
    if (playerOne != "") {
        if (playerTwo != "") {
            showOrHideDiv("selector");
            startingMatch();
        }
    } 
}

function startingMatch () {
    showOrHideDiv("loadingBox");
    setTimeout(function () {
        // game starting in 3.2 sec
        showOrHideDiv("loadingBox");
        showOrHideDiv("fightingBox");
        document.getElementById("headder").style.fontSize = "90px";
        gameImageSelectorAndGamevarsImputs(playerOne, playerTwo);
        showTheButts();
    }, loadingTimeFirstMS)
}

function getPlayersOnScreen () {
    var imgimg = document.createElement("IMG");
    imgimg.setAttribute("src", "/pictures/testtet.png");
}
 
function removeOrgenizeAndProcastenate () {
    //this is how great i am at coding muahahahahhah, ezz game. O_O
    showOrHideDiv("imgPlayerOne1");
    showOrHideDiv("imgPlayerOne2");
    showOrHideDiv("imgPlayerOne3");
    showOrHideDiv("imgPlayerOne4");
    showOrHideDiv("imgPlayerOne5");
    showOrHideDiv("imgPlayerOne6");
    showOrHideDiv("imgPlayerOne7");
    showOrHideDiv("imgPlayerOne8");
    showOrHideDiv("imgPlayerOne9");
    // and
    showOrHideDiv("imgPlayerTwo1");
    showOrHideDiv("imgPlayerTwo2");
    showOrHideDiv("imgPlayerTwo3");
    showOrHideDiv("imgPlayerTwo4");
    showOrHideDiv("imgPlayerTwo5");
    showOrHideDiv("imgPlayerTwo6");
    showOrHideDiv("imgPlayerTwo7");
    showOrHideDiv("imgPlayerTwo8");
    showOrHideDiv("imgPlayerTwo9");
}

function gameImageSelectorAndGamevarsImputs (p1, p2) {
    if (p1 == nameFredrik) {
        showOrHideDiv("imgPlayerOne1");
        p1Name = nameFredrik;
        p1Power = powerLukas;
        p1Intelligence = intelligenceFredrik;
        p1Mobility = MobilityFredrik;
        p1Mentality = mentalityFredrik;
        p1Patience = patienceFredrik;
        p1Weight = weightFredrik;
    }
    if (p1 == nameLukas) {
        showOrHideDiv("imgPlayerOne2");
        p1Name = nameLukas;
        p1Power = powerLukas;
        p1Intelligence = intelligenceLukas;
        p1Mobility = MobilityLukas;
        p1Mentality = mentalityLukas;
        p1Patience = patienceLukas;
        p1Weight = weightLukas;
    }
    if (p1 == nameJaison) {
        showOrHideDiv("imgPlayerOne3");
        p1Name = nameJaison;
        p1Power = powerJaison;
        p1Intelligence = intelligenceJaison;
        p1Mobility = MobilityJaison;
        p1Mentality = mentalityJaison;
        p1Patience = patienceJaison;
        p1Weight = weightJaison;
    }
    if (p1 == nameMathias) {
        showOrHideDiv("imgPlayerOne4");
        p1Name = nameMathias;
        p1Power = powerMathias;
        p1Intelligence = intelligenceMathias;
        p1Mobility = MobilityMathias;
        p1Mentality = mentalityMathias;
        p1Patience = patienceMathias;
        p1Weight = weightMathias;
    }
    if (p1 == nameOla) {
        showOrHideDiv("imgPlayerOne5");
        p1Name = nameOla;
        p1Power = powerOla;
        p1Intelligence = intelligenceOla;
        p1Mobility = MobilityOla;
        p1Mentality = mentalityOla;
        p1Patience = patienceOla;
        p1Weight = weightOla;
    }
    if (p1 == nameSipan) {
        showOrHideDiv("imgPlayerOne6");
        p1Name = nameSipan;
        p1Power = powerSipan;
        p1Intelligence = intelligenceSipan;
        p1Mobility = MobilitySipan;
        p1Mentality = mentalitySipan;
        p1Patience = patienceSipan;
        p1Weight = weightSipan;
    }
    if (p1 == nameDavid) {
        showOrHideDiv("imgPlayerOne7");
        p1Name = nameDavid;
        p1Power = powerDavid;
        p1Intelligence = intelligenceDavid;
        p1Mobility = MobilityDavid;
        p1Mentality = mentalityDavid;
        p1Patience = patienceDavid;
        p1Weight = weightDavid; 
    }
    if (p1 == nameJona) {
        showOrHideDiv("imgPlayerOne8");
        p1Name = nameJona;
        p1Power = powerJona;
        p1Intelligence = intelligenceJona;
        p1Mobility = MobilityJona;
        p1Mentality = mentalityJona;
        p1Patience = patienceJona;
        p1Weight = weightJona;
    }
    if (p1 == nameAdam) {
        showOrHideDiv("imgPlayerOne9");
        p1Name = nameAdam;
        p1Power = powerAdam;
        p1Intelligence = intelligenceAdam;
        p1Mobility = MobilityAdam;
        p1Mentality = mentalityAdam;
        p1Patience = patienceAdam;
        p1Weight = weightAdam;
    }
    console.log("[PLAYER 1]: " + " Name: " + p1Name + " | Power: " + p1Power + " | Intelligence: " + p1Intelligence + " | Mobility: " + p1Mobility + " | Mentality: " + p1Mentality + " | Patience: " + p1Patience + " | Weight: " + p1Weight);
        // And
    if (p2 == nameFredrik) {
        showOrHideDiv("imgPlayerTwo1");
        p2Name = nameFredrik;
        p2Power = powerLukas;
        p2Intelligence = intelligenceFredrik;
        p2Mobility = MobilityFredrik;
        p2Mentality = mentalityFredrik;
        p2Patience = patienceFredrik;
        p2Weight = weightFredrik;
    }
    if (p2 == nameLukas) {
        showOrHideDiv("imgPlayerTwo2");
        p2Name = nameLukas;
        p2Power = powerLukas;
        p2Intelligence = intelligenceLukas;
        p2Mobility = MobilityLukas;
        p2Mentality = mentalityLukas;
        p2Patience = patienceLukas;
        p2Weight = weightLukas;
    }
    if (p2 == nameJaison) {
        showOrHideDiv("imgPlayerTwo3");
        p2Name = nameJaison;
        p2Power = powerJaison;
        p2Intelligence = intelligenceJaison;
        p2Mobility = MobilityJaison;
        p2Mentality = mentalityJaison;
        p2Patience = patienceJaison;
        p2Weight = weightJaison;
    }
    if (p2 == nameMathias) {
        showOrHideDiv("imgPlayerTwo4");
        p2Name = nameMathias;
        p2Power = powerMathias;
        p2Intelligence = intelligenceMathias;
        p2Mobility = MobilityMathias;
        p2Mentality = mentalityMathias;
        p2Patience = patienceMathias;
        p2Weight = weightMathias;
    }
    if (p2 == nameOla) {
        showOrHideDiv("imgPlayerTwo5");
        p2Name = nameOla;
        p2Power = powerOla;
        p2Intelligence = intelligenceOla;
        p2Mobility = MobilityOla;
        p2Mentality = mentalityOla;
        p2Patience = patienceOla;
        p2Weight = weightOla;
    }
    if (p2 == nameSipan) {
        showOrHideDiv("imgPlayerTwo6");
        p2Name = nameSipan;
        p2Power = powerSipan;
        p2Intelligence = intelligenceSipan;
        p2Mobility = MobilitySipan;
        p2Mentality = mentalitySipan;
        p2Patience = patienceSipan;
        p2Weight = weightSipan;
    }
    if (p2 == nameDavid) {
        showOrHideDiv("imgPlayerTwo7");
        p2Name = nameDavid;
        p2Power = powerDavid;
        p2Intelligence = intelligenceDavid;
        p2Mobility = MobilityDavid;
        p2Mentality = mentalityDavid;
        p2Patience = patienceDavid;
        p2Weight = weightDavid; 
    }
    if (p2 == nameJona) {
        showOrHideDiv("imgPlayerTwo8");
        p2Name = nameJona;
        p2Power = powerJona;
        p2Intelligence = intelligenceJona;
        p2Mobility = MobilityJona;
        p2Mentality = mentalityJona;
        p2Patience = patienceJona;
        p2Weight = weightJona;
    }
    if (p2 == nameAdam) {
        showOrHideDiv("imgPlayerTwo9");
        p2Name = nameAdam;
        p2Power = powerAdam;
        p2Intelligence = intelligenceAdam;
        p2Mobility = MobilityAdam;
        p2Mentality = mentalityAdam;
        p2Patience = patienceAdam;
        p2Weight = weightAdam;
    }
    console.log("[PLAYER 2]: " + " Name: " + p2Name + " | Power: " + p2Power + " | Intelligence: " + p2Intelligence + " | Mobility: " + p2Mobility + " | Mentality: " + p2Mentality + " | Patience: " + p2Patience + " | Weight: " + p2Weight);
}



//      *   GAME BALANCE   *
//  Each attack type has a counter, that will determen 
//  how much how much the attack will damage by using
//  "blockSk#".
//
//      *   Attack type --> attack counter   *
// - Power          -->     Weight
// - Intelligence   -->     Mentality
// - Mobility       -->     Patience
//



function test() {
    alert("gay");
}

function p1TurnFunction (attackType) {
    
    // ADD DAMAGE REDUCTION SOON TM

    if (attackType == "power") {

        // Damage part
        var crit1DamageP1 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d1amageP1 = 0.57 * p1Power + 27 + crit1DamageP1;

        // Defence part 
        var bloclAmoundt1 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockSk1 = 0.40 * p2Weight + 20 + bloclAmoundt1;
        
        p2HP = p2HP - d1amageP1 + blockSk1;
        showThenHideDamageAndBlock(d1amageP1, blockSk1, true);     
    }
    if (attackType == "intelligence") {
        var crit2DamageP1 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d2amgeP1 = 0.57 * p1Intelligence + 27 + crit2DamageP1;

        var blockAmound2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockSk2 = 0.40 * p2Mentality + 20 + blockAmound2;

        p2HP = p2HP - d2amgeP1 + blockSk2;
        showThenHideDamageAndBlock(d2amgeP1, blockSk2, true);
    }
    if (attackType == "mobility") {
        var crit3DamageP1 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d3amgeP1 = 0.57 * p1Mobility + 27 + crit3DamageP1;

        var blockAmound3 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockSk3 = 0.40 * p2Patience + 20 + blockAmound3;

        p2HP = p2HP - d3amgeP1 + blockSk3;
        showThenHideDamageAndBlock(d3amgeP1, blockSk3, true);
    }
}

function p2TurnFuncton (attackType) {
    if (attackType == "power") {

        var crit1DamageP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d1amageP2 = 0.57 * p2Power + 27 + crit1DamageP2;

        var block1AmoundP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockP2Sk1 = 0.40 * p1Weight + 20 + block1AmoundP2;

        p1HP = p1HP - d1amageP2 + blockP2Sk1;
        showThenHideDamageAndBlock(d1amageP2, blockP2Sk1, false);
    }
    if (attackType == "intelligence") {
        var crit2DamageP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d2amageP2 = 0.57 * p2Intelligence + 27 + crit2DamageP2;

        var block2AmoundP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockP2Sk2 = 0.40 * p1Mentality + 20 + block2AmoundP2;

        p1HP = p1HP - d2amageP2 + blockP2Sk2;
        showThenHideDamageAndBlock(d2amageP2, blockP2Sk2, false);
    }
    if (attackType == "mobility") {
        var crit3DamageP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var d3amageP2 = 0.57 * p2Mobility + 27 + crit3DamageP2;

        var block3AmoundP2 = (Math.random() * (1.6 - 1 + 1) + 1) * 10 - 10;
        var blockP2Sk3 = 0.40 * p1Patience + 20 + block3AmoundP2;

        p1HP = p1HP - d3amageP2 + blockP2Sk3;
        showThenHideDamageAndBlock(d3amageP2, blockP2Sk3, false);
    }
}

setInterval(function () {

    // PLAYER ONE
    document.getElementById("P1Nameheader").innerHTML = p1Name.charAt(0).toUpperCase() + p1Name.slice(1);
    document.getElementById("p1HealtDiv").innerHTML = "HP: " + Math.floor(p1HP);
    
    // PLAYER TWO
    document.getElementById("p2Nameheader").innerHTML = p2Name.charAt(0).toUpperCase() + p2Name.slice(1);
    document.getElementById("p2HealtDiv").innerHTML = "HP: " + Math.floor(p2HP);
},1)

function showTheButts () {
    document.getElementById("p1PowerButton").innerHTML = "POWER ATTACK";
    document.getElementById("p1IntelligenceButton").innerHTML = "INTELLIGENCE ATTACK";
    document.getElementById("p1MobilityButton").innerHTML = "MOBILITY ATTACK";

    document.getElementById("p2PowerButton").innerHTML = "POWER ATTACK";
    document.getElementById("p2IntelligenceButton").innerHTML = "INTELLIGENCE ATTACK";
    document.getElementById("p2MobilityButton").innerHTML = "MOBILITY ATTACK";
}

function showThenHideDamageAndBlock (damageOrBlockP1, damageOrBlockP2, playerToShow) {
    // playerToShow --> if (true)  == playerone is green
    //                  if (false) == playerone is red
    var showTime = 40000;
    // 4 sec

    if (playerToShow == true) {
        document.getElementById("damageAndBlockP1").innerHTML = Math.floor(damageOrBlockP1) + " Damage ->";
        document.getElementById("damageAndBlockP1").style.color = "#70a288";
        document.getElementById("damageAndBlockP2").innerHTML = Math.floor(damageOrBlockP2) + " Damage Blocked";
        document.getElementById("damageAndBlockP2").style.color = "#d7d528";

        document.getElementById("cobinedDamageDoneDiv").innerHTML = Math.floor(damageOrBlockP1 - damageOrBlockP2) + " Combined Damage";

        setTimeout( function () {
            document.getElementById("damageAndBlockP1").innerHTML = "";
            document.getElementById("damageAndBlockP1").style.color = "Black";
            document.getElementById("damageAndBlockP2").innerHTML = "";
            document.getElementById("damageAndBlockP2").style.color = "Black";

            document.getElementById("cobinedDamageDoneDiv").innerHTML = "";

        }, showTime);
    }

    if (playerToShow == false) {
        document.getElementById("damageAndBlockP2").innerHTML = " <- " + Math.floor(damageOrBlockP1) + " Damage";
        document.getElementById("damageAndBlockP2").style.color = "#70a288";
        document.getElementById("damageAndBlockP1").innerHTML = Math.floor(damageOrBlockP2) + " Damage Blocked";
        document.getElementById("damageAndBlockP1").style.color = "#d7d528";
        document.getElementById("cobinedDamageDoneDiv").innerHTML = Math.floor(damageOrBlockP1 - damageOrBlockP2) + " Combined Damage";

        setTimeout( function () {
            document.getElementById("damageAndBlockP2").innerHTML = "";
            document.getElementById("damageAndBlockP2").style.color = "Black";
            document.getElementById("damageAndBlockP1").innerHTML = "";
            document.getElementById("damageAndBlockP1").style.color = "Black";
            document.getElementById("cobinedDamageDoneDiv").innerHTML = "";

        }, showTime);
    }
}




function switchBetweenPlayersAndDoAttack (attackTypeP, champ) {
    // ~ PlayerTurn
    // true = p1 turn
    // false = p2 turn

    //  var xxx = "xxx"; // player One
    //  var yyy = "yyy"; // player two

    if (playerTurn == true && champ == "xxx"){
        if (attackTypeP == typePower){
            p1TurnFunction(typePower);
            if (p2HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p2HP = 0;
            }
            playerTurn = false;
        }
        if (attackTypeP == typeIntelligence) {
            p1TurnFunction(typeIntelligence);
            if (p2HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p2HP = 0;
            }
            playerTurn = false;
        }
        if (attackTypeP == typeMobility) {
            p1TurnFunction(typeMobility);
            if (p2HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p2HP = 0;
            }
            playerTurn = false;
        }
    }
    if (playerTurn == false && champ == "yyy") {
        if (attackTypeP == typePower) {
            p2TurnFuncton(attackTypeP);
            if (p1HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p1HP = 0;
            }
            playerTurn = true;
        }
        if (attackTypeP == typeIntelligence) {
            p2TurnFuncton(attackTypeP);
            if (p1HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p1HP = 0;
            }
            playerTurn = true;
        }
        if (attackTypeP == typeMobility) {
            p2TurnFuncton(attackTypeP);
            if (p1HP <= 0) {
                congratsToTheWinner(p1Name, p2Name);
                p1HP = 0;
            }
            playerTurn = true;
        }
    }
}
// Player One
function toMakeThisFackingWorkP1Power () {
    switchBetweenPlayersAndDoAttack(typePower, xxx);
    document.getElementById("whosTurnDiv").innerHTML = p2Name.charAt(0).toUpperCase() + p2Name.slice(1) + "'s Turn";
} 
function toMakeThisFackingWorkP1Int () {
    switchBetweenPlayersAndDoAttack(typeIntelligence, xxx);
    document.getElementById("whosTurnDiv").innerHTML = p2Name.charAt(0).toUpperCase() + p2Name.slice(1) + "'s Turn";
} 
function toMakeThisFackingWorkP1Mob () {
    switchBetweenPlayersAndDoAttack(typeMobility, xxx);
    document.getElementById("whosTurnDiv").innerHTML = p2Name.charAt(0).toUpperCase() + p2Name.slice(1) + "'s Turn";
} 
// PLayer Two
function toMakeThisFackingWorkP2Power () {
    switchBetweenPlayersAndDoAttack(typePower, yyy);
    document.getElementById("whosTurnDiv").innerHTML = p1Name.charAt(0).toUpperCase() + p1Name.slice(1) + "'s Turn";
} 
function toMakeThisFackingWorkP2Int () {
    switchBetweenPlayersAndDoAttack(typeIntelligence, yyy);
    document.getElementById("whosTurnDiv").innerHTML = p1Name.charAt(0).toUpperCase() + p1Name.slice(1) + "'s Turn";
} 
function toMakeThisFackingWorkP2Mob () {
    switchBetweenPlayersAndDoAttack(typeMobility, yyy);
    document.getElementById("whosTurnDiv").innerHTML = p1Name.charAt(0).toUpperCase() + p1Name.slice(1) + "'s Turn";
} 

function congratsToTheWinner (winner, looser) {
    alert(winner + " is the winner, and " + looser + " is the looser.")
}


// når en player gainer HP skriv F.Eks  "fredrik ego is to high for that attack"

showOrHideDiv("loadingBox");
showOrHideDiv("fightingBox");
removeOrgenizeAndProcastenate();
















