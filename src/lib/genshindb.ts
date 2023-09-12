import type { default as genshinNamespace } from 'genshin-db';

export type genshinDbType = typeof genshinNamespace

const genshindbBase = require('./genshindb-nodata.js');

declare global {
  interface Window {
    GenshinDb?: genshinDbType;
  }
}

// Fixes some issues with lazy loading genshindb
if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require("buffer").Buffer;
}

// Sometimes window.GenshinDB works (dist build), sometimes the require works (dev)
// I do not know why we need both
const genshindb = window.GenshinDb || genshindbBase as genshinDbType

export default genshindb
