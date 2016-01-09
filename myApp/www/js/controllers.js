angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $cordovaImagePicker) {

    $scope.imagefiles = [];
    $scope.images = [];
    $scope.isImage = true;
    // $scope.images = [
    //   {
    //   'id': 0,
    //   'img': 'img/ionic.png'
    //   },
    //   {
    //   'id': 1,
    //   'img': 'img/ionic.png'
    //   },
    //   {
    //   'id': 2,
    //   'img': 'img/ionic.png'
    //   }
    // ];
    $scope.image1 = {};
    $scope.image2 = {};
    $scope.image3 = {};
    $scope.image4 = {};

    var img = new Image();
  	img.crossOrigin = 'Anonymous';
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    img.onload = function(){
      var width = img.width;
      var height = img.height;
      canvas.height = height;
      canvas.width = width;
      ctx.drawImage(this, 0, 0);
      var dataURL = canvas.toDataURL();
    };
    img.src = "img/iphone.png";

    $scope.updateattachment = function(){
      //Image picker will load images according to these settings
        var options = {
            maximumImagesCount: 4, // Max number of selected images, I'm using only one for this example
            width: 450,  // set the width of the image
            // height: 500, // set the height of the image
            quality: 60   // set the quality of the image upload
        };
        var images = '';

        $cordovaImagePicker.getPictures(options).then(function (results) {
            // Loop through acquired images
            for (var i = 0; i < results.length; i++) {
                $scope.images.push({
                  'id': i,
                  'img': results[i]});
                images = results[i];   // We loading only one image so we can use it like this
            }
        }, function(error) {
            console.log('Error: ' + JSON.stringify(error));    // In case of error
        });

    };

    function convertImgToBase64(title, callback){
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function(){
          var canvas = document.createElement('CANVAS');
          var ctx = canvas.getContext('2d');
          var width = img.width;
          var height = img.height;
          canvas.height = height;
          canvas.width = width;
          ctx.drawImage(this, 0, 0);
          var dataURL = canvas.toDataURL();
          callback({
            'id': title.id,
            'img': dataURL});
          canvas = null;
        };
        img.src = title.img;
    }

    // function search (title) {
    //   var j = 0;
    //   console.log($scope.images);
    //   for (var i = 0; i < $scope.images.length; i++) {
    //   	if ( $scope.images[i].id === title.id) {
    //         console.log('true');
    //   	}else {
    //       console.log(j);
    //       if(j == $scope.images.length){
    //         console.log(j);
    //         $scope.images.push(title);
    //         console.log($scope.images);
    //       }
    //       j = j+1;
    //   	}
    // 	}
    // }

    $scope.beforeDrop1 = function (event, ui, title, $index) {
      // body...
    };

    $scope.first = function (event, ui, title, $index) {
      $scope.isImage = false;
      $scope.image1 = title;
      // convertImgToBase64(title, function (image) {
      //   $scope.image1 = image;
      //   console.log($scope.image1);
      // });
    };

    $scope.second = function (event, ui, title, $index) {
      $scope.isImage = false;
      $scope.image2 = title;
      // convertImgToBase64(title, function (image) {
      //   $scope.image2 = image;
      //   console.log($scope.image2);
      // });
    };

    $scope.third = function (event, ui, title, $index) {
      $scope.isImage = false;
      $scope.image3 = title;
      // convertImgToBase64(title, function (image) {
      //   $scope.image3 = image;
      //   $scope.$apply();
      //   console.log($scope.image3);
      // });
    };

    $scope.fourth = function (event, ui, title, $index) {
      $scope.isImage = false;
      $scope.image4 = title;
      // convertImgToBase64(title, function (image) {
      //   $scope.image4 = image;
      //   $scope.$apply();
      //   console.log($scope.image4);
      // });
    };

    // $scope.createImage = function () {
    //   function hello(imag, position) {
    //     ctx.drawImage(imageObj1, position.x, position.y);
    //   }
    //   if($scope.image1.img){
    //     var imageObj1 = new Image();
    //     imageObj1.src = $scope.image1.img;
    //     hello(imageObj1, { 'x': 0, 'y': 20});
    //   }
    //   if($scope.image2.img){
    //     var imageObj2 = new Image();
    //     imageObj2.src = $scope.image1.img;
    //     hello(imageObj2, { 'x': 130, 'y': 20});
    //   }
    //   // if($scope.image3.img){
    //   //   var imageObj3 = new Image();
    //   //   imageObj3.src = $scope.image1.img;
    //   //   hello(imageObj3, { 'x': 0, 'y': 0});
    //   // }
    //   // if($scope.image4.img){
    //   //   var imageObj4 = new Image();
    //   //   imageObj4.src = $scope.image1.img;
    //   //   hello(imageObj4);
    //   // }
    //
    //   $timeout(function () {
    //     var dataURL = canvas.toDataURL();
    //     console.log(dataURL);
    //   }, 100);
    //   console.log($scope.image1);
    //   console.log($scope.image2);
    //   console.log($scope.image3);
    //   console.log($scope.image4);
    // };
});
