/*
Server Sent Events can be used to send data from server to client in a unidirectional manner.


 */

import Express from "express";

const app = Express();

// You have to add two new lines to signal this is an event

app.get("/stream", (req, res) => {
  res.setHeader("content-type", "text/event-stream");
  res.write('data: {"flight": "I768", "state": "landing"}');
  res.write("\n\n");
});

app.listen(3000);

// On FE side
let sse = new EventSource("<endpoint>/stream");
sse.onmessage = (e) => {
  console.log(e.data);
};
