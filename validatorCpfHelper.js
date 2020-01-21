const isBlackList = (strCPF) => {
	const blackList = [...Array(11)].map((val, idx) => idx.toString().repeat(11));

	if (blackList.includes(strCPF)) {
		return true;
	}
	return false;
};

const removeMask = (strValue) => {
	let formatedValue = strValue.replace('.', '')
		.replace('.', '')
		.replace('-', '')
		.replace('/', '')
		.replace('/', '');
	return formatedValue;
};

export const validateCpf = (stringCpf) => {
	const strCPF = removeMask(stringCpf);
	const isInvalid = isBlackList(strCPF);
	let sum = 0;
	let remnant;

	if (isInvalid) {
		return false;
	}

	let i = 1;
	for (i; i <= 9; i++) {
		sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
	}
	remnant = (sum * 10) % 11;
	if ((remnant === 10) || (remnant === 11)) {
		remnant = 0;
	}

	if (remnant !== parseInt(strCPF.substring(9, 10))) {
		return false;
	}
	sum = 0;
	for (i = 1; i <= 10; i++) {
		sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
	}
	remnant = (sum * 10) % 11;
	if ((remnant === 10) || (remnant === 11)) {
		remnant = 0;
	}

	if (remnant !== parseInt(strCPF.substring(10, 11))) {
		return false;
	}
	return true;
};

