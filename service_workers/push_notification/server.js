import express from "express";
import bodyParser from "body-parser";
import webPush from "web-push";
import path from "path";

const app = express();

// Vapid keys is required for encryption
const pubVapidKey = "";
const privateVapidKey = "";

app.use(bodyParser.json());

webPush.setVapidDetails("mailto:test@test.com", pubVapidKey, privateVapidKey);

// create subscribe route
app.post("/subscribe", (req, res) => {
  // Get subs object from client
  const subscription = req.body;
  // Send 201 status
  res.status(201).json({});

  const payload = JSON.stringify({ title: "Push test" });

  // Pass payload
  webPush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});
