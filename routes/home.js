const express = require("express");
const router = express.Router();

const db = {
  garage: [
      {
          "name": "Tesla",
          "color": "#e6e6fa",
          "id": 1,
      },
      {
          "name": "BMW",
          "color": "#fede00",
          "id": 2,
      },
      {
          "name": "Mersedes",
          "color": "#6c779f",
          "id": 3,
      },
      {
          "name": "Ford",
          "color": "#ef3c40",
          "id": 4,
      },
  ],
  winners: [
      {
          id: 1,
          wins: 1,
          time: 10,
      }
  ]
};

router.get("/", async (req, res, next) => {
  return res.status(200).json(db);
});



module.exports = router;