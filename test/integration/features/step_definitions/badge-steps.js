import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the dependabot badge details are defined', async function () {
  assert.deepEqual(
    this.result.badges.contribution.dependabot,
    {
      text: 'Dependabot',
      link: 'https://dependabot.com/',
      img: `https://badgen.net/dependabot/${this.vcsOwner}/${this.vcsName}/?icon=dependabot`
    }
  );
});
