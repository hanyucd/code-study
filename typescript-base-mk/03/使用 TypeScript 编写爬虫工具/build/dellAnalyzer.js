"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
class DellAnalyzer {
    getCourseInfo(html) {
        const $ = cheerio_1.default.load(html);
        const courseItems = $('.course-item');
        const courseInfos = [];
        courseItems.map((index, element) => {
            const descs = $(element).find('course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1], 10);
            courseInfos.push({ title, count });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos
        };
    }
    generateJSONContent(courseInfo, filePath) {
        let fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }
    analyze(html, filePath) {
        const courseInfo = this.getCourseInfo(html);
        const fileContent = this.generateJSONContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    }
}
exports.default = DellAnalyzer;
