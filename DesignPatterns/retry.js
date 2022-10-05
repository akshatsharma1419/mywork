// Rety Pattern
// It allows you to gracefully handle temporary failures in your app
// whenever you make network call, it allows you to retry
// Strategies: Don't, retry immediately, retry after delay

function retry() {
  this.attempts = 0;

  while (true) {
    try {
      getData();
      console.log("Success");
      break;
    } catch (err) {
      this.attempts++;
      console.log(`Attempts: ${this.attempts}`);
      if (this.attempts >= 5) {
        console.log("Maximum reached");
        break;
      }
    }
  }
}

function getData() {
  // makes external API call
  return true;
  throw "Failure";
}
