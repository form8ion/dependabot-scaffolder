// #### Import
// remark-usage-ignore-next 3
import stubbedFs from 'mock-fs';
// eslint-disable-next-line import/order
import {resolve} from 'node:path';
import {lift, predicate, scaffold} from './lib/index';

// remark-usage-ignore-next 4
stubbedFs({
  '.github': {},
  templates: stubbedFs.load(resolve(...[__dirname, 'templates']))
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
