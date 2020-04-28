const { body, validationResult } = require("express-validator");

exports.validUserInputs = () => {
    return [
        body("firstName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("Invalid first name."),

        body("lastName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("Invalid last name."),

        body("userName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("Invalid user name."),

        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Invalid email address."),

        body("pw")
            .notEmpty()
            .trim()
            .isLength({ min: 8 })
            .withMessage("Invalid password.")
    ]
}