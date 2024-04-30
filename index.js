import builtinModules from 'builtin-modules';

const moduleSet = new Set(builtinModules);
const NODE_PROTOCOL = 'node:';

export default function isBuiltinModule(moduleName) {
	if (typeof moduleName !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (moduleName.startsWith(NODE_PROTOCOL)) {
		moduleName = moduleName.slice(NODE_PROTOCOL.length);
	}

	return moduleSet.has(moduleName);
}
