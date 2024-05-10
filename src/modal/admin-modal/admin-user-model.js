const mongoose = require("mongoose");

const adminUserSchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: [true, "Please enter the company name"],
    },
    company_contact: {
      type: String,
      required: [true, "Please enter the contact number"],
    },
    company_email: {
      type: String,
      required: [true, "Please enter the email ID"],
    },
    password: {
      type: String,
      required: [true, "Need to enter your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin-user", adminUserSchema);
