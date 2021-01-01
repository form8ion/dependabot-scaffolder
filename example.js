// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {lift, predicate, scaffold} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute
scaffold({
  projectRoot: process.cwd(),
  vcs: {owner: 'form8ion', name: 'the-repo'}
});

predicate({projectRoot: process.cwd()});

lift();

// remark-usage-ignore-next
stubbedFs.restore();
