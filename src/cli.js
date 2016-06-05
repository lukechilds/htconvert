#!/usr/bin/env node

import program from 'commander';
import { readFile } from 'fs-promise';
import getStdin from 'get-stdin';
import { version } from '../package.json';
import htconvert from './htconvert';

program
  .version(version)
  .option('-f, --file [.htaccess]', 'File containing .htaccess redirects')
  .parse(process.argv);

const readHtaccess = program.file ? readFile(program.file, 'utf-8') : getStdin();

readHtaccess
  .then(htaccess => htaccess ? htconvert(htaccess) : program.help())
  .then(console.log);
