(() => {
  const aRuneLabels = ["FEHU", "URUZ", "ANSUZ", "RAIDO"];
  const nRoundLength = 4;

  const eRuneBoard = document.getElementById("idRuneBoard");
  const eGameStatus = document.getElementById("idGameStatus");
  const eStartRoundButton = document.getElementById("idStartRoundButton");
  const eChapterReturnLink = document.getElementById("idChapterReturnLink");

  let aTargetSequence = [];
  let aPlayerSequence = [];
  let bAcceptInput = false;

  function fnBuildRuneButtons() {
    aRuneLabels.forEach((sRuneLabel, nRuneIndex) => {
      const eRuneButton = document.createElement("button");
      eRuneButton.className = "v-rune-button";
      eRuneButton.type = "button";
      eRuneButton.textContent = sRuneLabel;
      eRuneButton.addEventListener("click", () => fnHandleRuneInput(nRuneIndex, eRuneButton));
      eRuneBoard.appendChild(eRuneButton);
    });
  }

  function fnGetText(oObj) {
    const sLang = window.fnGetLanguage ? window.fnGetLanguage() : "FR";
    return oObj[sLang] || oObj["FR"];
  }

  const oTexts = {
    watch: {
      FR: "Observez attentivement...",
      ENG: "Watch closely...",
      JAP: "よく見て...",
      CH: "仔细观察...",
      SWISSE: "Regarde bien..."
    },
    repeat: {
      FR: "Répétez la séquence des runes.",
      ENG: "Repeat the rune sequence.",
      JAP: "ルーンのシーケンスを繰り返して。",
      CH: "重复符文序列。",
      SWISSE: "Répète le truc des runes."
    },
    fail: {
      FR: "Les runes rejettent votre écho. Recommencez.",
      ENG: "The runes reject your echo. Start the trial again.",
      JAP: "ルーンはあなたの反響を拒絶した。やり直せ。",
      CH: "符文拒绝了你的回应。重新开始试炼。",
      SWISSE: "C'est faux ! Recommence."
    },
    victory: {
      FR: "Victoire ! Le sanctuaire accepte votre serment. Le Chapitre III est ouvert.",
      ENG: "Victory! The shrine accepts your oath. Chapter III is open.",
      JAP: "勝利！祠はあなたの誓いを受け入れた。第3章が開かれる。",
      CH: "胜利！神龛接受了你的誓言。第三章开启。",
      SWISSE: "Victoire ! Le sanctuaire dit oui. Le Chapitre III est ouvert."
    }
  };

  function fnStartRound() {
    aTargetSequence = [];
    aPlayerSequence = [];
    bAcceptInput = false;
    eChapterReturnLink.style.visibility = "hidden";

    for (let nIndex = 0; nIndex < nRoundLength; nIndex += 1) {
      const nRandomIndex = Math.floor(Math.random() * aRuneLabels.length);
      aTargetSequence.push(nRandomIndex);
    }

    eGameStatus.textContent = fnGetText(oTexts.watch);
    fnPlaySequence();
  }

  function fnPlaySequence() {
    const aRuneButtons = [...document.querySelectorAll(".v-rune-button")];
    let nGlowStep = 0;

    const nSequenceTimer = window.setInterval(() => {
      aRuneButtons.forEach((eButton) => eButton.classList.remove("is-glow"));

      if (nGlowStep >= aTargetSequence.length) {
        window.clearInterval(nSequenceTimer);
        bAcceptInput = true;
        eGameStatus.textContent = fnGetText(oTexts.repeat);
        return;
      }

      const nRuneIndex = aTargetSequence[nGlowStep];
      aRuneButtons[nRuneIndex].classList.add("is-glow");
      nGlowStep += 1;
    }, 700);
  }

  function fnHandleRuneInput(nRuneIndex, eRuneButton) {
    if (!bAcceptInput) {
      return;
    }

    eRuneButton.classList.add("is-glow");
    window.setTimeout(() => eRuneButton.classList.remove("is-glow"), 260);

    aPlayerSequence.push(nRuneIndex);
    const nStepIndex = aPlayerSequence.length - 1;

    if (aPlayerSequence[nStepIndex] !== aTargetSequence[nStepIndex]) {
      bAcceptInput = false;
      eGameStatus.textContent = fnGetText(oTexts.fail);
      return;
    }

    if (aPlayerSequence.length === aTargetSequence.length) {
      bAcceptInput = false;
      eGameStatus.textContent = fnGetText(oTexts.victory);
      eChapterReturnLink.style.visibility = "visible";
    }
  }

  function fnInitializeMinigame() {
    if (!eRuneBoard || !eGameStatus || !eStartRoundButton || !eChapterReturnLink) {
      return;
    }

    fnBuildRuneButtons();
    eChapterReturnLink.style.visibility = "hidden";
    eStartRoundButton.addEventListener("click", fnStartRound);
  }

  function fnSetupLinkTransitions() {
    document.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (href && !href.startsWith("#")) {
          e.preventDefault();
          document.body.classList.add("is-exiting");
          setTimeout(() => {
            window.location.href = href;
          }, 400);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    fnInitializeMinigame();
    fnSetupLinkTransitions();
  });
})();
