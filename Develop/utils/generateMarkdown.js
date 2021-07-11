// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data)
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Questions
  [GitHub Link](https://github.com/${data.github})
  ${data.email}

  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
