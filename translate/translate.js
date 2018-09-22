var app = angular.module('translateText', []);
app.controller('translateCtrl', function ($scope,$http) {
    var text,dest;

    /*$scope.getCode= function (dest) {
        var code ="en";
        switch (dest) {
            case "Telugu":
                code = "te";
                break;
            case "Kannada":
                code = "kn";
                break;
            case "Spanish":
                code = "es";
                break;
        }
        return code;
    }*/
    $scope.languages= [
        "te","es","kn"
    ];
    $scope.translateText = function () {
        text=$scope.translate;
        var target=$scope.selectedlang;
        //var target=$scope.getCode(dest);

        $http({
            method: 'GET',
            url: "https://translate.yandex.net/api/v1.5/tr.json/translate?" +
        "key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e."
        +
        "c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text=" + text +"&" +
        "lang=en-" +target+ "&[format=plain]&[options=1]&[callback=set]"
        }).then(function successCallback(response) {
             console.log(response);

        }, function errorCallback(response) {
            console.log(response);

        });
    }

})
