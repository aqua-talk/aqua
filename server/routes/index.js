const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "../../client/build")));

router.get("/", function (request, response) {
  response.sendFile("index.html");
});
router.get("/login_info", function (request, response) {
  let user_info = {
    id: "pancom",
    email: "pancom@kakao.com",
    displayName: "kimhyeon",
    googleId: "g_hyeon",
  };
  response.send({ user_info });
});
router.get("/isLogin", function (request, response) {
  response.send(request.user);
});

module.exports = router;
