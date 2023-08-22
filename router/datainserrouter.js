const express = require('express');
const router = express.Router();
const {ticket,fetchticket,cancel} = require('../controller/datainsert');

router.post('/ticket',ticket);
router.get('/findticket/:id',fetchticket);
router.delete('/cancelticket/:id',cancel);

module.exports = router;