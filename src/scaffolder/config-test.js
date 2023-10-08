import {promises as fs} from 'fs';
import {resolve} from 'path';

import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';

import scaffoldConfig from './config.js';

suite('config', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'copyFile');
  });

  teardown(() => sandbox.restore());

  test('that the file is created under the dependabot directory', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    assert.calledWith(
      fs.copyFile,
      resolve(__dirname, '..', 'templates', 'config.yml'),
      `${projectRoot}/.github/dependabot.yml`
    );
  });
});
