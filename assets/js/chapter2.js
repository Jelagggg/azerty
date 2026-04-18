window.oChapterData = {
  oChapterTitle: {
    FR: "Chapitre II - Cendres de la Longère",
    ENG: "Chapter II - Ashes of the Longhouse",
    JAP: "第2章 - ロングハウスの灰",
    CH: "第二章 - 长屋的灰烬",
    SWISSE: "Chapitre II - Cendres de la Longère"
  },
  sStartNodeId: "nodeCapturedHall",
  oNodes: {
    nodeCapturedHall: {
      oText: {
        FR: "La salle capturée pue la poix et la peur. Les capitaines Jarnclaw préparent un départ nocturne pendant que leur prêtre forge de la fumée runique pour enchaîner votre peuple.",
        ENG: "The captured hall reeks of pitch and fear. Jarnclaw captains prepare a midnight sail while their war-priest forges rune smoke into chains around your people.",
        JAP: "捕らえられた広間は松脂と恐怖の悪臭がする。ヤルンクロウの船長たちが夜中の出航を準備する中、戦の神官がルーンの煙を鎖に変えている。",
        CH: "被占领的大厅散发着沥青和恐惧的恶臭。铁爪船长们准备在午夜启航，而他们的战僧则将符文烟雾铸成锁链束缚你的人民。",
        SWISSE: "La salle sent le roussi et la peur. Les Jarnclaw se préparent à partir pendant que leur prêtre fait des chaînes avec de la fumée."
      },
      aChoices: [
        {
          oLabel: { FR: "Défier le capitaine en duel", ENG: "Duel the gate captain", JAP: "門の隊長に決闘を挑む", CH: "与大门守将决斗", SWISSE: "Se battre avec le capitaine" },
          sTargetNodeId: "nodeGateDuel"
        },
        {
          oLabel: { FR: "Se faufiler par les fosses à fumée", ENG: "Sneak through the smoke pits", JAP: "煙の穴をこっそり通り抜ける", CH: "潜行穿过烟坑", SWISSE: "Passer par les trous à fumée en cachette" },
          sTargetNodeId: "nodeSmokePits"
        }
      ]
    },
    nodeGateDuel: {
      oText: {
        FR: "Votre hache résonne contre le fer lors d'un duel brutal. Le capitaine tombe, mais le prêtre s'échappe vers le sanctuaire de la falaise avec le fragment.",
        ENG: "Your axe rings against iron in a hard duel. The captain falls, but the war-priest escapes toward the cliff shrine with the Ember shard.",
        JAP: "激しい決闘で斧が鉄とぶつかり合う。隊長は倒れたが、戦の神官はエンバーの欠片を持って崖の祠へ逃げた。",
        CH: "在一场艰难的决斗中，你的战斧与钢铁碰撞出火花。守将倒下了，但战僧带着余烬碎片逃向了悬崖神龛。",
        SWISSE: "Ta hache tape fort contre le fer. Le capitaine tombe, mais le prêtre se tire vers la falaise avec le bout de braise."
      },
      aChoices: [
        {
          oLabel: { FR: "Poursuivre le prêtre de guerre", ENG: "Pursue the war-priest", JAP: "戦の神官を追う", CH: "追捕战僧", SWISSE: "Courir après le prêtre" },
          sTargetNodeId: "nodeCliffDecision"
        },
        {
          oLabel: { FR: "Stabiliser les blessés d'abord", ENG: "Stabilize the wounded first", JAP: "先に負傷者を安定させる", CH: "先稳住伤员", SWISSE: "S'occuper des blessés d'abord" },
          sTargetNodeId: "nodeWoundedDelay"
        }
      ]
    },
    nodeSmokePits: {
      oText: {
        FR: "En rampant sous les cages de fumée, vous libérez trois éclaireurs qui révèlent un chemin caché vers le sanctuaire. Ils préviennent que le prêtre le garde avec une épreuve runique.",
        ENG: "Crawling beneath smoke cages, you free three scouts who reveal a hidden path to the cliff shrine. They warn the priest guards it with a rune trial.",
        JAP: "煙の檻の下を這い進み、3人の斥候を解放した。彼らは崖の祠への隠し道を教え、神官がルーンの試練でそこを守っていると警告した。",
        CH: "在烟笼下爬行时，你解救了三名斥候，他们揭示了一条通往悬崖神龛的隐秘小路。他们警告说，战僧用符文试炼守卫着那里。",
        SWISSE: "En rampant dans la fumée, tu libères trois gars qui te montrent un chemin planqué. Ils disent que le prêtre garde la place avec un truc de runes."
      },
      aChoices: [
        {
          oLabel: { FR: "Tenter l'épreuve des runes", ENG: "Attempt the rune trial", JAP: "ルーンの試練に挑む", CH: "尝试符文试炼", SWISSE: "Essayer l'épreuve des runes" },
          sNextPage: "minigame.html"
        },
        {
          oLabel: { FR: "Mener un assaut direct", ENG: "Lead a direct assault", JAP: "直接の強襲を指揮する", CH: "领导正面突击", SWISSE: "Attaquer de front" },
          sTargetNodeId: "nodeCliffDecision"
        }
      ]
    },
    nodeWoundedDelay: {
      oText: {
        FR: "Vous sauvez des vies, gagnant une loyauté farouche. Le prêtre prend de l'avance, mais vos éclaireurs fixent des cordes sur la falaise avant l'aube.",
        ENG: "You save lives, earning fierce loyalty. The war-priest gains distance, yet your scouts secure ropes up the shrine cliff before dawn breaks.",
        JAP: "命を救い、激しい忠誠を得る。神官は距離を稼ぐが、夜明け前に斥候が祠の崖にロープを固定した。",
        CH: "你拯救了生命，赢得了极度的忠诚。战僧拉开了距离，但你的斥候在黎明前将绳索固定在了悬崖神龛上。",
        SWISSE: "Tu sauves des vies, c'est bien. Le prêtre s'éloigne, mais tes gars mettent des cordes sur la falaise avant l'aube."
      },
      aChoices: [
        {
          oLabel: { FR: "Grimper au sanctuaire", ENG: "Climb to the shrine", JAP: "祠へ登る", CH: "爬向神龛", SWISSE: "Monter au sanctuaire" },
          sTargetNodeId: "nodeCliffDecision"
        },
        {
          oLabel: { FR: "Tenter l'épreuve des runes d'abord", ENG: "Attempt the rune trial first", JAP: "先にルーンの試練に挑む", CH: "先尝试符文试炼", SWISSE: "Faire le jeu des runes avant" },
          sNextPage: "minigame.html"
        }
      ]
    },
    nodeCliffDecision: {
      oText: {
        FR: "Au sanctuaire, des cloches de fer tonnent alors que le prêtre commence le rite de la braise. Une frappe nette peut l'achever, mais une erreur pourrait briser la rune.",
        ENG: "At the cliff shrine, iron bells thunder as the priest begins the ember rite. One clean strike can end him, but a failed move could shatter the rune forever.",
        JAP: "崖の祠で、神官がエンバーの儀式を始めると鉄の鐘が鳴り響く。一撃で彼を終わらせることができるが、失敗すればルーンが永遠に砕け散るかもしれない。",
        CH: "在悬崖神龛处，当战僧开始余烬仪式时，铁钟如雷鸣般响起。干净利落的一击可以终结他，但一次失误可能会让符文永远粉碎。",
        SWISSE: "En haut, les cloches sonnent fort pendant le rite. Un bon coup et c'est fini, mais faut pas se louper sinon la rune est foutue."
      },
      aChoices: [
        {
          oLabel: { FR: "Avancer au Chapitre III", ENG: "Advance to Chapter III", JAP: "第3章へ進む", CH: "进入第三章", SWISSE: "Passer au Chapitre III" },
          sNextPage: "chapter3.html"
        },
        {
          oLabel: { FR: "Essayer le minijeu des runes", ENG: "Try the rune trial minigame", JAP: "ルーンの試練ミニゲームを試す", CH: "尝试符文试炼小游戏", SWISSE: "Faire le minijeu des runes" },
          sNextPage: "minigame.html"
        }
      ]
    }
  }
};