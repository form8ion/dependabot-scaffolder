import scaffoldConfig from './config';

export default async function ({projectRoot, vcs: {owner, name}}) {
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
