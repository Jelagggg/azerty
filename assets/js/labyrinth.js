(() => {
  const nGridSize = 15;
  const eLabyrinthBoard = document.getElementById("idLabyrinthBoard");
  const eGameStatus = document.getElementById("idGameStatus");
  const eChapterReturnLink = document.getElementById("idChapterReturnLink");

  // 1 = Wall, 0 = Path, 2 = Exit
  const aMazeMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  let oPlayerPos = { x: 1, y: 1 };
  let bGameWon = false;

  function fnGetText(oObj) {
    const sLang = window.fnGetLanguage ? window.fnGetLanguage() : "FR";
    return oObj[sLang] || oObj["FR"];
  }

  const oTexts = {
    victory: {
      FR: "Vous vous êtes échappé du labyrinthe !",
      ENG: "You have escaped the labyrinth!",
      JAP: "迷宮から脱出しました！",
      CH: "你逃出了迷宫！",
      SWISSE: "T'es sorti du labyrinthe !"
    }
  };

  function fnBuildMaze() {
    eLabyrinthBoard.style.gridTemplateColumns = `repeat(${nGridSize}, 1fr)`;
    eLabyrinthBoard.innerHTML = "";

    for (let y = 0; y < nGridSize; y++) {
      for (let x = 0; x < nGridSize; x++) {
        const eCell = document.createElement("div");
        eCell.className = "v-cell";
        eCell.id = `cell-${x}-${y}`;

        if (aMazeMap[y][x] === 1) {
          eCell.classList.add("is-wall");
        } else if (aMazeMap[y][x] === 2) {
          eCell.classList.add("is-exit");
        }

        eLabyrinthBoard.appendChild(eCell);
      }
    }
    fnUpdatePlayerPosition();
  }

  function fnUpdatePlayerPosition() {
    document.querySelectorAll(".v-cell.is-player").forEach(cell => cell.classList.remove("is-player"));
    const eCurrentCell = document.getElementById(`cell-${oPlayerPos.x}-${oPlayerPos.y}`);
    if (eCurrentCell) {
      eCurrentCell.classList.add("is-player");
    }
  }

  function fnHandleMovement(oEvent) {
    if (bGameWon) return;

    const sKey = oEvent.key.toLowerCase();
    let nNewX = oPlayerPos.x;
    let nNewY = oPlayerPos.y;

    if (sKey === "w" || sKey === "arrowup") nNewY -= 1;
    else if (sKey === "s" || sKey === "arrowdown") nNewY += 1;
    else if (sKey === "a" || sKey === "arrowleft") nNewX -= 1;
    else if (sKey === "d" || sKey === "arrowright") nNewX += 1;
    else return; 

    if (aMazeMap[nNewY] && aMazeMap[nNewY][nNewX] !== undefined) {
      const nTargetCell = aMazeMap[nNewY][nNewX];
      
      if (nTargetCell !== 1) { 
        oPlayerPos.x = nNewX;
        oPlayerPos.y = nNewY;
        fnUpdatePlayerPosition();

        if (nTargetCell === 2) {
          bGameWon = true;
          eGameStatus.textContent = fnGetText(oTexts.victory);
          eGameStatus.style.color = "var(--clr-exit)";
          eChapterReturnLink.style.visibility = "visible";
        }
      }
    }
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
    if (!eLabyrinthBoard) return;
    
    fnBuildMaze();
    document.addEventListener("keydown", fnHandleMovement);
    fnSetupLinkTransitions();
  });
})();