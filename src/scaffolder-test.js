import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as config from './config';
import {scaffold} from '.';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(config, 'default');
  });

  teardown(() => sandbox.restore());

  test('that dependabot gets configured', async () => {
    const vcsHost = any.word();
    const repoOwner = any.word();
    const repoName = any.word();
    const projectRoot = any.string();

    assert.deepEqual(
      await scaffold({projectRoot, vcs: {host: vcsHost, owner: repoOwner, name: repoName}}),
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
    assert.calledWith(config.default, {projectRoot});
  });
});
