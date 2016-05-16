import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.register.events({
    'submit .register-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;
        var utype = event.target.usertype.value;
        console.log("usertype==="+utype);
        var user = {email:email , password:password , profile:{name:firstname +" "+lastname, userType:utype}};
 
        Accounts.createUser(user,function(err){
            if(!err) {
                Router.go('/'+utype);
            }
        });
    }
});


Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var utype = event.target.usertype.value;
         
        Meteor.call("findEmail",email,function(error,result){
            console.log(result);
            var userType = result; 
             console.log("userType=="+userType+", utype=="+utype);
        
        if(userType == utype){
        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/'+utype);
            }else{
                console.log("Wrong Credentials");
            }
        });
        
       
    
        }else{
             console.log("userType=="+userType+", utype=="+utype);
          alert("Wrong User!!! Please select your usertype");
        }   
        });
        
        
     
       
},'click .btn-facebook':function(event){ 
         event.preventDefault(); 
         Meteor.loginWithFacebook(function(err){ 
            if(!err) { 
                 Router.go('/'+utype); 
             } 
         }); 
	}
});


Template.navigation.events({ 
     'click .btn-logout':function(){ 
         Meteor.logout(function(err){
      if(err){
        console.log('Error Logging out: '+ err);
      }
     Router.go('home'); 
  }); 
     } 
 }); 
 
 
  Template.body.events({
     'click .alogo':function () {
         if(Meteor.user()){
            Router.go('/'+Meteor.user().profile.userType);
         }else{
             Router.go('home');
         }
     }
 });
 
 
 
 Template.realtor.events({
     'click #realtercreatesavepropertiesbtn': function(){
         console.log("Button clicked");
         Router.go('/Createpropertyrealter1');
     },
     
     'click .list-btn':function(){
         Router.go('listproperty');
     }
 });
 
 
  Template.createpropertyrealter1.events({
     'click #get_file': function(){
         document.getElementById('my_file').click();
         
     },
     
      'click #realtorcreateblueprint': function(){
         document.getElementById('magicplan').click();
     },
     
     'click #locateblueprintbtn': function() {
         Router.go('/Createpropertyrealter2');
     },
     
     'change #my_file': function(){
         console.log("called"+this.value);
         document.getElementById('uploadblueprintrealter').value = this.value;
     }
 });
 
  Template.createpropertyrealter2.events({
     'click #realtorviewpropertyinvrbtn': function(){
         console.log("Button clicked");
         Router.go('/Createpropertyrealter3');
     }
 });
 
 
 Template.createpropertyrealter3.events({
     'click #realtorviewpropertyinvrbtn': function(){
         console.log("Button clicked");
         Router.go('/Createpropertyrealter4');
     },
     
     'click #goButtonbtn': function(event){
         event.preventDefault();
         document.getElementById('displayimage').src="Artigen3Dview1.png";
        
     },
     
     'click #displayimage': function(event) {
         event.preventDefault();
         if(document.getElementById('displayimage').src == "http://localhost:3000/Artigen3Dview1.png") {
             document.getElementById('displayimage').src="Artigen3Dview-asset1.png";
         }
         
     }
 });
 
 
 Template.listproperty.helpers({
     images:function(){
          return Images.find();         
    }
 })

 
 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}