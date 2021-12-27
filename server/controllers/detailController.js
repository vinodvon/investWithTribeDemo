const express = require("express");
const DetailDb = require("../models/details");

const getDetails = async (req, res) => {
  try {
    const data = await DetailDb.find();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Error fetching data ..");
  }
};

const saveDetails = async (req, res) => {
  try {
    const data = new DetailDb({
      person_name: req.body.person_name,
      person_phone: req.body.person_phone,
      address_line: req.body.address_line,
      address_end_date: req.body.address_end_date,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
    });
    const savedData = await data.save();
    res.send(savedData);
  } catch (err) {
    console.log(err);
    res.send("Error posting  data ..");
  }
};

module.exports = { getDetails, saveDetails };
