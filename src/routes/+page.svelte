<script lang="ts">
	import Canvas from '$lib/UI/Board.svelte';

	let squareLength = 500;
	let color = 'blue';
</script>

<main class="grid place-items-center">
	<Canvas {squareLength} {color} />
</main>
