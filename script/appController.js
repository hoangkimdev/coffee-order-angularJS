//AngularJS
var app = angular.module('coffeeOrder', []);

app.controller('appController', function($scope){
    // data demo <-- get from server (php, asp)
    $scope.itemList = [
        {
            name: 'Ép thơm',
            price: 24000,
            avtUrl: 'avt/a.jpg'
        },
        {
            name: 'Ép táo',
            price: 29000,
            avtUrl: 'avt/b.jpg'
        },
        {
            name: 'Cooktail melal',
            price: 34000,
            avtUrl: 'avt/c.jpg'
        },
        {
            name: 'Capuchino',
            price: 38000,
            avtUrl: 'avt/d.jpg'
        },
        {
            name: 'Cooktail Chanh',
            price: 34000,
            avtUrl: 'avt/e.jpg'
        },
        {
            name: 'Ép dưa hấu',
            price: 32000,
            avtUrl: 'avt/f.jpg'
        },
        {
            name: 'Trà sữa việt quất',
            price: 29000,
            avtUrl: 'avt/g.jpg'
        },
        {
            name: 'Nước cam',
            price: 41000,
            avtUrl: 'avt/h.jpg'
        },
        {
            name: 'Ép thơm',
            price: 24000,
            avtUrl: 'avt/a.jpg'
        }
    ];

    // temp order bill #######################################################
    $scope.orderTemp = [];
    $scope.totalOrderTemp = 0;
    $scope.addItemtoBill = function(index){
        var item = $scope.itemList[index];
        $scope.orderTemp.push({
            name: item.name,
            price: item.price
        });     
        $scope.totalOrderTemp = $scope.totalOrderTemp + item.price;
    };
    $scope.removeItemFromBill = function(index){
        $scope.orderTemp.splice(index, 1);
    };

    // sale history ##########################################################
    $scope.saleHistory = [
        {
            datetime: "2021-1-7 16:34:26",
            total: 28000
        }
    ];
    $scope.saveBill = function(){
        if($scope.totalOrderTemp > 0){

            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTimeNOW = date + ' ' + time;

            $scope.saleHistory.push({
                datetime: dateTimeNOW,
                total: $scope.totalOrderTemp
            });
            $scope.orderTemp = [];
            $scope.totalOrderTemp = 0;
        }
    }

    // ADMIN #################################################################

    $scope.avtPara = "avt/a.jpg";
    $scope.addItem = function(){
        $scope.errorText = '';
        if(!$scope.newItemName || !$scope.newItemPrice){
            $scope.errorText = 'Name and price not null';
            return;
        }
        else{
            $scope.itemList.push({
                name: $scope.newItemName,
                price: $scope.newItemPrice,
                avtUrl: $scope.avtPara
            });
            $scope.newItemName = null;
            $scope.newItemPrice = null;
        }
    };
    $scope.removeItem = function(index){
        $scope.itemList.splice(index, 1);
    };

});