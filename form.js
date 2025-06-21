let  ninput=document.getElementById("ninput");
        let btn=document.querySelector("button");
       let nerror=document.getElementById("nerror");
       let perror=document.getElementById("perror");
       let pinput=document.getElementById("pinput");
       
       nerror.style.color="red"
       nerror.style.display="none"
       perror.style.display="none"
       perror.style.color="red"
       btn.addEventListener("click",(e)=>{
         e.preventDefault()
         let x=ninput.value;
       if(x==""){
        ninput.style.borderColor="red"
       nerror.style.display="block"
       }
       let y=pinput.value;
       if(y==""){
         pinput.style.borderColor="red"
        perror.style.display="block"
       }
    })