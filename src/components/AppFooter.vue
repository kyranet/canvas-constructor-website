<template>
	<footer class="footer">
		<div class="container">
			<div class="content has-text-centered">
				<p>
					<strong>Let's write clean code together!</strong>
				</p>
				<div class="columns">
					<div class="column is-two-fifths is-hidden-tablet"/>
					<div class="column">
						<a href="https://discord.gg/FpEFSyY" class="button is-info">
							<span>Have questions?</span>
							<span class="icon"><i class="fab fa-discord"/></span>
						</a>
					</div>
					<div class="column">
						<a href="https://www.npmjs.com/package/canvas-constructor" class="button is-info">
							<span>Published using:</span>
							<span class="icon"><i class="fab fa-npm"/></span>
						</a>
					</div>
					<div class="column">
						<a href="https://www.patreon.com/kyranet" class="button is-info">
							<span>Support Kyra:</span>
							<span class="icon"><i class="fab fa-patreon"/></span>
						</a>
					</div>

					<div class="column is-two-fifths is-hidden-tablet"/>
				</div>
				<stats />
			</div>
		</div>
	</footer>
</template>

<script>
import Stats from './Stats.vue';

export default {
	name: 'AppFooter',
	components: { Stats	}
};
</script>
