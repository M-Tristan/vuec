import path from 'path';
const CWD = process.cwd();
require('dotenv-safe').config({
    allowEmptyValues: true,
    example: path.resolve(CWD, './.env')
});

import('./app');