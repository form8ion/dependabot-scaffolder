// #### Import
// remark-usage-ignore-next 2
import stubbedFs from 'mock-fs';
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
