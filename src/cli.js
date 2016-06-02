#!/usr/bin/env node

import program from 'commander';
import { readFileSync } from 'fs';
import { version } from '../package.json';
import htconvert from './htconvert';

program
  .version(version)
  .option('-f, --file [.htaccess]', 'File containing .htaccess redirects')
  .parse(process.argv);

const htaccessRules = readFileSync(program.file, 'utf-8');
const nginxRules = htconvert(htaccessRules);
console.log(nginxRules);
