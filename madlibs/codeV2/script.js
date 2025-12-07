(function (){

    'use strict'
    document.querySelector('#close').addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay').className = 'hidden';
    });
    

    document.querySelector('#submit').addEventListener('click', function(event){
        event.preventDefault();

        const inputs = document.querySelectorAll('#myForm input[type="text"]');

        for (let input of inputs){
            if (input.value.trim() === ''){
            alert('Please fill all of the fields!');
            return;
            }
        }

        document.querySelector('#overlay').className = 'hidden';

        const verbOne = document.querySelector('#verbOne').value;
        const verbTwo = document.querySelector('#verbTwo').value;
        const adjectiveOne = document.querySelector('#adjectiveOne').value;
        const adjectiveTwo = document.querySelector('#adjectiveTwo').value;
        const adjectiveThree = document.querySelector('#adjectiveThree').value;
        const nounOne = document.querySelector('#nounOne').value;
        const nounTwo = document.querySelector('#nounTwo').value;

        document.querySelector('#verbOneOut').textContent = verbOne;
        document.querySelector('#verbTwoOut').textContent = verbTwo;
        document.querySelector('#adjectiveOneOut').textContent = adjectiveOne;
        document.querySelector('#adjectiveTwoOut').textContent = adjectiveTwo;
        document.querySelector('#adjectiveThreeOut').textContent = adjectiveThree;
        document.querySelector('#nounOneOut').textContent = nounOne;
        document.querySelector('#nounTwoOut').textContent = nounTwo;
    });

}());