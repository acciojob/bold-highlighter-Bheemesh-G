function highlight() {
    //Write your code here


	const arr = document.querySelectorAll('strong');
	arr.forEach(strong =>{
		strong.style.color = "green";
	});

	
}


function return_normal() {
    //Write your code here

	const arr = document.querySelectorAll('strong');
	arr.forEach(strong=>{
		strong.style.color = "black";
	});
    
}
