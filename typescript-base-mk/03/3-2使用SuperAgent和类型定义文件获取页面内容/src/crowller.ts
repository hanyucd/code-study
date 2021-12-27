// ts -> .d.ts 翻译文件 @types/superagent -> js
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course {
  title: string;
  count: number;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${ this.secret }`;
  // private rawHtml = '';

  constructor() {
    this.initSpiderProcess();
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const courseInfo = this.getCourseInfo(html);
    console.log('课程内容：', courseInfo);
    const fileContent = this.generateJSONContent(courseInfo);
    // 写入数据到文件
    const filePath = path.resolve(__dirname, '../data/course.json');
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }
  
  async getRawHtml() {
    const result = await superagent.get(this.url);
    // this.rawHtml = result.text;
    return result.text;
  }

  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    // console.log(courseItems.length);
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find('course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(
        descs.eq(1).text().split('：')[1],
        10
      );
      // console.log(title, count);
      courseInfos.push({ title, count });
    });

    return {
      time: new Date().getTime(),
      data: courseInfos
    };
  }

  generateJSONContent(courseInfo: CourseResult) {
    const filePath = path.resolve(__dirname, '../data/course.json');
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }
}

const crowller = new Crowller();
