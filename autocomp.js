const yargs = require("yargs");
const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

const argv = yargs
    .option('componentname', { alias: 'cn', string: true, default: 'Component' })
    .option('path', { alias: 'p', string: true, default: "./src/components/" })
    .argv;

const success = chalk.green.bold;
const error = chalk.red.bold;

let component = "import React from \"react\";";
argv._.map(value => component += `\nimport ${value[0].toUpperCase() + value.slice(1)} from \"${value + ".js"}\";`);
component += `\n\nfunction ${argv.componentname}(props) {\n\treturn (\n\t\t<>\n\t\t\t\n\t\t</>\n\t);\n}\n\nexport default ${argv.componentname};`;

fs.writeFile(path.resolve(argv.path + argv.componentname + ".js"), component)
    .then(() => console.log(success("Component created!")))
    .catch((e) => console.log(error(e)));