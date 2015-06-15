function setDefault(){
var arraysNumbers = [[6,8],[7,8],[5,6],[8,9],[7,6],[7,9],[7,7],[8,8],[6,6],[9,4]];
var random 	=	Math.floor((Math.random() * 10));
var schedule =	Math.floor((Math.random() * 2) + 1);
var num1,num2;

	if(schedule==1){ 
		num1=arraysNumbers[random][0]; 
		num2=arraysNumbers[random][1];
	} 
	else { 
		num1=arraysNumbers[random][1]; 
		num2=arraysNumbers[random][0];
	}

var imgPath='img/'+random+'.jpg';

 return [num1,num2,imgPath];
}

app.controller('myCtrl', function($scope) {

	var arr=setDefault();
  $scope.num1 		= 	arr[0];
  $scope.num2 		= 	arr[1];
  $scope.image 		= 	arr[2];
  $scope.wellDone	=	true;
  $scope.text		=	'';

  //highest score BEGIN
  	$scope.highestScore = localStorage.getItem('highestScore');//vrati postojece iz localStorage
	$scope.hS = (localStorage.getItem('highestScore')!==null) ? JSON.parse($scope.highestScore) : 0;
	localStorage.setItem('highestScore', JSON.stringify($scope.hS));
  //highest score END
  
		$scope.score = 0;
		localStorage.setItem('score', JSON.stringify($scope.score));
		

	$scope.checkResult = function() {
		if($scope.num1*$scope.num2==$scope.scoreInput){
		$scope.score=$scope.score+5;
		$scope.wellDone='green'
		$scope.text='You get 5 points, good job:)';
		}
		else{
		$scope.wellDone='red';
		$scope.text='For '+$scope.num1+'*'+$scope.num2+' result is:'+($scope.num1*$scope.num2);
		}
		
		$scope.scoreInput = ''; //clear the input after adding
		localStorage.setItem('score', JSON.stringify($scope.score));//setuj na novu vrijednost score u localStorage
		
		if($scope.hS<$scope.score){
		localStorage.setItem('highestScore', JSON.stringify($scope.score));
		}
		
			var arr2=setDefault();
		  $scope.num1 	= arr2[0];
		  $scope.num2 	= arr2[1];
		  $scope.image 	= arr2[2];
		  
	};

});

