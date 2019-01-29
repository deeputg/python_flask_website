function form_submit(){
	//alert("here");
	var error_count = 0;

	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	mobile = document.getElementById("mobile").value;
	gender = document.getElementsByName("gender");
	education = document.getElementById("education").value;
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	confirm = document.getElementById("confirm").value;
	accept_check = document.getElementById("accept_check").checked;

	//name validation
	if(name==""){
		error_count++;
		document.getElementById("name_msg").style.display='block';
	}
	else{
		document.getElementById("name_msg").style.display='none';
	}
	
	//email validation
	email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if(email_pattern.test(email)){
		document.getElementById("email_msg").style.display='none';
	}
	else{
		error_count++;
		document.getElementById("email_msg").style.display='block';
	}

	//mobile number validation
	mobile_pattern = /^[6789]{1}[0-9]{9}$/;
	if(mobile_pattern.test(mobile)){
		document.getElementById("mobile_msg").style.display='none';
	}
	else{
		error_count++;
		document.getElementById("mobile_msg").style.display='block';
	}

	//gender radio buttob validation
	var radio_checked = false;

    var i = 0;
    while (!radio_checked && i < gender.length) {
        if (gender[i].checked) radio_checked = true;
        i++;        
    }
    if(!radio_checked){
    	error_count++;
		document.getElementById("gender_msg").style.display='block';
	}
	else{
		document.getElementById("gender_msg").style.display='none';
	}

	//education validation
	if(education==0){
		error_count++;
		document.getElementById("education_msg").style.display='block';
	}
	else{
		document.getElementById("education_msg").style.display='none';
	}

	//username validation
	if(username==""){
		error_count++;
		document.getElementById("username_msg").style.display='block';
	}
	else{
		document.getElementById("username_msg").style.display='none';
	}
	//password validation
	if(password==""){
		error_count++;
		document.getElementById("password_msg").style.display='block';
	}
	else{
		document.getElementById("password_msg").style.display='none';
	}

	//confirm validation
	if(confirm==""){
		error_count++;
		document.getElementById("confirm_msg").style.display='block';
	}
	else if(password!=confirm){
		error_count++;
		document.getElementById("confirm_msg").style.display='none';
		document.getElementById("confirm_wrong_msg").style.display='block';
	}
	else{
		document.getElementById("confirm_msg").style.display='none';
		document.getElementById("confirm_wrong_msg").style.display='none';
	}

	if(!accept_check){
		error_count++;
		document.getElementById("accept_check_msg").style.display='block';
	}
	else{
		document.getElementById("accept_check_msg").style.display='none';
	}


	if(error_count==0){
		//form submit actions
		document.getElementById("form_accept_msg").innerHTML='Form submitted Succesfully!!';
		document.getElementById("form_accept_msg").style.display='block';

		document.getElementById("name").value='';
		document.getElementById("email").value='';
		document.getElementById("mobile").value='';
		document.getElementById("education").value=0;
		document.getElementById("username").value='';
		document.getElementById("password").value='';
		document.getElementById("confirm").value='';
		document.getElementById("accept_check").checked=false;

	}

}