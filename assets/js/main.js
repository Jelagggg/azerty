(() => {
  const eBody = document.body;
  const nParallaxLimit = 14;

  function fnHandleMouseShift(oEvent) {
    const nOffsetX = (oEvent.clientX / window.innerWidth - 0.5) * nParallaxLimit;
    const nOffsetY = (oEvent.clientY / window.innerHeight - 0.5) * nParallaxLimit;
    eBody.style.backgroundPosition = `${50 + nOffsetX}% ${50 + nOffsetY}%`;
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
    window.addEventListener("mousemove", fnHandleMouseShift);
    fnSetupLinkTransitions();
    fnInjectLanguageSelector();
    
    if (window.fnTranslatePage) {
      window.fnTranslatePage();
    }
  });

  function fnInjectLanguageSelector() {
    const eContainer = document.createElement("div");
    eContainer.className = "v-lang-container";
    
    const eSelect = document.createElement("select");
    eSelect.id = "idLangSelect";
    eSelect.className = "v-lang-select";
    
    const aLangs = [
      { code: "FR", name: "Français" },
      { code: "ENG", name: "English" },
      { code: "JAP", name: "日本語 (JAP)" },
      { code: "CH", name: "中文 (CH)" },
      { code: "SWISSE", name: "Suisse Romand" }
    ];
    
    aLangs.forEach(oLang => {
      const eOption = document.createElement("option");
      eOption.value = oLang.code;
      eOption.textContent = oLang.name;
      eSelect.appendChild(eOption);
    });

    eSelect.addEventListener("change", (e) => {
      if (window.fnSetLanguage) {
        window.fnSetLanguage(e.target.value);
      }
    });

    eContainer.appendChild(eSelect);
    document.body.appendChild(eContainer);
    
    if (window.fnGetLanguage) {
      eSelect.value = window.fnGetLanguage();
    }
  }
})();
