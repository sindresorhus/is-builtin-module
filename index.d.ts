/**
 * Returns `true` if the given `moduleName` is a Node.js builtin module, `false` otherwise.
 *
 * @example
 * ```
 * isBuiltinModule('fs/promises');
 * //=> true
 *
 * isBuiltinModule('node:fs');
 * //=> true
 * 
 * isBuiltinModule('unicorn');
 * //=> false
 * ```
 *
 * @param {string} moduleName Name of the module
 */
declare function isBuiltinModule(moduleName: string): boolean;

export = isBuiltinModule;
