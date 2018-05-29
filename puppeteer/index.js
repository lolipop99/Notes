/**
 * Created by bear on 2018.03.06.
 */
const puppeteer = require('puppeteer');

(async() => {
    // 启动pupptetter，实例browser
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    // 访问目标网站
    await page.goto('http://www.zhihu.com', {waitUntil: 'networkidle2'});
    
    // 生成图片
    await page.screenshot({
        path: './puppeteer/data/zhihu/home.png'
    });
    
    await browser.close();
})();