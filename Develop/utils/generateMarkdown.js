function renderLicenseBadge(license) {
  let licBadge = '';
  switch (license) {
    case 'MIT':
      licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GPLv2':
      licBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    default:
      break;
  }
  return licBadge
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responseObject) {
  return `# ${responseObject.project_title}
${renderLicenseBadge(responseObject.license)}
## Description
${responseObject.disc}
## Table of Contents
- [Motivation](#Motivation)
- [Usage](#usage)
- [credits](#credits)
- [How to Contribute](#cont)
- [Tests](#test)
- [License](#license)
## Installation
${responseObject.installation}
## Usage
${responseObject.usage}
## Credits
${responseObject.credits}
## Questions
you can email me at ${responseObject.email} if you have questions
## Github Link
https://github.com/${responseObject.username}
## Tests
${responseObject.testing}
## License
${renderLicenseSection(responseObject.license)}

## Additional Notes
${responseObject.other}`

}

module.exports = generateMarkdown;

