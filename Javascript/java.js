//How js work
/*
sb sy phli line execute hony sy phly code compile hota hy 
1->compile  
        //compile 2 reason ki waja sy hota hy 
            1->Early Error Checking 
            2->Determing early variable scope checking (D.A.S.V)
    Three compilation phase
        1->Tokening/Lexing(hmra code choty choty part mayn divide hojata hy).
        2->parsing(part koh use kr kay Abstract syntax tree bnaty(A.S.T)).
        3->code Generation(A.S.T sy asa code generate krty jo agy Execute ho sky).
2->Code Execuation Phase.
    In J.s code execute inside execution context.
    ->create global execution context 
    . creatin phase
    .code execution phase.
*/
// .....................................
// HTMl Same As object in Browser........document
//console.log(document)
// console.dir(document)   show javascript directory.
// .......................
/*Selector 
    1-getElementById
    2-getElementByClassName(HTML Collection)
    3-querySelector
    4-queryselectorAll(NodeList)
*/
// ...............................
/* 
TextContent
innertext
*/
        // const a=document.querySelector('#main-heading');
        // console.log(a.textContent)    //output=Manage your Task Hello
        // console.log(a.innerText) //will not show inner tag in Main Heading   //output=Manage Your Task.
//Change Text Content of h2
         //  a.textContent="Iqra Ashfaq";
        //  a.style.color="red";
        //  a.style.fontSize="10px"
        // console.log(a.style);
// ....................
//Get and Set Attribute.
 /*        
        const ids=document.querySelector(".headline h2")
         console.log(ids.getAttribute('id'))
         ids.setAttribute('id','Heading');
         console.log(ids.getAttribute('id'))
*/
// ...................
/*
iterating Loop
1-loop
2- for-of
3-forEach(use with nodelist only)(can't used with HTML Collection)
    if we want to apply foreach on HTML COllection
                    let ary=document.getElementsByClassName('nav-item')
                    console.log(ary);
                    ary=Array.from(ary)
                    ary.forEach(nav=>console.log(nav)
            )
*/
// .......................
/* innerHTML
        const a=document.querySelector('h2');
        a.innerHTML="<h1>Iqra Ashfaq</h2>"
*/
// ............................
/*
1-ChildNode----> will show new line also [head,text,body], head=> [text,title,text], body=>[text,h1,text,p,text]
2-children-----> will show only element [head,body],head=>[title],body=>[h1,p]
3-parentElement,parentNode---->same parent 
4-NextSibling---->will show text node also
5-nextElementSibling------>not show text node.
*/
            // const rootnode=document.getRootNode();
            // console.log(rootnode.children)   //output:HTML Collection
            // console.log(rootnode.childNodes) //output:Nodelist
            // const htmlElementNode=rootnode.childNodes[1];
            // console.log(htmlElementNode.childNodes)  //[head,text,body]
            // // const headElementNode=htmlElementNode.childNodes[0] //0=head,1=text,2=body
            // // console.log(headElementNode);
            // const bodyElementNode=htmlElementNode.childNodes[2] //0=head,1=text,2=body
            // console.log(bodyElementNode.childNodes);
            // const navs=document.querySelector('.nav-items').childNodes[1];
            // console.log(navs.nextElementSibling)
// .............................. 
