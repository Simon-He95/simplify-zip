<span><div align="center">![img](/assets/kv.png)</div></span>

Generate a zip file with a multi-level directory structure with simple parameters

## Install
```bash
  npm install simplify-zip
```

## Usage
```
# if type === 'folder' then will be created a folder with the name of the key else will be created a file with the name of the key
# picutes can use `import` or `require` or `url` to import the image 
import picture from "../public/favicon.jpg";

simplifyZIP({
  image: {
    content: {
      "favicon.jpg": {
        content: picture,
        type: "image",
      },
      "xxx.jpg": {
        content: '../assets/xxx.jpg',
        type: "image",
      },
    },
    type: "folder",
  },
  "hello.txt": {
    content: "hello world",
    type: "text",
  },
});
```

## Thanks
- [`jszip`](https://www.npmjs.com/package/jszip)
- [`file-saver`](https://www.npmjs.com/package/file-saver)
- [`simon-js-tool`](https://github.com/Simon-He95/simon-js-tool)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
