const notifier = require("node-notifier");
const path = require("path");

console.log(
  "Notification set for " +
    process.argv[2] +
    " in " +
    process.argv[4] +
    " hours"
);

setTimeout(() => {
  notifier.notify({
    title: process.argv[2],
    message: process.argv[3],
    icon: path.join(__dirname, "/reminder.png"),
    sound: true,
  });
}, parseFloat(process.argv[4]) * 1000 * 60 * 60);
