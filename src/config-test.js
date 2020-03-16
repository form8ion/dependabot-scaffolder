import {promises as fs} from 'fs';
import {resolve} from 'path';
import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';
import * as mkdir from '../thirdparty-wrappers/make-dir';
import scaffoldConfig from './config';

suite('config', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(mkdir, 'default');
    sandbox.stub(fs, 'copyFile');
  });

  teardown(() => sandbox.restore());

  test('that the file is created under the dependabot directory', async () => {
    const projectRoot = any.string();
    const pathToCreatedDirectory = any.string();
    mkdir.default.withArgs(`${projectRoot}/.dependabot`).resolves(pathToCreatedDirectory);

    await scaffoldConfig({projectRoot});

    assert.calledWith(
      fs.copyFile,
      resolve(__dirname, '..', 'templates', 'config.yml'),
      `${pathToCreatedDirectory}/config.yml`
    );
  });
});
