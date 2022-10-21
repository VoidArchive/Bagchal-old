export function drawLine(
	context: CanvasRenderingContext2D | null,
	x: number,
	y: number,
	dx: number,
	dy: number
) {
	// x and y starting coordinates, dx, dy end coordinates
	context?.beginPath();
	context?.moveTo(x, y);
	context?.lineTo(dx, dy);
	context?.stroke();
	context?.closePath();
}

export function drawSquareGrid(
	context: CanvasRenderingContext2D | null,
	row: number,
	startPos: number
) {
	//  both row and column are same since we are creating a square grid
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < row; j++) {
			context?.strokeRect(startPos + startPos * i, startPos + startPos * j, startPos, startPos);
		}
	}
}
export function drawInnerSquare(
	context: CanvasRenderingContext2D | null,
	x: number,
	y: number,
	startPos: number,
	innerSquareLength: number
) {
	context?.translate(x, y);
	context?.rotate((45 * Math.PI) / 180);
	context?.strokeRect(startPos, startPos, innerSquareLength, innerSquareLength);
}
