const express = require("express");

const router = express.Router();

const Customer =
    require("../models/Customer");

/* TEST ROUTE */

router.get("/", async (req, res) => {

    try {

        const customers =
            await Customer.find();

        res.json(customers);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

/* REGISTER CUSTOMER */

router.post("/register", async (req, res) => {

    try {

        const customer =
            await Customer.create(req.body);

        res.status(201).json(customer);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;