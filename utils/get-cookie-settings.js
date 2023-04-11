const {getAddonsFromReq} = require("./get-addons-from-req");
const {handlebarsHelpers} = require("./handlebars-helpers");
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies-data");


function getCookieSettings(req) {
    const {cookieBase: base} = req.cookies;

    const addons = getAddonsFromReq(req);
    const allBases = Object.entries(COOKIE_BASES);
    const allAddons = Object.entries(COOKIE_ADDONS)

    const sum = (base ? handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), base) : 0) + addons.reduce((prev, curr) => prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr), 0);

    return {
            addons,
            base,
            sum,
            allBases,
            allAddons,
    }

};


module.exports = {
    getCookieSettings,
}