import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import url from "@rollup/plugin-url";
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: [
        pkg.source,
    ],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        url(),
        resolve(),
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: [Object.keys(pkg.dependencies || {})],
};
