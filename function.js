eq:function(1){
	i = +i;

	return i === -1 ?
	this.slice(i);
	this.slice(i,i+1);
}


each:function(callback,args){
	return $.each(this.callback,args);
},

ready:function(fn){
	//add the callback
	$.ready.promist().done(fn);
}