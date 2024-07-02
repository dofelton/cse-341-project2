const validator = require('../helpers/validate');

const saveLocation = (req, res, next) => {
    const validationRule = {
    place: 'required|string',
    country: 'required|string',
    description: 'required|string',
    famous_landmark: 'required|string',
    average_temperature_celsius: 'required|numeric',
    currency: 'required|string',
    language: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = { saveLocation };