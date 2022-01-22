"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_icons_1 = __importDefault(require("simple-icons"));
const tinycolor2_1 = __importDefault(require("tinycolor2"));
const utils_1 = require("../src/utils");
const fallback = 'simpleicons';
async function handler(req, res) {
    let { slug, name, color = 'default', type = 'svg' } = req.query;
    (0, utils_1.preflight)(res);
    if (req.method !== 'GET')
        return res.status(403).send('forbidden');
    [slug, color] = (~slug.indexOf('-'))
        ? slug.split('-')
        : [(0, utils_1.toSlug)(slug || name || fallback), (0, utils_1.toSlug)(color)];
    let icon_alt = simple_icons_1.default.Get(color) || null;
    let icon = simple_icons_1.default.Get(slug) || icon_alt || simple_icons_1.default.Get(fallback);
    if (!icon || typeof icon === 'undefined')
        return res.status(404).send('not found');
    console.log("[%s][HTTP][%s]: %s", new Date().toJSON(), req.method, req.url);
    const fill = ((0, tinycolor2_1.default)(color).isValid() && color !== 'default' ? color : icon.hex);
    return res.status(200).send((0, utils_1.toSVG)(icon.svg, { fill }));
}
exports.default = handler;
