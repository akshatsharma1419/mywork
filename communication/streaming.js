const response = await fetch(url);

// To read stream of text data
const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log(value);
}

// Request streams
