//全选
function selectAll(em){
	var y=document.getElementsByTagName("input");
	if(em.checked){//选中
		for(var i=0;i<y.length;i++){
			if(y[i].type=="checkbox"){
				y[i].checked=true;
			}
		}
	}else{//取消
		for(var i=0;i<y.length;i++){
			if(y[i].type=="checkbox"){
				y[i].checked=false;
			}
		}
	}
	cal();
}
//商铺全选
function checkshop(em){
	var box=em.parentElement.parentElement;
	var y=box.getElementsByTagName("input");
	if(em.checked){//选中
		for(var i=0;i<y.length;i++){
			if(y[i].type=="checkbox"){
				y[i].checked=true;
			}
		}
	}else{//取消
		for(var i=0;i<y.length;i++){
			if(y[i].type=="checkbox"){
				y[i].checked=false;
			}
		}
	}
	cal();
}
//选中商品
function checkGoods(em){
	if(!em.checked){//如果取消
		var box=
		em.parentElement.parentElement.parentElement;
		var y=box.getElementsByClassName("chkshop");
		y[0].checked=false;
		document.getElementById("chkAll").checked
		=false;
	}
	cal();
}
//总计金额
function cal(){
	var piece=0;
	var money=0;
	//获取所有chkgoods复选框
	var y=document.getElementsByClassName("chkgoods");
	for(var i=0;i<y.length;i++){
		if(y[i].checked){
			var box=y[i].parentElement.parentElement;
			var x=box.getElementsByClassName("item6");
			money+=Number(x[0].innerHTML);
			piece++;
		}
	}
	document.getElementById("piece").innerHTML=piece;
	document.getElementById("money").innerHTML=money;
}