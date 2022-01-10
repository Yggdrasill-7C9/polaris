import path from 'path';
import babel from 'rollup-plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import rollupResolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

const external = Object.keys(pkg.dependencies || '');
const globals = external.reduce((prev, current) => {
	const newPrev = prev;
	newPrev[current] = current;
	return newPrev;
}, {});

const defaultConfig = {
	input: pkg.main,
	output: {
		file: path.resolve(__dirname, pkg.lib),
		format: 'cjs',
		banner: '#!/usr/bin/env node',
		globals
	},
	external,
	plugins: [
		json(),
		terser(),
		rollupResolve({
			// 查找和打包node_modules中的第三方模块
			customResolveOptions: {
				moduleDirectory: 'src'
			}
		}),
		nodeResolve({
			extensions,
			modulesOnly: true
		}),
		babel({
			exclude: 'node_modules/**',
			extensions
		})
	]
};

export default defaultConfig;