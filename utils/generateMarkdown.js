function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description || 'N/A'}

## Motivation
${data.motivation || 'N/A'}

## Table of Contents
${data.installation ? '- [Installation](#installation)' : ''}
${data.license ? '- [License](#license)' : ''}
${data.image ? '- [Image](#image)' : ''}

## License
This project is licensed under the ${data.license || 'N/A'} license.

## Image
![Image Description](./images/${data.image || 'placeholder.png'})

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email || 'N/A'}. You can find more of my work at [${data.github || 'N/A'}](https://github.com/${data.github || ''}).
  `;
}

module.exports = generateMarkdown;
