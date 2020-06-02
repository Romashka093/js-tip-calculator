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

	resultContainer: document.getElementById('result'),
	// resultWrap: document.querySelector('.result-wrap'),
	tipTotal: document.querySelector('.total-tip'),
	total: document.querySelector('.total'),
	totalDescription: document.querySelectorAll('.result-description')
};

console.log('ref', ref);

function handleAddTip(evt) {
	if (evt.target) {
		ref.tip.value = Number(ref.tip.value) + 1;
	}
}

function handleRemoveTip(evt) {
	if (evt.target) {
		ref.tip.value = Number(ref.tip.value) - 1;
	}
}

function handleAddPeople(evt) {
	if (evt.target) {
		ref.people.value = Number(ref.people.value) + 1;
	}
}

function handleRemovePeople(evt) {
	if (evt.target) {
		ref.people.value = Number(ref.people.value) - 1;
	}
}

function handleShowResult(evt) {
	const bill = ref.bill.value;
	const tip = ref.tip.value;
	const numberOfPeople = ref.people.value;

	const tipOnPercentage = Math.abs(bill / 100 * tip / numberOfPeople);
	const cauntTotalBillPerPersone = Math.abs((Number(bill) + Number(tip)) / Number(numberOfPeople));

	console.log('total: ', cauntTotalBillPerPersone);
	console.log('percentage: ', tipOnPercentage);
	console.log('bill', ref.bill.value);
	console.log('tip', ref.tip.value);
	console.log('people', ref.people.value);

	const string = `<div class="result-wrap">
	<div class="result-type-wrap">
		<div class="result-type-title">
			<span class="result-title">Tip</span>
			<span class="result-description">per persone</span>
		</div>
		<div>
			<span class="result-currency">$</span>
			<span class="total-tip">${tipOnPercentage.toFixed(1)}</span>
		</div>
	</div>
	<div class="result-type-wrap">
		<div class="result-type-title">
			<span class="result-title">Total</span>
			<span class="result-description">per persone</span>
		</div>
		<div>
			<span class="result-currency">$</span>
			<span class="total">${cauntTotalBillPerPersone.toFixed(1)}</span>
		</div>
	</div>
</div>`;

	const resultWrap = document.querySelector('.result-wrap');
	if (resultWrap !== null) {
		return;
	} else if (evt.target || resultWrap === null) {
		ref.resultContainer.insertAdjacentHTML('afterbegin', string);
	}
}

ref.addTip.addEventListener('click', handleAddTip);
ref.removeTip.addEventListener('click', handleRemoveTip);
ref.addPeople.addEventListener('click', handleAddPeople);
ref.removePeople.addEventListener('click', handleRemovePeople);
ref.buttonShowResult.addEventListener('click', handleShowResult);

// countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

// countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
