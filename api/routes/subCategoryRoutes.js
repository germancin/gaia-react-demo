const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
let appRouter = express.Router();

// EndPoint: /api/v1/sub-categories

appRouter.route('/:tid').get(subCategoryController.getData);

appRouter.route('/:tid/:sortby').get(subCategoryController.getSortedData);

module.exports = appRouter;