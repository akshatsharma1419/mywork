if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cache_all")
      .then((reg) => console.log("SW registered"))
      .catch((err) => console.log(`SW ${err}`));
  });
}

/**
In React App
let swURL = `${process.env.PUBLIC_URL}/sw.js`;
navigator.serviceWorker.register(swURL).then(resp=>console.log(resp));

 */
