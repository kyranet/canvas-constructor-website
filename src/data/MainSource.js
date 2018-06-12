import DocsSource from './DocsSource';
import semver from 'semver';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs', 'webpack', 'indev-old', 'v8']);
export default new DocsSource({
	id: 'CanvasConstructor',
	name: 'Main library',
	global: 'CanvasConstructor',
	repo: 'kyranet/canvasConstructor',
	defaultTag: 'stable',
	branchFilter: branch => {
		if (/^greenkeeper/g.test(branch)) return false;
		return !branchBlacklist.has(branch);
	},
	tagFilter: tag => semver.gte(tag, '1.1.0')
});
