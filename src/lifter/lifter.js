import deepmerge from 'deepmerge';

import {scaffold as scaffoldBadge} from '../badge/index.js';

export default async function ({vcs}) {
  return deepmerge(scaffoldBadge({vcs}), {branchesToVerify: ['dependabot/**']});
}
