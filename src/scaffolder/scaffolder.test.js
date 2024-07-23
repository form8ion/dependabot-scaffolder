import any from '@travi/any';
import {describe, it, vi, expect} from 'vitest';

import scaffoldConfig from './config.js';
import {scaffold} from '../index.js';

vi.mock('./config.js');

describe('scaffolder', () => {
  it('should configure dependabot', async () => {
    const repoOwner = any.word();
    const repoName = any.word();
    const projectRoot = any.string();

    expect(await scaffold({projectRoot, vcs: {owner: repoOwner, name: repoName}})).toEqual({
      badges: {
        contribution: {
          dependabot: {
            img: `https://badgen.net/dependabot/${repoOwner}/${repoName}/?icon=dependabot`,
            text: 'Dependabot',
            link: 'https://dependabot.com/'
          }
        }
      }
    });
    expect(scaffoldConfig).toHaveBeenCalledWith({projectRoot});
  });
});
