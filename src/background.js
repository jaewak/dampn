chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ["src/grayscale.js"]
    });
});

