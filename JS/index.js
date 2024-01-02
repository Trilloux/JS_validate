//Funkcija ievadīto datu parādīšanai
function paradit() {
    var datiLogs = document.getElementById('dati');
    //IF statement ja dati logs nav atvērts, tad tas tiks parādīts
    if (datiLogs.style.display === 'none' || datiLogs.style.display === '') {
        datiLogs.style.display = 'block';
        //Ja logs atvērts tad nekāda darbība - display none
    } else {
        datiLogs.style.display = 'none';
    }

    //Mainīgo vērtības kas TIKS saglabātas <div id="dati>
    var pers_vards = document.getElementById('vards').value;
    var pers_uzvards = document.getElementById('uzvards').value;
    var pers_epasts = document.getElementById('epasts').value;
    var pers_vecums = document.getElementById('ageSelect').value;

    //Mainīgo vērtības tiek ierakstītas <div id="dati"> logā un parādītas
    document.getElementById('dati').innerHTML = '<p>Pārbaudiet datu pareizību</p><p>Vārds: ' + pers_vards +
        '</p><p>Uzvārds: ' + pers_uzvards + '</p><p>Epasta adrese: '+pers_epasts+'</p><p>Vecums: '+pers_vecums+
        '</p><button onclick="aizvert()" class="poga">Aizvērt</button>';
}

//Funkcija lai aizvērtu DATI logu , tiek iedarbināta ar pogu 'Aizvert' !
function aizvert() {
    var datiLogs = document.getElementById('dati');
    datiLogs.style.display = 'none';
}

window.onload = function () {
    var form = document.getElementById('regforma');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // novērš formas default nosūtīšanu

        validateFields();
    });
};

window.onload = function(){
    document.getElementById('regforma').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        //mainīgie value iegūšanai , error message nolasīšanai un input lauka iegūšnai =(lai uzliktu border sarkanu)
        var input1 = document.getElementById('vards').value;
        var nameError = document.getElementById('nameError');
        var vardsInput = document.getElementById('vards');

        var input2 = document.getElementById('uzvards').value;
        var snmeError = document.getElementById('snameError');
        var uzvardsInput = document.getElementById('uzvards');

        var input3 = document.getElementById('epasts').value;
        var mailError = document.getElementById('mailError');
        var epastsInput = document.getElementById('epasts');

        var input4 = document.getElementById('ageSelect').value;
        var ageError = document.getElementById('ageError');
        var ageInput = document.getElementById('ageSelect');

        var input5 = document.getElementById('checkbox'); //checkboxam nav value
        var checkboxError = document.getElementById('checkboxError');
        var checkInput = document.querySelector('input[name="checkbox"]:checked');  //parbauda vai ir ieķesēts 

        if(input1 == ''){
            nameError.style.display = 'inline-block';   //display as block
            nameError.style.verticalAlign= 'center';        //novieto error tekstu pa centru
            vardsInput.style.border = '1px solid red'; // Maina ievades loga border uz sarkanu
        } else {
            nameError.style.display = 'none';           //else gadijumā errors neparādas
            vardsInput.style.border = '1px solid #ccc'; // else gadijuma border tiek atjaunots
            
        }

        if(input2 == ''){
            snameError.style.display = 'inline-block';
            snameError.verticalAlign='center';
            uzvardsInput.style.border = '1px solid red'; 
        } else {
            snameError.style.display = 'none';
            uzvardsInput.style.border = '1px solid #ccc'; 
        }

        if(input3 == ''){
            mailError.style.display = 'inline-block';
            mailError.style.verticalAlign = 'center'; 
            epastsInput.style.border = '1px solid red'; 
        } else {
            mailError.style.display = 'none';
            epastsInput.style.border = '1px solid #ccc'; 
        }

        if(input4 == 0){
            ageError.style.display = 'inline-block';
            ageError.style.verticalAlign = 'center'; 
            ageInput.style.border = '1px solid red'; 
        } else {
            ageError.style.display = 'none';
            ageInput.style.border = '1px solid #ccc'; 
        }

        if(input4 == 0){
            ageError.style.display = 'inline-block';
            ageError.style.verticalAlign = 'center'; 
            ageInput.style.border = '1px solid red'; 
        } else {
            ageError.style.display = 'none';
            ageInput.style.border = '1px solid #ccc'; 
        }

        if(checkInput==null){       //parbauda vai checkbox ir ieķeksēts
            checkboxError.style.display = 'inline-block';
            checkboxError.style.verticalAlign = 'center'; 
            checkInput.style.border = '1px solid red'; 
        } else {
            checkboxError.style.display = 'none';
            checkInput.style.border = '1px solid #ccc'; 
        }
        
    });
};

