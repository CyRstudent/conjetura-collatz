const prompt = require('prompt-sync')();

let n = Number(prompt('Introduce un numero positivo: '));
process.stdout.write(`${n}, `);
do {
	if (n % 2 == 1) {
		n *= 3;
		n++;
	} else if (n % 2 == 0) {
		n = n / 2;
	}
	process.stdout.write(`${n}, `);
} while (n !== 1);
console.log(' ');
