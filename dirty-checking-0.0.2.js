window.onload = function(){
	function getNewValue(scope){
		return scope[this.name];
	}
	function $scope(){
		this.$$watchlist = [];
	}
	$scope.prototype.$watch = function(namem,getNewValue,listenter){
		var watch ={
			name:name,
			getNewValue:getNewValue,
			listenter: listenter
		};
		this.$$watchlist.push(watch);
	}
	$scope.prototype.$digest = function(){
		var list = this.$$watchlist;
		for(var i =0; i < list.length; i++){
			var watch = list[i];
			console.log(watch);
			var newValue = watch.getNewValue(this);
			var oldValue = watch.last;
			if(newValue !== oldValue){
				watch.listenter(newValue,oldValue);
				watch.last =  newValue;

			}
		}
	}
	var scope = new $scope();
	scope.first = 0;
	scope.second = 0;
	scope.$watch('first',function(){
		return scope[this.name];
	},function(newValue,oldValue){
		console.log('newValue:'+ newValue+' oldValue: '+ oldValue);
		console.log("why");
	})
	scope.$watch('second',function(){
		return scope[this.name];
	},function(newValue,oldValue){
		console.log('newValue:'+newValue+' oldValue:  '+ oldValue);
		console.log("why");

	})
	scope.$digest();
}