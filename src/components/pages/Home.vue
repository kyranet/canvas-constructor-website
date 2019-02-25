<template>
	<div class="container">
		<section class="section has-text-centered">
			<img class="logo" src="static/canvasconstructor.svg">
			<br>
			<br>
			<div class="tile is-ancestor">
				<b-tooltip
					class="tile is-parent"
					label="The stable branch is currently unsupported awaiting a stable discord.js v12 release! Please use the master branch for now."
					type="is-danger"
					multilined
				>
					<article class="tile is-child box content">
						<h5><strong>Install Stable</strong></h5>
						<pre v-highlightjs><code class="bash">npm install canvas-constructor</code></pre>
					</article>
				</b-tooltip>
				<div class="tile is-parent">
					<article class="tile is-child box content">
						<h5><strong>Install Master</strong></h5>
						<pre v-highlightjs><code class="bash">npm install kyranet/canvasConstructor</code></pre>
					</article>
				</div>
			</div>
			<div class="tile is-ancestor">
				<div class="tile is-parent">
					<article class="tile is-child box content has-text-left">
						<h5><strong>About:</strong></h5>
						<p>
							A ES6 function for node-canvas with built-in functions and chained methods.
						</p>
						<p>
							Coming soon...
						</p>
					</article>
				</div>
				<div class="tile is-parent">
					<article class="tile is-child box content has-text-left">
						<h5><strong>Key Features:</strong></h5>
						<ul>
							<li>Fully chainable API.</li>
							<li>Portable.</li>
							<li>Works on browser.</li>
							<li>Works on any version of canvas.</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default { name: 'Home' };
</script>
