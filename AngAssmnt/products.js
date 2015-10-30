/**
 * Created by Shashank on 30-05-2015.
 */
(function(){
    var app= angular.module("products-details",[]);
    app.directive('productTitle',function(){
        return {
            restrict:'E',
            templateUrl:'product-title.html'

        };
    });
    app.directive('productPanel',function(){
        return{
            restrict:'E',
            templateUrl:'product-panel.html',
            controller:function(){
                this.tab=1;
                this.selectTab=function(setTab){
                    this.tab=setTab;

                };
                this.isselectTab=function(checkedTab){
                    return this.tab===checkedTab;

                };
            },
            controllerAs:'panl'
        };
    });
})();