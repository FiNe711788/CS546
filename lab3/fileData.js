const fs = require("fs");

module.exports = {
    getFileAsString: async function (path) {
        return new Promise((fulfill, reject) => {
            if (!path)
                reject("You must provide a path");
            if (typeof path !== "string")
                reject("Invalid path");
            else {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err)
                        reject(err);
                    else
                        fulfill(data);
                });
            }
        });
    },
    getFileAsJSON: async function (path) {
        return new Promise((fulfill, reject) => {
            if (!path)
                reject("You must provide a path");
            if (typeof path !== "string")
                reject("Invalid path");
            else {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err)
                        reject(err);
                    else
                        fulfill(JSON.parse(data));
                });
            }
        });
    },
    saveStringToFile: async function (path, text) {
        return new Promise((fulfill, reject) => {
            if (!path || !text)
                reject("You must provide text and a path");
            if (typeof path !== "string" || typeof text !== "string")
                reject("Invalid text or path");
            else {
                fs.writeFile(path, text, function (err) {
                    if (err)
                        reject(err);
                    else
                        fulfill(true);
                });
            }
        });
    },
    savaJSONToFile: async function (path, obj) {
        return new Promise((fulfill, reject) => {
            if (!path || !obj || typeof obj !== "object")
                reject("Invalid input");
            else {
                fs.writeFile(path, JSON.stringify(obj), function (err) {
                    if (err)
                        reject(err);
                    else
                        fulfill(true);
                });
            }
        });
    }
}