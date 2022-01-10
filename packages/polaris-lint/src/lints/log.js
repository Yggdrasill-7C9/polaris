import chalk from 'chalk';
import { PKG_NAME, UNICODE } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
  success(text) {
    console.log(green(text));
  },
  info(text) {
    console.info(blue(text));
  },
  warn(text) {
    console.info(yellow(text));
  },
  error(text) {
    console.error(red(text));
  },
  result(text, pass) {
    console.info(
      blue(`[${PKG_NAME}] ${text}`),
      pass ? green(UNICODE.success) : red(UNICODE.failure),
    );
  },
};
