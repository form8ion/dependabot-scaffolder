import {assert} from 'chai';
import any from '@travi/any';
import {scaffold} from '.';

suite('scaffolder', () => {
  test('that dependabot gets configured', async () => {
    const vcsHost = any.word();
    const repoOwner = any.word();
    const repoName = any.word();

    assert.deepEqual(
      await scaffold({vcs: {host: vcsHost, owner: repoOwner, name: repoName}}),
      {
        badges: {
          contribution: {
            dependabot: {
              img: `https://api.dependabot.com/badges/status?host=${vcsHost}&repo=${repoOwner}/${repoName}`,
              text: 'Dependabot',
              link: 'https://dependabot.com/'
            }
          }
        }
      }
    );
  });
});
