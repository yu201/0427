angular.module("app")
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("communitypage/shao");
        $urlRouterProvider.when("/communitypage",'/communitypage/shao');
        $stateProvider
            .state({
                name:"home",
                url:"/homepage",
                templateUrl:"pages/home.html"
            })
            .state({
                name:"community",
                url:"/communitypage",
                templateUrl:"pages/community.html"


            })
            .state({
                name:"community.shao",
                url:"/shao",
                templateUrl:"pages/shao.html",
                controller:function ($scope,getdata) {
                    $scope.data=getdata;
                    $scope.speak=function (data) {
                       $scope.txt="回复"+data+"："
                    }
                    $scope.vray=function (result) {
                        $scope.data.push({
                            "name":"赵大爷",
                            "cont":result,
                            "date":new Date()
                        })

                    }
                },
                resolve:{
                    getdata:function ($http,$q) {
                        var dfd=$q.defer()
                        $http.get("data/data.json")
                            .success(function (data) {
                                dfd.resolve(data)
                            })
                        return dfd.promise
                    }
                }
            })
            .state({
                name:"community.list",
                url:"/list",
                templateUrl:"pages/list.html"
            })
            .state({
                name:"community.cha",
                url:"/cha",
                templateUrl:"pages/cha.html"
            })
            .state({
                name:"community.zong",
                url:"/zong",
                templateUrl:"pages/zong.html"
            })
            .state({
                name:"party",
                url:"/partypage",
                templateUrl:"pages/party.html"
            })
            .state({
                name:"resident",
                url:"/residentpage",
                templateUrl:"pages/resident.html"
            })

    })