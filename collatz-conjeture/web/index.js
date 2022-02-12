/*
		<p style="text-align:center">
		Simulador de la conjetura de collatz</p>
 */

const throwErr = async () =>{
	const text = `
	<body>
		<h3>
			<p style="text-align:center">
				Tienes que introducir un numero antes de dar al botón de acceptar!
			</p>
		</h3>
		<h5>
			<p style="text-align:center">
				No intentes romperme la proxima vez porque no va a funcionar
			</p>
		</h5>
	</body>
	`;
	const res = await document.write(text);
	return res;
};


const nArr = [];

const ans = prompt('Introduce un numero positivo: ', '1');

if (
	typeof ans === 'undefined' ||
	ans === null
) {
	throwErr();
} else {
	let n = Number(ans);
	if (
		isNaN(n) ||
		n == 0 ||
		n == null

	) {
		throwErr();
	} else {
		nArr.push(n);
		do {
			if (n % 2 == 1) {
				n *= 3;
				n++;
			} else if (n % 2 == 0) {
				n = n / 2;
			}
			nArr.push(n);
		} while (n !== 1);
		console.log('Done');
		document.writeln(`
	<html>
		<body>
			<p style="text-align:center">
				<h4>${nArr.join(' => ')}</h4>
			</p>
		</body>
	</html>
	`);
	}
}

