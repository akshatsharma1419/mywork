const pubVapidKey = "";

// check for SW

if ("serviceWorker" in navigator) {
  sendSubs().catch((err) => console.log(err));
}

// Reg SW, Reg Push, Send Push
async function sendSubs() {
  const register = navigator.serviceWorker.register("./serviceWorker.js", {
    scope: "/",
  });

  const subscription = (await register).pushManager({
    userVisibility: true,
    applicationServerKey: urlBase64ToUnit8Array(pubVapidKey),
  });

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
}
