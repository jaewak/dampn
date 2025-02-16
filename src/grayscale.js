function applyGrayscale() {
    if (!document.head) {
        console.log("Waiting for document.head...");
        new MutationObserver((mutations, observer) => {
            if (document.head) {
                observer.disconnect();
                injectGrayscale();
            }
        }).observe(document.documentElement, { childList: true, subtree: true });
    } else {
        injectGrayscale();
    }
}

function injectGrayscale() {
    if (!document.getElementById("dampn-grayscale-style")) {
        let style = document.createElement("style");
        style.id = "dampn-grayscale-style";
        style.innerHTML = "html { filter: grayscale(100%) !important; }";
        document.head.appendChild(style);
        console.log("Grayscale applied");
    }
}

applyGrayscale();
