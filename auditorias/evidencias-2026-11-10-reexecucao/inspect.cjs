const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
 const browser = await chromium.launch();
 try {
  for (const [device,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
   const context=await browser.newContext({viewport:{width,height},isMobile:device==='mobile',hasTouch:device==='mobile'});
   for(const [slug,url] of [['home',''],['servicos','servicos/'],['contato','contato/']]) {
    const page=await context.newPage(); const errors=[];
    page.on('pageerror',e=>errors.push(String(e)));
    page.on('requestfailed',r=>errors.push({url:r.url(),error:r.failure()}));
    await page.goto('https://www.thgoplus.com.br/'+url,{waitUntil:'networkidle',timeout:60000});
    await page.screenshot({path:path.join(__dirname,`${slug}-${device}.png`)});
    await page.screenshot({path:path.join(__dirname,`${slug}-${device}-full.png`),fullPage:true});
    const dom=await page.evaluate(()=>({title:document.title,lang:document.documentElement.lang,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e=>({tag:e.tagName,text:e.textContent.trim()})),main:document.querySelectorAll('main,[role="main"]').length,links:[...document.querySelectorAll('a')].map(e=>({text:e.textContent.trim(),href:e.href})),fields:[...document.querySelectorAll('input,textarea,select')].map(e=>({type:e.type,id:e.id,labels:[...e.labels||[]].map(l=>l.textContent.trim())}))}));
    fs.writeFileSync(path.join(__dirname,`${slug}-${device}-dom.json`),JSON.stringify({date:new Date().toISOString(),viewport:{width,height},dom,errors},null,2));
    await page.close();
   }
   await context.close();
  }
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
