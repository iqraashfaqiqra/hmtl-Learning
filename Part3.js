// *************Set Time Out**********
//set Time out run krta hy WebApI. 
//WebAPI 1 second kay bad callback function return kry ga.
//1 sec kay bad webApi Return kry ga call back func lkn wo callback queue mayn lga rhy ga 
//Event loop check kry ga kia baki event run ho gy jo GEC myn hy (callstack)
//phr Call back function call back queue sy nikal kr callstack myn jaya ga.Chachy time 0 hi ku na ho.

        // console.log("script Start");
        // function hello()
        // {
        //     console.log("Set Time Out Call");
        // }
        //     setTimeout(hello,1000);
        //     console.log("script End");
/*    
output=  Script Start 
         Script End
         Set Time Out.
*/
// ....................................... 
            // console.log("script Start");
            // setTimeout(()=>{
            //     console.log("Set time Out");
            // },0);
            // for(let i=0;i<20;i++)
            // {
            //     console.log(i);
            // }
            // console.log("script ENd");
//..........Clear Time Out.................
                // console.log("script Start");
                // const id=setTimeout(()=>{
                //     console.log("Set time Out");
                // },0);
                // for(let i=0;i<20;i++)
                // {
                //     console.log(i);
                // }
                // console.log("set Time iD",id);
                // clearTimeout(id);
                // console.log("script ENd");
                
//**********Set Interval********************** */
//same above settimeout but set interval (bar bar run hota).
//Example in Part3_Example.html;

// .....................................................

// **************Call Back*********************
                /*
                function number(a,b,callback,multi)
                {
                        console.log(a,b)
                        callback(a,b);
                        multi(a,b);
                }
        number(1,2,(a,b)=>console.log(a+b),(a,b)=>console.log(a*b));

*/
//Call Back hell/Pyramid of Dom
// :: using CallbackHell.html
const h1=document.querySelector(".headeing-1");
const h2=document.querySelector('.headeing-2');
const h3=document.querySelector('.headeing-3');
const h4=document.querySelector('.headeing-4');
const h5=document.querySelector('.headeing-5');
       /*
        setTimeout(()=>
                {
                 h1.style.color="red";       
                },1000)
          setTimeout(()=>
                {
                h2.style.color="green";       
                },2000)
        setTimeout(()=>
                {
                        h3.style.color="blue";       
                },3000)
        setTimeout(()=>
                {
                        h3.style.color="yellow";       
                },3000)
        setTimeout(()=>
                {
                        h4.style.color="pink";       
                },4000)
        setTimeout(()=>
                {
                        h5.style.color="red";       
                },5000)
        /*
//****************Call Back Hell*********** */
/*
    
        setTimeout(()=>
                {
                h1.style.color="red";       
                setTimeout(()=>
                {
                h2.style.color="green";       
                        setTimeout(()=>
                        {
                                h3.style.color="blue";       
                                        setTimeout(()=>
                                {
                                h3.style.color="yellow";       
                                        setTimeout(()=>
                                        {
                                        h4.style.color="pink";       
                                                setTimeout(()=>
                                                {
                                                h5.style.color="red";       
                                                },5000)
                                        },1000)
                                },1000)
                        },1000)
                },1000)
                },1000)
        */
        //......Above Example using Function
        /*
        function Color(element,clr,time,onsuccess,onfailure)
        {
                setTimeout(()=>
                        {
                        if(element)
                        {
                        element.style.color=clr;
                        if(onsuccess)
                                {
                                        onsuccess();
                                }
                        }
                        else
                        {
                                if(onfailure)
                                        {
                                                onfailure();
                                        }
                        }
                        },time)
                
                
        }
        Color(h1,"red",1000,()=>{
                Color(h2,"red",1000,()=>{
                        Color(h3,"red",1000,()=>{
                                Color(h4,"red",1000,()=>{
                                        Color(h5,"red",1000,()=>{},()=>{console.log("doesn't Exist")});
                                },()=>{console.log("doesn't Exist")});
                        },()=>{console.log("doesn't Exist")});
                },()=>{console.log("doesn't Exist")});
        },()=>{console.log("doesn't Exist")});
*/