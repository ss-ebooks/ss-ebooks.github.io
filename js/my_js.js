	
    document.querySelectorAll('pre.code').forEach(el => {
        // then highlight each
        hljs.highlightElement(el);
    });
    
	
	// constants
	const ans_mod = document.querySelector("#answer-modal");
	const ans_box = document.querySelector("#answer-box");  
	
	// exercises
    function show_answer(n,a){
		
		switch(a){
			case 1 :				
				ans_box.innerHTML='';
				ans_box.innerHTML=answers[n];
				ans_mod.classList.add('is-active');				
				break;
				
			case 0 :
				ans_mod.classList.remove('is-active');
				break;
				
			default: break;
				
			
		}
		
	}     
	
    let slideIndex = 1;
    showDivs(slideIndex);
      
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }  
      
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      //for (i = 0; i < dots.length; i++) {
      //  dots[i].className = dots[i].className.replace(" w3-red", "");
      //}
      x[slideIndex-1].style.display = "block";  
      //dots[slideIndex-1].className += " w3-red";
    }  
      
    function clear_content(obj){
      /*
      let e = document.querySelector("#"+obj);
      console.log(e);
      e.innerHTML="";
      e.classList.remove('bg-red-200');
      */
      
      obj.innerHTML='';
      obj.classList.remove('bg-red-200');
      
    }  

  function check1(obj){
    if(obj.value=="1"){
      bulmaToast.toast({ message: 'You are correct.', type: 'is-success',position:'top-center' })
    }else{

      bulmaToast.toast({ message: 'Not correct! Trye again.', type: 'is-danger',position:'top-center' })
    }
    //obj.checked=false;
  }


function open_exercise_modal(obj){
  const exm = document.querySelector("#func-exercise-modal");
  //exm.classList.add("is-active");  
  exm.style.display = "block";
  //let repl = document.querySelector("#ex-repl");
  let repl = document.createElement("py-repl");
  
  repl.setAttribute("std-err","func-out-10");
  repl.setAttribute("std-out","func-out-9");
  repl.innerHTML="# Write your code down below.\n# Press shift-enter to run\n";
  document.querySelector("#ex-repl").appendChild(repl);
  
}
function close_exercise_modal(obj){
  const exm = document.querySelector("#func-exercise-modal");
  //exm.classList.remove("is-active");
  exm.style.display = "none";  
  clear_content(document.querySelector("#func-out-10"));
  clear_content(document.querySelector("#func-out-9"));
  const e = document.querySelector("#ex-repl");
  while(e.firstChild){
    e.removeChild(e.firstChild);
  }
    
}


function open_modal(modal_id,repl_container,std_out_id,std_err_id,content){
  const md = document.querySelector("#"+modal_id);
  md.style.display = "block";
  
  let repl = document.createElement("py-repl");
  repl.setAttribute("std-err",std_err_id);
  repl.setAttribute("std-out",std_out_id);
  repl.setAttribute("id","my-repl");
  //repl.setAttribute("auto-generate",false);
  if(content)
	repl.innerHTML= content;
  
  //if(content) {	  
  //	  repl.innerHTML=content;
  //}else{
  //	  repl.innerHTML="# Write your code down below.\n# Press shift-enter to run\n";
  //}
  document.querySelector("#"+repl_container).appendChild(repl);
}

function close_modal(modal_id,repl_container,std_out_id,std_err_id){
   
  clear_content(document.querySelector("#"+std_out_id));
  clear_content(document.querySelector("#"+std_err_id));
  const e = document.querySelector("#"+repl_container);
  while(e.firstChild){
    e.removeChild(e.firstChild);
  }
  const md = document.querySelector("#"+modal_id);
  md.style.display = "none"; 
    
}

function open_window(url){
	options = "location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0,top=50,width=500";
	window.open(url,options,"popup");
}
/*
function run_code(){
	
	document.querySelector("#my-repl").focus();
	window.dispatchEvent(new KeyboardEvent('keydown', {
		key: "Shift",
		keycode : "Shift",
		shiftKey: true
	}));
	window.dispatchEvent(new KeyboardEvent('keydown', {
		key: "Enter",
		keycode : 13,
		shiftKey: true
	}));
}
*/


