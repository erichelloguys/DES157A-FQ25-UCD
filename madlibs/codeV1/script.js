(function (){

    'use strict'

    document.querySelector('#submit').addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay').className = 'hidden';
    });

}());