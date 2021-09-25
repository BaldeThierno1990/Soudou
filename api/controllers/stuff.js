const Thing = require('../models/thing');
const fs = require('fs');

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    image: req.body.image,
    name: req.body.name,
    statut: req.body.statut,
    description: req.body.description,
    pays: req.body.pays,
    ville: req.body.ville,
    phone: req.body.phone,
    mail: req.body.mail,
    
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Bien creer avec succè!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    image: req.body.image,
    name: req.body.name,
    statut: req.body.statut,
    description: req.body.description,
    pays: req.body.pays,
    ville: req.body.ville,
    phone: req.body.phone,
    mail: req.body.mail,
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Bien modifié avec succè!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Bien supprimé avec succè!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};