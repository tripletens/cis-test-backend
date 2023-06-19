const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const landingOurProgramsSchema = mongoose.Schema(
  {
    title_one: {
      type: String,
      required: false,
    },
    subtitle_one: {
      type: String,
      required: false,
    },

    title_two: {
      type: String,
      required: false,
    },

    subtitle_two: {
      type: String,
      required: false,
    },
    title_three: {
      type: String,
      required: false,
    },

    subtitle_three: {
      type: String,
      required: false,
    },
    title_four: {
      type: String,
      required: false,
    },
    subtitle_four: {
      type: String,
      required: false,
    },
    title_five: {
      type: String,
      required: false,
    },
    subtitle_five: {
      type: String,
      required: false,
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const LandingOurPrograms = mongoose.model(
  "LandingOurPrograms",
  landingOurProgramsSchema
);

landingOurProgramsSchema.plugin(uniqueValidator); // Add unique validation plugin to schema

module.exports = LandingOurPrograms;
