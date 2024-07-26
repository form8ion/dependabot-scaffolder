// #### Import
// remark-usage-ignore-next 2
import stubbedFs from 'mock-fs';
// eslint-disable-next-line import/order
import {lift, test, scaffold} from './lib/index.js';

// remark-usage-ignore-next 4
stubbedFs({
  '.github': {},
  templates: stubbedFs.load('templates')
});

// #### Execute

await scaffold({projectRoot: process.cwd()});

if (await test({projectRoot: process.cwd()})) {
  await lift({vcs: {owner: 'form8ion', name: 'the-repo'}});
}
