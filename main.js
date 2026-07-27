const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  return res.json({
    message: "hey user",
  });
});
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
