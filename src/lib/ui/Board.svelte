<script lang="ts">
	import { onMount } from 'svelte';
	import { drawInnerSquare, drawLine, drawSquareGrid } from '$lib/utils';

	export let squareLength: number;
	export let color = 'black';

	let row = 4;
	let startPos = squareLength / 4;
	let endPos = squareLength + startPos;
	let midPos = squareLength - startPos;
	let innerSquareLength = squareLength * Math.sqrt(0.5);

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;

	onMount(() => {
		context = canvas.getContext('2d');

		context!.strokeStyle = color;

		drawSquareGrid(context, row, startPos);

		// Two Diagonals
		drawLine(context, startPos, startPos, endPos, endPos);
		drawLine(context, startPos, endPos, endPos, startPos);

		// drawLine(context, mid, start, start, mid);
		// drawLine(context, start, mid, mid, end);
		// drawLine(context, mid, end, end, mid);
		// drawLine(context, end, mid, mid, start);

		drawInnerSquare(context, midPos, -squareLength / 10, startPos, innerSquareLength);
	});
</script>

<canvas bind:this={canvas} width={squareLength * 2} height={squareLength * 2}>
	<slot />
</canvas>
