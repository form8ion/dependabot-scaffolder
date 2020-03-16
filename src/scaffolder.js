export default function ({vcs: {host, owner, name}}) {
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
