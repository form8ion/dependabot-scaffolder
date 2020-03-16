import {scaffold} from './lib/index.cjs';

scaffold({
  projectRoot: process.cwd(),
  vcs: {host: 'GitHub', owner: 'form8ion', name: 'the-repo'}
});
