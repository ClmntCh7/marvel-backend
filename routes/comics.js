const express = require("express");
const router = express.Router();
const cors = require("cors");
const axios = require("axios");
const { log } = require("console");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

// Utils Functions
const filtrifyQueryParams = (queryParam) => {
  const entries = Object.entries(queryParam);
  // log(entries.length);
  const newArr = [];
  entries.map((elem, index) => {
    [...newArr];
    newArr.push(elem.join("="));
  });
  const filters = newArr.join("&");
  return filters + "&";
};

// ********************* get All comics w/ filters *********************

router.get("/comics", async (req, res) => {
  try {
    // log(req.query);
    // if (!Object.keys(req.query).length) {

    // }
    const filters = filtrifyQueryParams(req.query);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?${filters}apiKey=${API_KEY}`
    );
    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// ********************* get comic by character ID *********************

router.get("/comics/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;
    // log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${API_KEY}`
    );
    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// ********************* get comic by ID *********************

router.get("/comic/:comicId", async (req, res) => {
  try {
    const { comicId } = req.params;
    // log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${API_KEY}`
    );
    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
