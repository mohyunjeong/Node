const express = require("express"); // router 파일에 필요
const app = express();
const router = require("./routes/router")

app.use(router); // 주체가 app이기 때문에 router에 가져다 주지 않음!

app.listen(3015);