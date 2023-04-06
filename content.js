function removeElonized(loadingDogeSvg, logoDogeSvg) {
  loadingDogeSvg?.remove();
  logoDogeSvg?.remove();
}

const observer = new MutationObserver((mutationsList) => {
  let loadingDogeSvg, logoDogeSvg;

  for (const mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length) {
      if (!loadingDogeSvg) {
        loadingDogeSvg = document.querySelector(
          'div[aria-label*="Loading"]#placeholder > svg'
        );
      }

      if (!logoDogeSvg) {
        logoDogeSvg = document.querySelector(
          'a[aria-label="Twitter"] > div > svg'
        );
      }

      if (loadingDogeSvg || logoDogeSvg) {
        removeElonized(loadingDogeSvg, logoDogeSvg);
      }

      // Disconnect the observer if both elements are removed
      if (loadingDogeSvg && logoDogeSvg) {
        observer.disconnect();
      }
    }
  }
});

observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true,
});

document.addEventListener("beforeunload", () => {
  observer.disconnect();
});
