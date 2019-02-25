import DocsSource from './DocsSource';
import semver from 'semver';

const branchBlacklist = new Set(['gh-pages', 'docs', 'webpack']);
export default new DocsSource({
	id: 'CanvasConstructor',
	name: 'Main library',
	global: 'CanvasConstructor',
	repo: 'kyranet/canvasConstructor',
	defaultTag: 'master',
	branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot'),
	tagFilter: tag => semver.gte(tag, '2.0.0')
});
