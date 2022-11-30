

// TODO: Create a function to generate markdown for README
function generateMarkdown(responseObject) {
  return `# ${responseObject.project_title}
${responseObject.license}
## Description
${responseObject.disc}
## Motivation
${responseObject.Motivation}


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

## Built With:
* ${responseObject.languages}

## Credits
${responseObject.credits}


## Questions
you can email me at ${responseObject.email} if you have questions

## Github Link
https://github.com/${responseObject.username}
## Tests
${responseObject.testing}
## License
${responseObject.license}

## Additional Notes
${responseObject.other}`

}

module.exports = generateMarkdown;

