function removeElonized() {
  const loadingDoge = document.querySelector(
    'div[aria-label*="Loading"]#placeholder > svg'
  );
  const logoDoge = document.querySelector(
    'a[aria-label="Twitter"] > div > svg'
  );

  loadingDoge?.remove();
  logoDoge?.remove();
}

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    removeElonized();
  }
});

observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true,
});

document.addEventListener("beforeunload", () => {
  observer.disconnect();
});
