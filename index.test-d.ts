import {expectType, expectError} from 'tsd';
import isBuiltinModule from './index.js';

expectType<(moduleName: string) => boolean>(isBuiltinModule);
expectError<() => boolean>(isBuiltinModule);
