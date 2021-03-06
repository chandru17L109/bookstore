const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    houseNumber: {
        type: Number,
        required: [true, "Please provide a HouseNumber"],
        match: [/^[0-9]/, "Please provide a valid HouseNumber"],
    },
    locality: {
        type: String,
        required: [true, "Please provide a Locality"],
        match: [/[a-zA-Z]/, "Please provide a valid Locality"],
    },
    city: {
        type: String,
        required: [true, "Please provide a city"],
        match: [/[a-zA-Z]/, "Please provide a valid City"],
    },
    state: {
        type: String,
        enum: [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
        ],
        required: [true, "Please provide a State"],
        match: [/[a-zA-Z]/, "Please provide a valid State"],
    },
    country: {
        type: String,
        required: [true, "Please provide a Country"],
        default: "India",
    },
    pinCode: {
        type: Number,
        required: [true, "Please provide a Pin Code"],
        match: [/^[0-9]{6}$/, "Please provide a valid Pin Code"],
    },
});
const schema = mongoose.Schema;

const OrdersSchema = new schema({
    email: {
        type: String,
        ref: "user",
        trim: true,
        required: [true, "Please provide a Email"],
        match: [
            /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            "Please provide a valid Email Address",
        ],
    },
    amount: {
        type: Number,
        required: [true, "Please provide a Amount"],
        match: [/^[0-9]$/, "Please provide a valid Amount"],
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["new", "packed", "shipped", "completed", "cancelled", "delayed"],
        default: "new",
    },
    books: [
        {
            quantity: {
                type: Number,
                required: [true, "Please provide a Quantity Number"],
            },
            isbn: {
                type: Number,
                required: [true, "Please provide a ISBN Number"],
                match: [/^[0-9]{10,13}$/, "Please provide a valid ISBN Number"],
            },
        },
    ],
    address: {
        type: AddressSchema,
        required: [true, "Please provide a Address"],
    },
    paymentStatus: {
        type: Boolean,
        default: false,
    },
});

const Orders = new mongoose.model("order", OrdersSchema);
module.exports = Orders;
