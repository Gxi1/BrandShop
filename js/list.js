function save(em){
			var father=em.parentElement.parentElement;
			var children=father.children;
			var gid=children[0].firstElementChild.value;
			var pic=children[0].lastElementChild.src;
			var n=pic.lastIndexOf("/");
				pic=pic.substring(n+1);
			var name=children[1].innerHTML;
			var price=children[3].innerHTML;
			var num=children[4].firstElementChild.value;
			var obj=new Object();
			obj.name=name;
			obj.pic=pic;
			obj.price=price;
			obj.num=num;
			var data=JSON.stringify(obj);
			localStorage.setItem(gid,data);
			alert("已收藏");
		}
		function show(em){
			var o=em.nextElementSibling;
			o.style.display="block";
		}
		function hide(em){
			var o=em.nextElementSibling;
			o.style.display="none";
		}
		function del(em){				
			var father=em.parentNode.parentNode.parentNode;
			var child=em.parentNode.parentNode;
			father.removeChild(child);
			cal();
	
		}
		function count(em){
			var x=em.value;
			
			var price=
			em.parentNode.previousElementSibling.innerHTML;
			
			em.parentNode.nextElementSibling.innerHTML
			=Number(x*price).toFixed(2);
			cal();
		}