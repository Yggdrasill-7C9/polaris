import ora from 'ora';
import scanAction from './actions/scan';
import initAction from './actions/init';
import { PKG_NAME } from './utils/constants';
import printReport from './utils/print-report';


export const init = async (options) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};

export const scan = async (options) => {
  const checking = ora();
  checking.start(`执行 ${PKG_NAME} 代码检查`);

  const report = await scanAction(options);
  const { results, errorCount, warningCount } = report;
  let type = 'succeed';
  if (errorCount > 0) {
    type = 'fail';
  } else if (warningCount > 0) {
    type = 'warn';
  }

  checking[type]();
  if (results.length > 0) printReport(results, false);

  return report;
};
