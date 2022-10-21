<script lang="ts">
	import { width, height } from './store';

	import Board from './ui/Board.svelte';
	import Drag from './ui/Drag.svelte';
</script>

<svelte:window bind:innerWidth={$width} bind:innerHeight={$height} />

<Board squareLength={500} />

<Drag />
