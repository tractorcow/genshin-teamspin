import type { default as genshinNamespace } from 'genshin-db';

const genshindbBase = require('./genshindb-nodata.js');

// Fixes some issues with lazy loading genshindb
if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require("buffer").Buffer;
}

export type genshinDbType = typeof genshinNamespace

const genshindb = genshindbBase as genshinDbType

export default genshindb
