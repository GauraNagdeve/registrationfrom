const SignUpButton =document.getElementById('signUpButton');
const SignInButton =document.getElementById('signUpButton');
const SignInForm =document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

SignUpButton.addEventListener('click',function(){
    signUpForm.style.display="none";
    signUpForm.style.display="block";
})
