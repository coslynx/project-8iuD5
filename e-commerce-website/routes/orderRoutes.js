const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/createOrder', orderController.createOrder);
router.get('/getOrder/:id', orderController.getOrderById);
router.put('/updateOrder/:id', orderController.updateOrderById);
router.delete('/deleteOrder/:id', orderController.deleteOrderById);

module.exports = router;