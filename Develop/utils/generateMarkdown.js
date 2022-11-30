// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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

