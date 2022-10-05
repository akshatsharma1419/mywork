// Proxy pattern | Cache

function CryptoCurrencyAPI() {
  this.getValue = function (coin) {
    console.log("Fetching data");
    switch (coin) {
      case "Bitcoin":
        return 5000;
      case "Etherum":
        return 150;
      case "Litecoin":
        return 375;
    }
  };
}

function Proxy() {
  let cache = {};
  const api = new CryptoCurrencyAPI();
  this.getValue = function (coin) {
    if (!(coin in cache)) {
      cache[coin] = api.getValue(coin);
    }
    return cache[coin];
  };
}

const proxy = new Proxy();
