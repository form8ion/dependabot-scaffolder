import scaffoldConfig from './config';

export default async function ({projectRoot, vcs: {host, owner, name}}) {
  await scaffoldConfig({projectRoot});

  return {
    badges: {
      contribution: {
        dependabot: {
          text: 'Dependabot',
          link: 'https://dependabot.com/',
          img: `https://api.dependabot.com/badges/status?host=${host}&repo=${owner}/${name}`
        }
      }
    }
  };
}
