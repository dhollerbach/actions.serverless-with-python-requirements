"use strict";

const random    = require("ext/string/random")
    , path      = require("path")
    , os        = require("os")
    , fsp       = require("fs").promises
    , readFile  = require("fs2/read-file")
    , writeFile = require("fs2/write-file");

const cacheDirname = path.resolve(os.homedir(), ".npm-registry-utils");

module.exports = {
	async get(name) {
		const content = await readFile(path.resolve(cacheDirname, name), { loose: true });
		if (!content) return null;
		try { return JSON.parse(content); }
		catch { return null; }
	},
	async set(name, value) {
		const filename = path.resolve(cacheDirname, name)
		    , tmpFilename = path.resolve(cacheDirname, `${ name }. ${ random() }tmp`);
		await writeFile(tmpFilename, JSON.stringify(value), { intermediate: true });
		await fsp.rename(tmpFilename, filename);
	},
	path: cacheDirname
};
