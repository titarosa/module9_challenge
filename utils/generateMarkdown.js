function generateMarkdown(data) {
  return `
# ${data.title}

## Badges
${data.license ? `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-blue)` : ''}

## Description
${data.description || 'N/A'}

## Table of Contents
${data.installation ? '- [Installation](#installation)' : ''}
${data.usage ? '- [Usage](#usage)' : ''}
${data.contributing ? '- [Contributing](#contributing)' : ''}
${data.tests ? '- [Tests](#tests)' : ''}
${data.video ? '- [Video](#video)' : ''}
${data.license ? '- [License](#license)' : ''}
- [Questions](#questions)

## Installation
${data.installation || 'N/A'}

## Usage
${data.usage || 'N/A'}

## Contributing
${data.contributing || 'N/A'}

## Tests
${data.tests || 'N/A'}
[Node Application Terminal](./images/${data.image || 'placeholder.png'})



## Video
${data.video ? `[Watch Video Here](${data.video})` : 'N/A'}

## License
This project is licensed under the ${data.license || 'N/A'} license.

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email || 'N/A'}. You can find more of my work at [${data.github || 'N/A'}](https://github.com/${data.github || ''}).
  `;
}

module.exports = generateMarkdown;
