const nArr = [];
let n = Number(prompt('Introduce un numero positivo: '));

if (n == NaN) {
	document.write(`
	<body>
		<p style="text-align:center">
			<h3>
				Tienes que introducir un numero antes de dar al botón de acceptar!
			</h3>
			<h5>
				No intentes romperme la proxima vez porque no va a funcionar
			</h5>
		</p>
	</body>
	`);
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
