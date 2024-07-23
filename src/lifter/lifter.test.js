import {describe, expect, it} from 'vitest';

import lift from './lifter.js';

describe('lifter', () => {
  it('should define dependabot branches as ones to verify', async () => {
    expect((await lift()).branchesToVerify).toEqual(['dependabot/**']);
  });
});
