import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';

import * as config from './config.js';
import {scaffold} from '../index.js';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(config, 'default');
  });

  teardown(() => sandbox.restore());

  test('that dependabot gets configured', async () => {
    const repoOwner = any.word();
    const repoName = any.word();
    const projectRoot = any.string();

    assert.deepEqual(
      await scaffold({projectRoot, vcs: {owner: repoOwner, name: repoName}}),
      {
        badges: {
          contribution: {
            dependabot: {
              img: `https://badgen.net/dependabot/${repoOwner}/${repoName}/?icon=dependabot`,
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
