// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute
scaffold({
  projectRoot: process.cwd(),
  vcs: {owner: 'form8ion', name: 'the-repo'}
});

// remark-usage-ignore-next
stubbedFs.restore();
