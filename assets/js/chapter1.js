window.oChapterData = {
  oChapterTitle: {
    FR: "Chapitre I - Le Serment du Fjord",
    ENG: "Chapter I - The Oath by the Fjord",
    JAP: "第1章 - フィヨルドでの誓い",
    CH: "第一章 - 峡湾的誓言",
    SWISSE: "Chapitre I - Le Serment du Fjord"
  },
  sStartNodeId: "nodeFjordGate",
  oNodes: {
    nodeFjordGate: {
      oText: {
        FR: "La neige mord votre visage alors que le gothi du village place une rune calcinée dans votre paume. La Rune de Braise a été volée, et vous avez juré de la récupérer avant l'aube.",
        ENG: "Snow bites your face as the village gothi places a charred rune in your palm. The Ember Rune was stolen at moonrise, and your name is sworn to recover it before dawn.",
        JAP: "村の神官が焦げたルーンをあなたの手のひらに置くとき、雪が顔に噛みつく。エンバールーンは盗まれた。夜明けまでに取り戻すと誓った。",
        CH: "当村庄的祭司将一块烧焦的符文放在你掌心时，风雪刺痛了你的脸颊。余烬符文在月升时被盗，你发誓要在黎明前将其寻回。",
        SWISSE: "La neige pique la figure, alors que le gothi du village te donne une rune toute cramée. La Rune de Braise a été piquée, faut la retrouver avant l'aube, ça c'est sûr."
      },
      aChoices: [
        {
          oLabel: { FR: "Questionner la garde", ENG: "Question the night watch", JAP: "夜警に尋ねる", CH: "询问守夜人", SWISSE: "Demander au garde de nuit" },
          sTargetNodeId: "nodeNightWatch"
        },
        {
          oLabel: { FR: "Inspecter la longère brûlée", ENG: "Inspect the burned longhouse", JAP: "燃えたロングハウスを調べる", CH: "检查被烧毁的长屋", SWISSE: "Regarder la longère qui a pris feu" },
          sTargetNodeId: "nodeLonghouseAsh"
        }
      ]
    },
    nodeNightWatch: {
      oText: {
        FR: "Un garde tremblant admet avoir vu des bannières de loups traverser la crête nord. Il a aussi entendu des chants de fer venant des pierres levées.",
        ENG: "A shivering guard admits he saw wolf banners crossing the northern ridge. He also heard iron chanting from the old standing stones.",
        JAP: "震える番兵は、北の尾根を越える狼の旗を見たことを認めた。また、古い立石から鉄の詠唱を聞いた。",
        CH: "一名瑟瑟发抖的守卫承认他看到狼旗越过北方的山脊。他还听到古老的立石那里传来钢铁般的诵经声。",
        SWISSE: "Un garde qui caille avoue avoir vu des bannières de loups passer la crête. Il a aussi entendu du chenit vers les pierres levées."
      },
      aChoices: [
        {
          oLabel: { FR: "Chevaucher vers la crête", ENG: "Ride for the ridge", JAP: "尾根へ馬を走らせる", CH: "骑马前往山脊", SWISSE: "Aller fissa vers la crête" },
          sTargetNodeId: "nodeRidgePath"
        },
        {
          oLabel: { FR: "Suivre les chants d'abord", ENG: "Follow the chanting first", JAP: "先に詠唱を追う", CH: "先顺着诵经声去", SWISSE: "Aller voir ces chants d'abord" },
          sTargetNodeId: "nodeStonePath"
        }
      ]
    },
    nodeLonghouseAsh: {
      oText: {
        FR: "Parmi les poutres noires, vous trouvez un fermoir en bronze marqué du sceau du clan Jarnclaw. Des traces fraîches partent vers la crête où des corbeaux tournoient.",
        ENG: "Among black timbers, you find a bronze clasp marked with the Jarnclaw clan seal. Fresh tracks curve toward the ridge where ravens circle in silence.",
        JAP: "黒い木材の中に、ヤルンクロウ一族の紋章が刻まれた青銅の留め金を見つける。新鮮な足跡が尾根へ向かっている。",
        CH: "在漆黑的木梁中，你找到一个刻有铁爪氏族印记的青铜扣。新鲜的足迹蜿蜒通向乌鸦盘旋的山脊。",
        SWISSE: "Dans les bouts de bois tout noirs, tu trouves un truc en bronze du clan Jarnclaw. Y'a des traces fraîches qui montent vers la crête."
      },
      aChoices: [
        {
          oLabel: { FR: "Traquer les pilleurs", ENG: "Track the Jarnclaw raiders", JAP: "ヤルンクロウの略奪者を追跡する", CH: "追踪铁爪掠夺者", SWISSE: "Pister les pilleurs" },
          sTargetNodeId: "nodeRidgePath"
        },
        {
          oLabel: { FR: "Faire un rapport au conseil", ENG: "Report to the council", JAP: "評議会に報告する", CH: "向议会报告", SWISSE: "Aller dire ça au conseil" },
          sTargetNodeId: "nodeCouncilDelay"
        }
      ]
    },
    nodeCouncilDelay: {
      oText: {
        FR: "Le conseil débat d'honneur alors que la neige s'épaissit. Tout délai coûte du sang, et votre sœur vous presse de poursuivre immédiatement.",
        ENG: "The council debates honor while snow deepens and the rune grows colder in distant hands. Delay costs blood, and your sister urges immediate pursuit.",
        JAP: "雪が深まる中、評議会は名誉について議論している。遅れは血を代償とする。妹は即座の追跡を促す。",
        CH: "当雪越下越大时，议会却在争论荣誉。迟延将付出血的代价，你的妹妹催促你立刻追击。",
        SWISSE: "Le conseil jacasse pendant que la neige tombe. Attendre c'est la mort, ta sœur te dit de te bouger."
      },
      aChoices: [
        {
          oLabel: { FR: "Partir chasser les pilleurs", ENG: "Leave now and chase the raiders", JAP: "今すぐ略奪者を追う", CH: "立刻出发追击掠夺者", SWISSE: "Partir chasser les pilleurs, nom de bleu" },
          sTargetNodeId: "nodeRidgePath"
        },
        {
          oLabel: { FR: "Suivre votre sœur vers les pierres", ENG: "Follow your sister to the stones", JAP: "妹に従って石へ向かう", CH: "跟着妹妹去立石", SWISSE: "Suivre la frangine vers les pierres" },
          sTargetNodeId: "nodeStonePath"
        }
      ]
    },
    nodeStonePath: {
      oText: {
        FR: "Aux pierres levées, des runes gravées bourdonnent sous le givre. Une piste cachée pointe vers l'est, où s'élève la fumée d'une longère capturée.",
        ENG: "At the standing stones you hear carved runes hum under frost. A hidden trail points east, where smoke rises from a captured longhouse.",
        JAP: "立石で、霜の下でルーンがうなるのが聞こえる。隠された道が東を指している。",
        CH: "在立石处，你听到雕刻的符文在冰霜下发出嗡嗡声。一条隐秘的小路指向东方，那里升起被占领长屋的浓烟。",
        SWISSE: "Aux pierres levées, y'a un bruit bizarre sous le givre. Une piste part vers l'est, où ça fume sévère."
      },
      aChoices: [
        {
          oLabel: { FR: "Avancer au Chapitre II", ENG: "Advance to Chapter II", JAP: "第2章へ進む", CH: "进入第二章", SWISSE: "Passer au Chapitre II" },
          sNextPage: "chapter2.html"
        },
        {
          oLabel: { FR: "Recommencer le Chapitre I", ENG: "Restart Chapter I", JAP: "第1章を再開", CH: "重新开始第一章", SWISSE: "Recommencer depuis le début" },
          sNextPage: "chapter1.html"
        }
      ]
    },
    nodeRidgePath: {
      oText: {
        FR: "Vous atteignez la crête et voyez les guerriers Jarnclaw traîner des captifs. Leur prêtre de guerre tient un fragment qui rougeoie comme un feu couvant.",
        ENG: "You crest the ridge and witness Jarnclaw warriors dragging captives toward black ships. Their war-priest holds a shard glowing like banked fire.",
        JAP: "尾根の頂上で、ヤルンクロウの戦士たちが捕虜を引きずっているのを目撃する。彼らの戦の神官が燃えるような欠片を持っている。",
        CH: "你登上山脊，目睹铁爪战士将俘虏拖向黑船。他们的战僧拿着一块像炭火般发光的碎片。",
        SWISSE: "Tu arrives en haut et tu vois les Jarnclaw embarquer des prisonniers. Leur prêtre a un bout qui brille comme du feu."
      },
      aChoices: [
        {
          oLabel: { FR: "Avancer au Chapitre II", ENG: "Advance to Chapter II", JAP: "第2章へ進む", CH: "进入第二章", SWISSE: "Passer au Chapitre II" },
          sNextPage: "chapter2.html"
        },
        {
          oLabel: { FR: "Recommencer le Chapitre I", ENG: "Restart Chapter I", JAP: "第1章を再開", CH: "重新开始第一章", SWISSE: "Recommencer depuis le début" },
          sNextPage: "chapter1.html"
        }
      ]
    }
  }
};