import fs from 'fs';
import path from 'path';
import readdir from 'recursive-readdir';

import generateVariableName from '../src/utils/generateVariableName';

async function generateCSS() {
  let files = await readdir(path.join(__dirname, '..', 'src', 'variables'));
  let result = fs.readFileSync(path.join(__dirname, '..', 'src', 'index.css'), { encoding: 'utf-8' });

  // Remove non-collection files
  files = files.filter((file) => {
    return file.indexOf('.stories.') < 0;
  });

  result += 'body {';

  files.forEach((file) => {
    let variableCollection = require(file).default;

    variableCollection.forEach((variableDefinition) => {
      result += `\n${generateVariableName({
        order: variableDefinition.order,
        prefix: variableDefinition.prefix
      })}: ${variableDefinition.value};`;
    });
  });

  result += '}';

  if (!fs.existsSync(path.join(__dirname, '..', 'lib'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'lib'));
  }

  fs.writeFileSync(path.join(__dirname, '..', 'lib', 'index.css'), result);
}

generateCSS();
