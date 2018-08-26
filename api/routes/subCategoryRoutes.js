const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
let appRouter = express.Router();

// EndPoint: /api/v1/sub-categories

appRouter.route('/:tid').get(subCategoryController.getData);

module.exports = appRouter;