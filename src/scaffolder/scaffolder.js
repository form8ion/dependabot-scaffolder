import {info} from '@travi/cli-messages';
import scaffoldConfig from './config';

export default async function ({projectRoot, vcs: {owner, name}}) {
  info('Configuring Dependabot');

  await scaffoldConfig({projectRoot});

  return {
    badges: {
      contribution: {
        dependabot: {
          text: 'Dependabot',
          link: 'https://dependabot.com/',
          img: `https://badgen.net/dependabot/${owner}/${name}/?icon=dependabot`
        }
      }
    }
  };
}
