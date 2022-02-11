const nArr = [];
let n = Number(prompt('Introduce un numero positivo: '));
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
document.write(`<h4>${nArr.join(' ')}</h4>`);
