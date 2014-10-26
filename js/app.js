angular.module('vivahunt',[])
.controller('mainController', function ($scope) {
  $scope.user = {
    picture : "http://api.randomuser.me/portraits/med/women/33.jpg"
  };

  $scope.topics = [
  { text : 'startup' , link : 'startup'},
  { text : 'moda' , link : 'moda'},
  { text : 'culinária' , link : 'culinaria'},
  { text : 'música' , link : 'musica'},
  { text : 'cinema' , link : 'cinema'},
  { text : 'art & design' , link : 'design'},
  { text : 'arquitetura' , link : 'arquitetura'},
  ];

});