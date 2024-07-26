export default function ({vcs}) {
  return {
    badges: {
      contribution: {
        dependabot: {
          text: 'Dependabot',
          link: 'https://dependabot.com/',
          img: `https://badgen.net/dependabot/${vcs.owner}/${vcs.name}/?icon=dependabot`
        }
      }
    }
  };
}
