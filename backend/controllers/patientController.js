const Patient=require('../models/patient');
exports.createAdmin = async (req, res, next) => {
    try {
    const patient = await Patient.create(req.body);
    const obj={
        message:'success',
        data:patient
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};
exports.getAll = async (req, res, next) => {
    try {
    const patient = await Patient.find();
    const obj={
        message:'success',
        data:patient
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};

exports.getParticular = async (req, res, next) => {
    try {
    const patient = await Patient.findById(req.params.id);
    const obj={
        message:'success',
        data:patient
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};
exports.updatePatient = async (req, res, next) => {
    try {
      //  console.log(req.body)
    const patient = await Patient.findByIdAndUpdate(req.params.id,req.body);
    const obj={
        message:'success',
        data:patient
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};
exports.deletePatient = async (req, res, next) => {
    try {
      //  console.log(req.body)
    await Patient.findByIdAndDelete(req.params.id);
    const obj={
        message:'success',
        
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};


