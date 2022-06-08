import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import _ from 'lodash';

export default {
	input: './dist/api/index.js',
	output: {
		dir: 'build',
		format: 'cjs',
	},
	plugins: [
		typescript({ compilerOptions: { module: 'CommonJS' } }),
		commonjs({ extensions: ['.js', '.ts'] }),
		resolve({
			moduleDirectories: ['node_modules'],
		}),
		json(),
		terser(),
	],
	external: ['lodash'],
};
