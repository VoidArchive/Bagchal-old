<script lang="ts">
	import { onMount } from 'svelte';

	let outerSquareLength = 500;
	let innerSquareLength = Math.sqrt(Math.pow(outerSquareLength, 2) / 2);
	let diagonal = outerSquareLength * Math.sqrt(2);

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	onMount(() => {
		context = canvas.getContext('2d');

		context!.strokeStyle = 'black';
		context!.strokeRect(0, 0, 700, 700);

		context!.strokeRect(100, 100, outerSquareLength, outerSquareLength);

		context!.translate(350, -40);
		context!.rotate((45 * Math.PI) / 180);
		context!.strokeRect(100, 100, innerSquareLength, innerSquareLength);

		context!.beginPath();
		context!.moveTo(100, 100);
		context!.lineTo(450, 450);
		context!.stroke();
	});
</script>

<canvas bind:this={canvas} width="700" height="700" />

<slot />
