// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}else{
  console.log("login Unsuccess");

}

//Assignment

if (email){
  console.log("Email login Success");

}else if(facebook){
  console.log("Facebook login Success");


}else if (google) {
  console.log("Google login Success");

}else {
  console.log("login Unsuccess");

}