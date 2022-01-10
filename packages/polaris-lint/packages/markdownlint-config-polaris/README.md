## 安装

除了本包，你需要同时安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install markdownlint-config-polaris markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "./node_modules/markdownlint-config-polaris/index.json"
}
```
