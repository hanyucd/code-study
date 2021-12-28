// ts -> .d.ts 翻译文件 @types/superagent -> js
import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import LeeAnalyzer from './dellAnalyzer';
// import LeeAnalyzer from './leeAnalyzer';

export interface IAnalyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  constructor(private url: string, private analyzer: IAnalyzer) {
    this.initSpiderProcess();
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(JSON.stringify(fileContent)); // 写入数据到文件
  }
  
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  // 写入数据到文件
  writeFile(fileContent: string) {
    fs.writeFileSync(this.filePath, JSON.stringify(fileContent));
  }
}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyzer = new LeeAnalyzer();
new Crowller(url, analyzer);
