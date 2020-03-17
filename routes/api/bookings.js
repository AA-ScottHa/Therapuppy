const express = require("express");
const router = express.Router();
// const passport = require("passport");
const mongoose = require('mongoose');
const Booking = require("../../models/Booking");
const validateBookingInput = require("../../validations/booking");

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validateBookingInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newBooking = new Booking({
            // user: req.user.id,
            // text: req.body.text,
            owner: req.body.puppy.owner,
            renter: req.user.id, 
            puppy: req.body.puppy.id,
            date: req.body.date,


        });

        newBooking
            .save()
            .then(booking => res.json(booking))

    }
)