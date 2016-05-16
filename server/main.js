import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    
  
});


Meteor.methods({
        findEmail : function(emailId){
            var users = Meteor.users.find().fetch();
           
            for(var i = 0; i < users.length; i++){
                
                if(users[i].emails[0].address == emailId){
                    console.log(users[i].profile.userType);
                    return users[i].profile.userType;
                }
            }
            return "";
          
        }
        
    })