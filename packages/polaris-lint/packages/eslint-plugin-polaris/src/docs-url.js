const repoUrl = 'https://github.com/Yggdrasill-7C9/polaris/tree/master/packages/polaris-lint/packages/eslint-plugin-polaris';

module.exports = function docsUrl(ruleName) {
  return `${repoUrl}/docs/rules/${ruleName}.md`;
};
