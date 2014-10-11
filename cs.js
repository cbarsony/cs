module.exports = {
	push: function(object, item){
		var maxKey = 0;
		for(var i in object){
			if(object.hasOwnProperty(i)){
				var keyString = i.substr(1);
				if(parseInt(keyString) > maxKey) maxKey = parseInt(keyString);
			}
		}
		maxKey++;
		var newKey = "_" + maxKey;
		object[newKey] = item;
		return object;
	}
};