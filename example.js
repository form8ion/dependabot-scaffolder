// #### Import
// remark-usage-ignore-next 2
import stubbedFs from 'mock-fs';
// eslint-disable-next-line import/order
import {lift, predicate, scaffold} from './lib/index.js';

// remark-usage-ignore-next 4
stubbedFs({
  '.github': {},
  templates: stubbedFs.load('templates')
});

// #### Execute

(async () => {
  await scaffold({
    projectRoot: process.cwd(),
    vcs: {owner: 'form8ion', name: 'the-repo'}
  });

  if (await predicate({projectRoot: process.cwd()})) {
    await lift();
  }
})();
