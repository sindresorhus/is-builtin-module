import {expectType, expectError} from 'tsd';
import isBuiltinModule = require('.');

expectType<(moduleName: string) => boolean>(isBuiltinModule);
expectError<() => boolean>(isBuiltinModule);
