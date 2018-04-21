const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const fs = require("fs");

async function main(i) {
    const exists = fs.existsSync("./chapter" + i + ".result.json");
    if (exists) {
        try {
            const content = await fileData.getFileAsJSON("./chapter" + i + ".result.json");
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {
            const content = await fileData.getFileAsString("./chapter" + i + ".txt");
            let simplifiedContent = textMetrics.simplify(content);
            let metricsResult = textMetrics.createMetrics(content);
            fileData.saveStringToFile("./chapter" + i + ".debug.txt", simplifiedContent);
            fileData.savaJSONToFile("./chapter" + i + ".result.json", metricsResult);
            console.log(metricsResult);
        } catch (error) {
            console.log(error);
        }
    }
}

main(1);
main(2);
main(3);