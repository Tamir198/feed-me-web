import createApp from "./app.js";
const app = createApp();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
