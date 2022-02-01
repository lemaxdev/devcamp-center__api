// @desc    Controllers for CRUD operations on bootcamps
const Bootcamps = {
    // Retrieve all the bootcamps | GET /api/v1/bootcamps | Public
    getAll: (req, res) => {
        res.status(200).send({ success: true, msg: `Get all the bootcamps` });
    },
    // Retrieve a bootcamp by ID | GET /api/v1/bootcamps/:id | Public 
    getById: (req, res) => {
        res.status(200).send({ success: true, msg: `Get the bootcamp with id ${req.params.id}` });
    },
    // Add a new bootcamp | POST /api/v1/bootcamps | Privat
    create: (req, res) => {
        res.status(201).send({ success: true, msg: `Add a new bootcamp` });
    },
    // Update a bootcamp by ID | PUT /api/v1/bootcamps/:id | Privat 
    update: (req, res) => {
        res.status(200).send({ success: true, msg: `Update the bootcamp with id ${req.params.id}` });
    },
    // Delete a bootcamp by ID | DELETE /api/v1/bootcamps/:id | Privat 
    delete: (req, res) => {
        res.status(200).send({ success: true, msg: `Delete the bootcamp with id ${req.params.id}` });
    }
}

module.exports = Bootcamps