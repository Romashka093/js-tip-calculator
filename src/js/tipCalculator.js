'use strict';
console.warn('Tip Calculator');

const ref = {
	bill: document.querySelector('.bill-input'),

	tip: document.querySelector('.tip-input'),
	addTip: document.querySelector('input[data-action="tip-plus"]'),
	removeTip: document.querySelector('input[data-action="tip-minus"]'),

	people: document.querySelector('.people-input'),
	addPeople: document.querySelector('input[data-action="people-plus"]'),
	removePeople: document.querySelector('input[data-action="people-minus"]'),

	buttonShowResult: document.querySelector('button[data-action="submit"]'),
	buttonResetAll: document.querySelector('button[data-action="reset"]'),

	resultContainer: document.getElementById('result')
};

console.log('ref', ref);

function handleAddTip() {
	const tip = Number(ref.tip.value);
	if (tip >= 100) {
		return (ref.tip.value = 100);
	} else {
		return (ref.tip.value = tip + 1);
	}
}

function handleRemoveTip() {
	const tip = Number(ref.tip.value);
	if (tip <= 0) {
		return (ref.tip.value = 0);
	} else {
		return (ref.tip.value = tip - 1);
	}
}

function handleAddPeople(evt) {
	if (evt.target) {
		ref.people.value = Number(ref.people.value) + 1;
	}
}

function handleRemovePeople() {
	const people = Number(ref.people.value);
	if (people <= 1) {
		return (ref.people.value = 1);
	} else {
		return (ref.people.value = people - 1);
	}
}

function handleShowResult(evt) {
	evt.preventDefault();
	const bill = ref.bill.value;
	const tip = ref.tip.value;
	const numberOfPeople = ref.people.value;

	const tipOnPercentage = Math.abs(bill / 100 * tip / numberOfPeople);
	const totalBillPerPersone = Math.abs((Number(bill) + Number(tip)) / Number(numberOfPeople));

	const totalTip = tipOnPercentage.toLocaleString('ua-UA', { style: 'currency', currency: 'USD' });
	const totalBill = totalBillPerPersone.toLocaleString('ua-UA', { style: 'currency', currency: 'USD' });

	const string = `<div class="result-wrap">
	<div class="result-type-wrap">
		<div class="result-type-title">
			<span class="result-title">Tip</span>
			<span class="result-description">per persone</span>
		</div>
		<div class="total-result">
			<span class="total-tip">${totalTip}</span>
		</div>
	</div>
	<div class="result-type-wrap">
		<div class="result-type-title">
			<span class="result-title">Total</span>
			<span class="result-description">per persone</span>
		</div>
		<div class="total-result">
			<span class="total">${totalBill}</span>
		</div>
	</div>
</div>`;

	const resultWrap = document.querySelector('.result-wrap');
	const sumOfTotalResult = document.querySelector('.total');
	const sumOfTotalTipResult = document.querySelector('.total-tip');

	if (resultWrap === null) {
		ref.resultContainer.insertAdjacentHTML('afterbegin', string);
	} else if (evt.target) {
		sumOfTotalResult.textContent = totalBill;
		sumOfTotalTipResult.textContent = totalTip;
	}
}

function handleResetAll(evt) {
	const resultWrap = document.querySelector('.result-wrap');
	if (evt.target) {
		(ref.bill.value = ''), (ref.people.value = 1), (ref.tip.value = '');
	}
	if (resultWrap !== null && evt.target) {
		resultWrap.remove(), (ref.bill.value = ''), (ref.people.value = 1), (ref.tip.value = '');
	}
}

ref.addTip.addEventListener('click', handleAddTip);
ref.removeTip.addEventListener('click', handleRemoveTip);
ref.addPeople.addEventListener('click', handleAddPeople);
ref.removePeople.addEventListener('click', handleRemovePeople);
ref.buttonShowResult.addEventListener('click', handleShowResult);
ref.buttonResetAll.addEventListener('click', handleResetAll);
