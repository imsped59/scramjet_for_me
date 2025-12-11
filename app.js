const frame = document.getElementById("proxy-frame");
const input = document.getElementById("url-input");

// Start Scramjet (this registers the service worker automatically)
Scramjet({ stealth: true });

// Load a URL into the iframe using Scramjet
function load(url) {
  if (!url.startsWith("http")) url = "https://" + url;
  input.value = url;
  frame.src = "/proxy/" + btoa(url);
}

// Press Enter or click Go
function go() {
  let url = input.value.trim();
  load(url);
}

// HUD buttons
function goBack()    { frame.contentWindow.history.back(); }
function goForward() { frame.contentWindow.history.forward(); }

// Optional: load home page on start
window.onload = () => load("https://google.com");
