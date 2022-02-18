require('dotenv').config();
const fs = require('fs');
const Shopify = require('shopify-api-node');

const targetPath = './target-pages.json'
const accessToken = process.env.TO_ACCESS_TOKEN;
const shopName = process.env.TO_SHOP_NAME;
const shopify = new Shopify({shopName, accessToken});

function main () {
  let source = fs.readFileSync(targetPath, 'utf8');
  let fileData = JSON.parse(source);

  fileData.forEach((element, index) => {
    setTimeout(() => {
      shopify.page.create({
        title: element.title,
        body_html: element.body_html
      })
      .then(data => console.log(data.id, data.title))
      .catch(err => console.error(err));
    }, 2000*index)
  });
}

main();
