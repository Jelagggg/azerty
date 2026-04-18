window.oChapterData = {
  oChapterTitle: {
    FR: "Chapitre III - La Rune de Braise",
    ENG: "Chapter III - The Ember Rune",
    JAP: "第3章 - エンバールーン",
    CH: "第三章 - 余烬符文",
    SWISSE: "Chapitre III - La Rune de Braise"
  },
  sStartNodeId: "nodeShrineSummit",
  oNodes: {
    nodeShrineSummit: {
      oText: {
        FR: "Le feu de tempête s'enroule autour de l'autel du sommet alors que le prêtre lève la Rune de Braise. Votre clan forme un mur de boucliers plus bas, attendant votre ordre.",
        ENG: "Stormfire coils around the summit altar as the war-priest raises the Ember Rune. Your clan forms a shield wall below, waiting for your final command.",
        JAP: "神官がエンバールーンを掲げると、嵐の炎が山頂の祭壇に巻き付く。あなたの一族は下で盾の壁を作り、最後の命令を待っている。",
        CH: "当战僧举起余烬符文时，风暴之火盘绕在山顶祭坛周围。你的氏族在下方组成盾墙，等待你最后的命令。",
        SWISSE: "Le feu tourne autour de l'autel. Le prêtre lève la Rune. Ton clan attend ton ordre en bas, bien sagement."
      },
      aChoices: [
        {
          oLabel: { FR: "Défier le prêtre en combat singulier", ENG: "Challenge the priest in single combat", JAP: "一騎打ちで神官に挑む", CH: "在单挑中挑战战僧", SWISSE: "Aller taper le prêtre tout seul" },
          sTargetNodeId: "nodeSingleCombat"
        },
        {
          oLabel: { FR: "Canaliser la rune avec le chant du gothi", ENG: "Channel the rune with the gothi chant", JAP: "神官の詠唱でルーンの力を引き出す", CH: "用祭司的诵经声引导符文", SWISSE: "Chanter le truc du gothi" }
        }
      ]
    },
    nodeSingleCombat: {
      oText: {
        FR: "L'acier rencontre le feu. Vous endurez un échange brutal, puis enfoncez votre lame à travers le masque de fer du prêtre. La Rune tombe, encore incandescente.",
        ENG: "Steel meets fire. You endure a brutal exchange, then drive your blade through the priest's iron mask. The Ember Rune drops, still blazing in the snow.",
        JAP: "鋼と炎が交わる。激しい応酬に耐え、神官の鉄の仮面に刃を突き立てる。エンバールーンが雪の中に落ち、まだ燃えている。",
        CH: "钢铁与火焰交锋。你承受了残酷的交锋，然后将剑刺穿战僧的铁面具。余烬符文掉落，在雪地中依然燃烧。",
        SWISSE: "L'acier contre le feu. Tu tapes fort et tu passes à travers son masque. La rune tombe dans la neige, toute chaude."
      },
      aChoices: [
        {
          oLabel: { FR: "Réclamer la rune pour votre clan", ENG: "Claim the rune for your clan", JAP: "一族のためにルーンを要求する", CH: "为你的氏族夺取符文", SWISSE: "Prendre la rune pour les tiens" },
          sTargetNodeId: "nodeHonorEnding"
        },
        {
          oLabel: { FR: "Détruire la rune immédiatement", ENG: "Destroy the rune at once", JAP: "すぐにルーンを破壊する", CH: "立即摧毁符文", SWISSE: "Péter la rune direct" },
          sTargetNodeId: "nodeSacrificeEnding"
        }
      ]
    },
    nodeRuneChant: {
      oText: {
        FR: "Vous récitez d'anciens noms et votre voix rejoint la tempête. La Rune répond, pliant son feu à votre serment et brisant le moral des Jarnclaw.",
        ENG: "You recite ancient names as your voice joins the storm. The Ember Rune answers, bending its fire to your oath and breaking Jarnclaw morale in an instant.",
        JAP: "嵐に声を合わせ、古い名前を唱える。エンバールーンが応え、あなたの誓いにその炎を従わせ、一瞬でヤルンクロウの士気を打ち砕く。",
        CH: "你的声音融入风暴，念出古老的名字。余烬符文做出回应，将其火焰屈服于你的誓言，瞬间击溃了铁爪的士气。",
        SWISSE: "Tu chantes les vieux noms. La Rune écoute, et le feu obéit à ton serment. Les Jarnclaw se font dessus."
      },
      aChoices: [
        {
          oLabel: { FR: "Sceller la rune sous le sanctuaire", ENG: "Seal the rune beneath the shrine", JAP: "祠の下にルーンを封印する", CH: "将符文封印在神龛下方", SWISSE: "Cacher la rune sous le caillou" },
          sTargetNodeId: "nodePeaceEnding"
        },
        {
          oLabel: { FR: "La manier pour unifier le nord", ENG: "Wield it to unite the north", JAP: "北を統一するために振るう", CH: "挥舞它以统一北方", SWISSE: "S'en servir pour unifier tout le nord" },
          sTargetNodeId: "nodeConquestEnding"
        }
      ]
    },
    nodeHonorEnding: {
      oText: {
        FR: "Fin - Honneur du Fjord : Vous ramenez la Rune de Braise à votre autel et jurez de ne jamais la tirer par cupidité. Votre clan survit à l'hiver, votre serment devient légende.",
        ENG: "Ending - Honor of the Fjord: You return the Ember Rune to your longhouse altar and swear never to draw it for greed. Your clan survives the winter, and your oath becomes legend.",
        JAP: "エンディング - フィヨルドの名誉：エンバールーンをロングハウスの祭壇に戻し、決して貪欲のために引き抜かないことを誓う。一族は冬を生き延び、あなたの誓いは伝説となる。",
        CH: "结局 - 峡湾的荣誉：你将余烬符文归还长屋祭坛，并誓言绝不因贪婪而拔出它。你的氏族熬过了冬天，你的誓言成为传奇。",
        SWISSE: "Fin - Honneur du Fjord : Tu ramènes la Rune à la maison. Ton clan passe l'hiver au chaud, et tout le monde parle de toi."
      },
      aChoices: [
        {
          oLabel: { FR: "Retour au Menu Principal", ENG: "Return to Main Menu", JAP: "メインメニューに戻る", CH: "返回主菜单", SWISSE: "Retour à la maison (Menu)" },
          sNextPage: "../index.html"
        }
      ]
    },
    nodeSacrificeEnding: {
      oText: {
        FR: "Fin - Serment de Cendres : Vous brisez la Rune contre l'autel. Le feu meurt, tout comme la malédiction. Les chants se souviendront du prix payé.",
        ENG: "Ending - Ashen Oath: You shatter the Ember Rune against the altar. Fire dies, but so does the old curse. Songs remember your courage and the price you paid.",
        JAP: "エンディング - 灰の誓い：祭壇にエンバールーンを叩きつけて砕く。火は消えるが、古い呪いも消える。歌はあなたの勇気と払った代償を記憶する。",
        CH: "结局 - 灰烬誓言：你在祭坛上粉碎了余烬符文。火焰熄灭，古老的诅咒也随之消散。歌谣铭记着你的勇气和你付出的代价。",
        SWISSE: "Fin - Serment de Cendres : Tu casses la Rune sur l'autel. Fini le feu, finie la malédiction. On s'en souviendra longtemps."
      },
      aChoices: [
        {
          oLabel: { FR: "Retour au Menu Principal", ENG: "Return to Main Menu", JAP: "メインメニューに戻る", CH: "返回主菜单", SWISSE: "Retour à la maison (Menu)" },
          sNextPage: "../index.html"
        }
      ]
    },
    nodePeaceEnding: {
      oText: {
        FR: "Fin - Paix Hivernale : Vous liez la rune sous la pierre et la loi. Les jarls rivaux s'agenouillent devant le pacte. Le printemps arrive sans tambours de guerre.",
        ENG: "Ending - Winter Peace: You bind the rune under stone and law. Rival jarls kneel to the pact, and for the first time in generations, spring arrives without war drums.",
        JAP: "エンディング - 冬の平和：ルーンを石と掟の下に縛る。ライバルのヤールたちは協定に跪き、何世代にもわたって初めて、戦太鼓なしで春が訪れる。",
        CH: "结局 - 凛冬之平：你将符文束缚在石头与律法之下。敌对的雅尔向契约屈膝，这是几代人以来第一次，没有战鼓声的春天到来了。",
        SWISSE: "Fin - Paix Hivernale : Tu planques la rune sous la caillasse. Les autres chefs se calment, et le printemps arrive tranquille."
      },
      aChoices: [
        {
          oLabel: { FR: "Retour au Menu Principal", ENG: "Return to Main Menu", JAP: "メインメニューに戻る", CH: "返回主菜单", SWISSE: "Retour à la maison (Menu)" },
          sNextPage: "../index.html"
        }
      ]
    },
    nodeConquestEnding: {
      oText: {
        FR: "Fin - Couronne de Tempête : Avec le feu de braise en main, chaque bannière s'incline devant votre flotte. Vous forgez une paix rude, à la fois craint et célébré.",
        ENG: "Ending - Storm Crown: With ember-fire in your grasp, every banner bows before your fleet. You forge a harsh peace across the north, feared and celebrated alike.",
        JAP: "エンディング - 嵐の王冠：エンバーの火を手に、すべての旗があなたの艦隊の前に頭を下げる。恐れられ、称賛されながら、北の地に厳しい平和を築き上げる。",
        CH: "结局 - 风暴之冠：将余烬之火握在手中，每一面旗帜都在你的舰队前屈服。你在北境铸就了残酷的和平，既令人敬畏又受人传颂。",
        SWISSE: "Fin - Couronne de Tempête : Avec le feu en main, tout le monde plie l'échine. Tu fais la loi dans le nord, c'est pas de la rigolade."
      },
      aChoices: [
        {
          oLabel: { FR: "Retour au Menu Principal", ENG: "Return to Main Menu", JAP: "メインメニューに戻る", CH: "返回主菜单", SWISSE: "Retour à la maison (Menu)" },
          sNextPage: "../index.html"
        }
      ]
    }
  }
};