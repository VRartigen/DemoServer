Router.route('/',  {
    name : 'home',
    template : 'home'
});


Router.route('/register', function () {
    this.render('register');
});
 
Router.route('/login', {
    name: 'login',
    template : 'login'
});



Router.route('/Realtors',{
   name : 'realtor',
   template : 'realtor' 
});

Router.route('/HomeBuyer',{
   name : 'hb',
   template : 'hb' 
});

Router.route('/Manufacturer',{
   name : 'man',
   template : 'man' 
});

Router.route('/Createpropertyrealter1',{
   name : 'createpropertyrealter1',
   template : 'createpropertyrealter1' 
});

Router.route('/Createpropertyrealter2',{
   name : 'createpropertyrealter2',
   template : 'createpropertyrealter2' 
});

Router.route('/Createpropertyrealter3',{
   name : 'createpropertyrealter3',
   template : 'createpropertyrealter3' 
});

Router.route('/Createpropertyrealter4',{
   name : 'createpropertyrealter4',
   template : 'createpropertyrealter4' 
});

Router.route('/Createpropertyrealter5',{
   name : 'createpropertyrealter5',
   template : 'createpropertyrealter5' 
});

Router.route('/ListProperty',{
    name : 'listproperty',
    template : 'listproperty'
});