(() => {
  window.fnRenderNode = fnRenderNode;

  function fnGetLocalizedText(xData) {
    if (!xData) return "";
    if (typeof xData === "string") return xData;
    const sLang = window.fnGetLanguage ? window.fnGetLanguage() : "FR";
    return xData[sLang] || xData["FR"] || xData["ENG"] || "";
  }

  function fnInitializeStory() {
    if (!window.oChapterData) {
      return;
    }

    const eTitle = document.getElementById("idChapterTitle");
    const eStoryText = document.getElementById("idStoryText");
    const eChoiceContainer = document.getElementById("idChoiceContainer");

    if (!eTitle || !eStoryText || !eChoiceContainer) {
      return;
    }

    if (window.oChapterData.oChapterTitle) {
      eTitle.textContent = fnGetLocalizedText(window.oChapterData.oChapterTitle);
    } else if (window.oChapterData.sChapterTitle) {
      eTitle.textContent = window.oChapterData.sChapterTitle;
    }

    fnRenderNode(window.oChapterData.sStartNodeId, eStoryText, eChoiceContainer);
  }

  function fnRenderNode(sNodeId, eStoryText, eChoiceContainer) {
    const oNode = window.oChapterData.oNodes[sNodeId];
    if (!oNode) {
      return;
    }

    window.sCurrentNodeId = sNodeId;
    eStoryText.textContent = fnGetLocalizedText(oNode.oText || oNode.sText);
    eChoiceContainer.innerHTML = "";

    oNode.aChoices.forEach((oChoice) => {
      const eChoiceButton = document.createElement("button");
      eChoiceButton.className = "v-choice-button";
      eChoiceButton.type = "button";
      eChoiceButton.textContent = fnGetLocalizedText(oChoice.oLabel || oChoice.sLabel);
      eChoiceButton.addEventListener("click", () => fnHandleChoice(oChoice, eStoryText, eChoiceContainer));
      eChoiceContainer.appendChild(eChoiceButton);
    });
  }

  function fnHandleChoice(oChoice, eStoryText, eChoiceContainer) {
    if (oChoice.sNextPage) {
      document.body.classList.add("is-exiting");
      setTimeout(() => {
        window.location.href = oChoice.sNextPage;
      }, 400);
      return;
    }

    if (oChoice.sTargetNodeId) {
      fnRenderNode(oChoice.sTargetNodeId, eStoryText, eChoiceContainer);
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
    fnInitializeStory();
    fnSetupLinkTransitions();
  });
})();
