const express = require("express");
const router = express.Router();
const cors = require("cors");
const axios = require("axios");
const { log } = require("console");
require("dotenv").config();

// .env variables
const API_KEY = process.env.API_KEY;

// Utils Functions
const filtrifyQueryParams = (queryParam) => {
  const entries = Object.entries(queryParam);
  const newArr = [];
  entries.map((elem, index) => {
    [...newArr];
    newArr.push(elem.join("="));
  });
  const filters = newArr.join("&");
  return filters + "&";
};

// ********************* get All characters w/ filters *********************

router.get("/characters", async (req, res) => {
  try {
    // log(req.query);
    // if (!Object.keys(req.query).length) {

    // }
    const filters = filtrifyQueryParams(req.query);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?${filters}apiKey=${API_KEY}`
    );
    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// ********************* get character by ID *********************

router.get("/characters/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;
    // log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${API_KEY}`
    );
    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
