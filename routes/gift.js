const {Router} = require('express');
const {GiftRecord} = require("../records/gift.record");



const giftRouter = Router();

giftRouter // /child/
    .get('/', (req, res) => {
        const giftsList = GiftRecord.listAll();
        res.render('gift/list', {
            giftsList,
        });
    });

module.exports = {
    giftRouter,
};