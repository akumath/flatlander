/**
 * Created by Shashank on 30-05-2015.
 */
( function()
{
    var app = angular.module("myApp", ['products-details']);
    app.controller('StoreControlelr', ['$http',function ($http) {

        var store=this;
        store.products=[];
        $http.get('package.json').success(function(data){
            store.products=data;
        });
    }]);

    app.controller('ReviewController',function(){
        this.review={};

        this.addReview=function(product){

           product.reviews.push(this.review);
          console.log("Form Submitted "+temp);

this.review={};
        };

    });


})();