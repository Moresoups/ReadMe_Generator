

// TODO: Create a function to generate markdown for README
function generateMarkdown(responseObject) {
  return `# ${responseObject.project_title}
${responseObject.license}
## Description
${responseObject.disc}
## Motivation
${responseObject.Motivation}


## Table of Contents
- [Installation](#Installation)
- [Usage](#usage)
- [credits](#credits)
- [How to Contribute](#cont)
- [Tests](#test)
- [Languages](#languages)
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
https://github.com/${responseObject.github}

## Tests
${responseObject.testing}

## Built With:
* ${responseObject.languages}

## License
${responseObject.license}

## Additional Notes and extra repo link
${responseObject.other}
${responseObject.repo}
`

}

module.exports = generateMarkdown;

