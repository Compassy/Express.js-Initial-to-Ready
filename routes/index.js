const express = require('express');
const router = express.Router();
const { swaggerDoc, swaggerOptions, swaggerUi } = require("../utils/swagger");

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc, swaggerOptions));
/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Get health status
 *     description: Get health status of the API server
 *     tags:
 *       - Health
 *     responses:
 *       '200':
 *         description: Server is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Server is running
 */
router.get('/health', require('../controllers/health').get_health);

module.exports = router;