import {assert} from 'chai';
import lift from './lifter';

suite('lift', () => {
  test('that dependabot branches are defined as branches to verify', () => {
    assert.include(lift().branchesToVerify, 'dependabot/**');
  });
});
