const { join } = require('path');
// const { readdirSync } = require('fs');
const { spawnSync } = require('child_process');

const projects = ['slide1', 'slide2'];

function build(projectName) {
  const contextPath = join(__dirname, projectName);
  console.log('build project:', contextPath);
  const spawnOptions = {
    stdio: 'inherit',
    cwd: contextPath,
  };
  try {
    spawnSync('yarn', ['install'], spawnOptions);
    spawnSync('yarn', ['build'], spawnOptions);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

Promise.all(projects.map((projectName) => build(projectName)))
  .then(() => {
    console.log('Build successful!');
    process.exit(0);
  })
  .catch((err) => {
    console.log('Build failed with error!');
    console.log(err);
    process.exit(1);
  });
