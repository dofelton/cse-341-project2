const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    //#swagger.tags=['Travel']
    mongodb
    .getDb()
    .db()
    .collection('locations')
    .find()
    .toArray((err, lists) => {
        if(err) {
            res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(locations);
    });
}

const getById = (req, res) => {
    //#swagger.tags=['Travel']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid location id.');
    }
    const locationId = new ObjectId(req.params.id);
    const result = mongodb.getDb().db().collection('locations').find({ _id: locationId });
    result.toArray((err, result) => {
        if (err) {
            res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(locations[0]);
    });
};

const addLocation = async (req, res) => {
    //#swagger.tags=['Travel']
    const location = {
        place: req.body.place,
        country: req.body.country,
        description: req.body.description,
        famous_landmark:req.body.famous_landmark,
        avg_temperature: req.body.average_temperature_celsius,
        currency: req.body.currency,
        language: req.body.language
    };
    const response = await mongodb.getDb().db().collection('locations').insertOne(location);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || "An error occured while adding this location");
    }
};

const updateLocation = async (req, res) => {
    //#swagger.tags=['Travel']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid location id.');
    }
    const locationId = new ObjectId(req.params.id);
    const location = {
        place: req.body.place,
        country: req.body.country,
        description: req.body.description,
        famous_landmark:req.body.famous_landmark,
        avg_temperature: req.body.average_temperature_celsius,
        currency: req.body.currency,
        language: req.body.language
    };
    const response = await mongodb.getDb().db().collection('locations').replaceOne({ _id: locationId}, location);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occured while updating this location");
    }
}

const deleteLocation = async (req, res) => {
    //#swagger.tags=['Travel']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid location id.');
    }
    const locationId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('locations').deleteOne({ _id: locationId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occured while deleting this location");
    }
}

module.exports = { getAll, getById, addLocation, updateLocation, deleteLocation };