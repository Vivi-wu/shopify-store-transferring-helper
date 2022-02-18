require('dotenv').config();
const fs = require('fs');
const Shopify = require('shopify-api-node');

const sourcePath = './source-pages.json';
const accessToken = process.env.FROM_ACCESS_TOKEN;
const shopName = process.env.FROM_SHOP_NAME;
const shopify = new Shopify({shopName, accessToken});

function main () {
  shopify.page.list()
  .then(data => {
    fs.writeFileSync(sourcePath, JSON.stringify(data));
    console.log(`Retrieve ${data.length} pages done.`)
  })
  .catch(err => console.error('get pages ', err));

  shopify.page.count()
  .then(count => {
    console.log(`Store pages count: ${count}`);
  })
  .catch(err => console.error('get pages count ', err));
}

main();