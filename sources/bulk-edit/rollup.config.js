import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import replaceImportsWithVars from 'rollup-plugin-replace-imports-with-vars';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
import commit from 'rollup-plugin-commit';

const extensions = ['.js', '.jsx']

const globals = {
  jss: 'craftercms.libs.jss',
  react: 'craftercms.libs.React',
  '@emotion/css': 'craftercms.libs.EmotionCSS',
  '@emotion/css/create-instance': 'craftercms.libs.createEmotion',
  'react-dom': 'craftercms.libs.ReactDOM',
  'react-intl': 'craftercms.libs.ReactIntl',
  '@mui/material': 'craftercms.libs.MaterialUI',
  '@craftercms/studio-ui': 'craftercms.libs.StudioUI'
}

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'es',
      globals
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining'
      ]
    }),
    external(),
    json(),
    replaceImportsWithVars({ varType: 'var', replacementLookup: globals }),
    resolve({ extensions }),
    commonjs(),
    copy({
      targets: [{ src: 'dist/*', dest: '../../config/studio/plugins/js/org/craftercms/plugin/sidebar/bulkedit' }],
      hook: 'writeBundle'
    }),
    commit({
      targets: [
        '../../config/studio/plugins/js/org/craftercms/plugin/sidebar/bulkedit/index.js'
      ]
    })
  ]
}
