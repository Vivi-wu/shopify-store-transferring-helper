## Copy Online Store Pages from one Shopify store to another

The demo shows how to get all the Online Store Pages in one store, and then upload all those pages which contains _Size Chart_ in the title to another store.

### Step 0: Create private apps

Create a Shopify private app separately in two stores. Make sure the app can view or manage Online Store pages.

Access scopes: read_online_store_pages, write_online_store_pages

### Step 1: Download

- open .env
- replace the value of `FROM_ACCESS_TOKEN`, which is the Password begins with `shppa_*` in the Admin API section
- replace the value of `FROM_SHOP_NAME`, which is the `*` part from your Shopify admin url `https://*.myshopify.com/admin`


```shell
npm start
```

### Step 2: Processing

```shell
npm run process
```

### Step 3: Upload

- open .env
- replace the value of `TO_ACCESS_TOKEN`
- replace the value of `TO_SHOP_NAME`

```shell
npm run move
```
