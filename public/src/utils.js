"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSVG = exports.toSlug = exports.preflight = void 0;
const tinycolor2_1 = __importDefault(require("tinycolor2"));
const DAYS = 60 * 60 * 24;
const CACHE_BROWSER = 7 * DAYS;
const CACHE_CDN = 5 * DAYS;
const CONTENT_TYPE = 'image/svg+xml;charset=utf-8';
function preflight(res) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET');
    res.setHeader("Access-Control-Allow-Headers", '*');
    res.setHeader('Content-Type', CONTENT_TYPE);
    if (process.env.NODE_ENV !== 'production') {
        res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=0, must-revalidate');
        return;
    }
    res.setHeader('Cache-Control', `public, max-age=${CACHE_BROWSER}, s-maxage=${CACHE_CDN}, immutable`);
}
exports.preflight = preflight;
function toSlug(title) {
    return title.toLowerCase()
        .replace(/\+/g, "plus")
        .replace(/\./g, "dot")
        .replace(/&/g, "and")
        .replace(/đ/g, "d")
        .replace(/ħ/g, "h")
        .replace(/ı/g, "i")
        .replace(/ĸ/g, "k")
        .replace(/ŀ/g, "l")
        .replace(/ł/g, "l")
        .replace(/ß/g, "ss")
        .replace(/ŧ/g, "t")
        .normalize("NFD")
        .replace(/[^a-z0-9]/g, "");
}
exports.toSlug = toSlug;
function toSVG(svg, props = {}) {
    let properties = Object.assign({}, {
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': '0 0 24 24',
        'role': 'img'
    }, props, { 'fill': (0, tinycolor2_1.default)(props.fill).toHex8String() });
    return svg.replace(/^<svg[^>]+>/, `<svg ${(Object.entries(properties).map(([k, v]) => `${k}="${v}"`).join(' '))}>`);
}
exports.toSVG = toSVG;
