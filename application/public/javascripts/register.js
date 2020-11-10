function check(){
    if (document.getElementById('pw1').value == document.getElementById('pw2').value){ 
        //disabled to prevent submitting if passwords dont match
        document.getElementById('submitregister').disabled = false;
        alert("passwords match!")
    }else {
        document.getElementById('submitregister').disabled = true; 
        alert("passwords do not match, please enter again")
    }
}