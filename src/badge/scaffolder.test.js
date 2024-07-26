import any from '@travi/any';
import {describe, expect, it} from 'vitest';

import scaffoldBadge from './scaffolder.js';

describe('badge scaffolder', () => {
  const vcsOwner = any.word();
  const vcsName = any.word();

  it('should define badge details', async () => {
    expect(scaffoldBadge({vcs: {owner: vcsOwner, name: vcsName}})).toEqual({
      badges: {
        contribution: {
          dependabot: {
            text: 'Dependabot',
            link: 'https://dependabot.com/',
            img: `https://badgen.net/dependabot/${vcsOwner}/${vcsName}/?icon=dependabot`
          }
        }
      }
    });
  });
});
