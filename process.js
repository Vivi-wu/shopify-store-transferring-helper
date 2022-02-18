const fs = require('fs');
const sourcePath = './source-pages.json';
const resultPath = './target-pages.json';

function main () {
  let source = fs.readFileSync(sourcePath, 'utf8');
  let fileData = JSON.parse(source);
  let pagesArry = fileData.filter(ele => ele.title.includes(' Size Chart')).map(ele => {
    return { "title": ele.title, "body_html": ele.body_html }
  })
  fs.writeFileSync(resultPath, JSON.stringify(pagesArry));
  console.log(`process: ${pagesArry.map(ele => ele.title).join('\n')} done.`);
}

main();
