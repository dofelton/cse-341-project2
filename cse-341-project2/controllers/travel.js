const mongodb = require('../data/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    console.log('in the travel controller file')

    const result = await mongodb.getDatabase().db().collection('locations').find();
    result.toArray().then((locations) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(locations);
    } );
}

const getById = async (req, res) => {
    const locationId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('locations').find({ _id: locationId });
    result.toArray().then((locations) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(locations[0]);
    } );
};

module.exports = { getAll, getById };