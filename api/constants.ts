import type { marked as Marked } from 'marked';
import { marked } from 'marked';

/**
 * default locale for icns.ml's content
 */
const LOCALE = 'en-US';

/**
 * Various URLs for the public-facing icns.ml service, GitHub repo, license page, etc.
 */
const ICNS_URL = new URL(process?.env?.ICNS_URL || 'https://icns.ml');
const SITE_URL = ICNS_URL.origin;
const GITHUB_URL = 'https://github.com/nberlette/icns';
const GITPOD_URL = `https://gitpod.io/#${GITHUB_URL}`;
const VERCEL_URL = `https://vercel.com/new/git/external?repository-url=${GITHUB_URL}/tree/main&project-name=icns-api&repository-name=icns`;
const LICENSE_URL = 'https://mit-license.org';

/**
 * Default metadata for SEO purposes
 */
const SITE_NAME = ICNS_URL.host;
const SITE_TAGLINE = 'SimpleIcons as a Service'.toLocaleLowerCase(LOCALE);
const SITE_TITLE = `${SITE_NAME} - ${SITE_TAGLINE}`;
const SITE_DESCRIPTION = `Over 2.1k vector icons from SimpleIcons - with a dynamic color API, always online via Vercel's Edge CDN, and 100% open source.`;
const SITE_KEYWORDS = `icns,icns.ml,icns.cf,simpleicons,svg,icons,vercel,open-source,edge,design,graphics,ux,ui,ux/ui,\
resources,designers,tools,vector,nberlette,berlette,png,api,branding,javascript,xml,web design,development,coding,companies`;

/**
 * Author information (me!) :]
 */
const AUTHOR_NAME = 'Nicholas Berlette';
const AUTHOR_URL = 'https://berlette.com';
const AUTHOR_TWITTER = '@nberlette';

/**
 * Configurations for the home page
 */
const DISPLAY_ICONS_COUNT = 10;

/**
 * @description Configuration options for the marked.parser() utility
 * @default marked.getDefaults()
 * @typedef {MarkedOptions} Marked.MarkedOptions
 * @namespace {Marked}
 * @see {markedDefaults}
 */
declare type MarkedOptions = Marked.MarkedOptions;

/**
 * @description Extensions (e.g. plugins) for the markdown parsing tool.
 * @typedef {MarkedExtension} Marked.MarkedExtension
 * @namespace {Marked}
 */
declare type MarkedExtension = Marked.MarkedExtension;

/**
 * @typedef {MarkedRules} Marked.Rules
 * @namespace {Marked}
 */
declare type MarkedRules = marked.Rules;

/**
 * @typedef {RendererExtension}
 * @namespace {Marked}
 */
declare type RendererExtension = Marked.RendererExtension;

/**
 * @typedef {RendererObject}
 * @namespace {Marked}
 */
declare type RendererObject = Marked.RendererObject;

/**
 * @typedef {Token}
 * @namespace {Marked}
 */
declare type Token = Marked.Token;

/**
 * @typedef {TokensList}
 * @namespace {Marked}
 */
declare type TokensList = Marked.TokensList;

/**
 * @typedef {TokenizerExtension}
 * @namespace {Marked}
 */
declare type TokenizerExtension = Marked.TokenizerExtension;

/**
 * @typedef {TokenizerObject}
 * @namespace {Marked}
 */
declare type TokenizerObject = Marked.TokenizerObject;

/**
 * @typedef {SluggerOptions}
 * @namespace {Marked}
 * @memberof Slugger
 */
declare type SluggerOptions = Marked.SluggerOptions;

/**
 * @class Parser
 * @extends {Parser} Marked.Parser
 * @namespace {Marked}
 */
declare class Parser extends Marked.Parser {}

/**
 * @extends {Marked.Slugger} Slugger
 * @namespace {Marked}
 */
declare class Slugger extends Marked.Slugger {}

/**
 * @extends {Marked.Tokenizer} Tokenizer
 * @namespace {Marked}
 */
declare class Tokenizer extends Marked.Tokenizer {}

/**
 * @extends {Marked.TextRenderer} TextRenderer
 * @namespace {Marked}
 */
declare class TextRenderer extends Marked.TextRenderer {}

/**
 * Options for marked, the markdown parser tool.
 * @type {MarkedOptions}
 * @example marked('# My Markdown Content', { gfm: true, headerIds: true, mangle: true })
 * @default {markedDefaults}
 * @see {marked}
 */
const markedOptions: MarkedOptions = {
	baseUrl: SITE_URL,
	gfm: true,
	headerIds: true,
	langPrefix: 'language-',
	mangle: true,
	pedantic: false,
	sanitize: false,
	silent: false,
	smartLists: false,
	smartypants: true,
	xhtml: false,
};

/**
 * Default options for the marked parser tool "marked".
 * @type {MarkedOptions}
 * @see {marked}
 * @default {
 *   baseUrl: null,
 *   breaks: false,
 *   extensions: [],
 *   gfm: true,
 *   headerIds: true,
 *   headerPrefix: '',
 *   highlight: null,
 *   langPrefix: 'language-',
 *   mangle: true,
 *   pedantic: false,
 *   renderer: null,
 *   sanitize: false,
 *   sanitizer: null,
 *   silent: false,
 *   smartLists: false,
 *   smartypants: false,
 *   tokenizer: null,
 *   walkTokens: null,
 *   xhtml: false
 * }
 */
const markedDefaults: MarkedOptions = marked.getDefaults();

export {
	LOCALE,
	LOCALE as SITE_LOCALE,
	ICNS_URL,
	SITE_URL,
	SITE_NAME,
	SITE_TAGLINE,
	SITE_TITLE,
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	GITHUB_URL,
	GITPOD_URL,
	VERCEL_URL,
	LICENSE_URL,
	AUTHOR_NAME,
	AUTHOR_URL,
	AUTHOR_TWITTER,
	AUTHOR_NAME as SITE_AUTHOR_NAME,
	AUTHOR_URL as SITE_AUTHOR_URL,
	AUTHOR_TWITTER as SITE_TWITTER,
	DISPLAY_ICONS_COUNT,
	markedOptions,
	markedOptions as MARKED_OPTIONS,
	markedDefaults,
	markedDefaults as MARKED_DEFAULTS,
};

export type {
	MarkedOptions,
	MarkedRules,
	SluggerOptions,
	Token,
	TokensList,
	MarkedExtension,
	RendererExtension,
	RendererObject,
	TokenizerExtension,
	TokenizerObject,
};
