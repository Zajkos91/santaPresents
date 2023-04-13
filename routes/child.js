const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");
const {ValidationError} = require("../utils/sendError");



const childRouter = Router();

childRouter // /child/
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.render('children/list', {
            childrenList,
            giftsList,
        });
})
    .post('/', async (req, res) => {


        const newChild = new ChildRecord(req.body);
        await newChild.insert();
        res.redirect('/child');
        console.log(req.body);


    })
    .patch('/gift/:childId', async (req, res) => {


    const child = await ChildRecord.getOne(req.params.childId);

    if(child === null) {
        throw new ValidationError('Not found child with that Id');
    }

    const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        if(gift) {
            console.log(gift.count, await gift.countGivenGifts())
           if(gift.count <= await gift.countGivenGifts()) {
               throw new ValidationError('Tego prezentu jest za mało');
            }
        }
        child.giftId = gift?.id ?? null;
        await child.update();

    res.redirect('/child');



})

module.exports = {
    childRouter,
};