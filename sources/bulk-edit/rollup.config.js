import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import replaceImportsWithVars from 'rollup-plugin-replace-imports-with-vars';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
const { exec } = require('child_process');

const extensions = ['.js', '.jsx']

const globals = {
  jss: 'craftercms.libs.jss',
  react: 'craftercms.libs.React',
  '@emotion/css': 'craftercms.libs.EmotionCSS',
  '@emotion/css/create-instance': 'craftercms.libs.createEmotion',
  'react-dom': 'craftercms.libs.ReactDOM',
  'react-intl': 'craftercms.libs.ReactIntl',
  // '@mui/material': 'craftercms.libs.MaterialUI',
  '@craftercms/studio-ui': 'craftercms.libs.StudioUI'
}

function cleanName(name) {
  if (name.includes('/')) {
    const i = name.lastIndexOf('/');
    console.log(name.substr(i + 1));
    return name.substr(i + 1);
  }
  return name;
}

function commitMessage(tpl, file) {
  const now = new Date();
  const date = `${now.getFullYear()}.${now.getDate()}.${now.getDay()}`;
  const time = `${now.getHours()}:${now.getMinutes()}`;
  return tpl.replace('{file}', file).replace('{date}', date).replace('{time}', time);
}

function rollupPluginCommit() {
  const target = '../../config/studio/plugins/js/org/craftercms/plugin/sidebar/bulkedit/index.js';
  const message = 'Updates to {file} @ {date} {time}';
  return {
    name: 'rollup-plugin-commit',
    writeBundle() {
      if (target) {
        const callback = (op) => (error, stdout, stderr) => (error)
            ? console.error(stderr || `Failed to ${op} "${target}" \n ${error.cmd}. ${stdout ? ('\n' + stdout) : ''}`)
            : console.log(stdout || `Git ${op} successful for "${target}".`);
        exec(
          `git add ${target} ${
            '&&'
          } git commit ${target} -m "${commitMessage(message, cleanName(target))}"`,
          callback('add/commit')
        );
      }
    }
  };
}

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'es',
      globals,
    }
  ],
  external: [
    'rxjs',
    'rxjs/operators',
    'react',
    'react-dom',
    'CrafterCMSNext',
    '@craftercms/studio'
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
    rollupPluginCommit()
  ]
}
