//                                       1st class
// console.log("hello world");
// console.log("Hello"+"world");
// console.log("Hello","world");
// console.log('hello','world');
// console.log("hello \t world");

//                                      2nd class
// let name="Iqra";
// let father="Ashfaq"
// let age=25;
// let education="Bscs";
// let output=`My name is ${name}\nFather Name is ${father}\nAge is ${age}`;
// console.log(output)
// ......................
// let name="Iqra";
// let name="ayesha";
// console.log(name);
// Error when we use let only one variable declare one type and can be modify.
// ......................

// var name="Iqra";
// var name="ayesha";
// console.log(name);
// correct

//                                        3rd class    
// Declaration Rule
// 1-Name Can't Start with number 
// 2-only 2 special Character use ($,_),can be between and center
// 3-cann't use space
// .............
// let a=1s3; wrong
// let Name="iqra";   correct
// let name="iqra";   correct
// let FirstName="Ayesha"; correct
// let $Name="Ayesha"; correct
// let _name="ayesha"; Correct
// Let Name first="Ayesha"; Worng.   

//                                     4th Class
// String Indexing(Space counted)
// let Name="Iqra Ashfaq";
// // i q r a   a s h f a q
// // 0 1 2 3 4 5 6 7 8 9 10   
// //index start with 0 and length start with 1
//  console.log(Name.length);
//  console.log(Name[3]);
//  console.log(Name[Name.length-1])
// ....................
 // trim()  remove white space from start and end
// toUpperCase()
// toLowerCase()
// slice()

// Name.trim();  
// console.log(Name); doesn't show White space removed string because we didn't assign trim string to variable 
// console.log(Name,Name.length)
// Name=Name.trim();
// console.log(Name.length);

// console.log(Name.toUpperCase());
// console.log(Name.toLocaleLowerCase());
// console.log(Name.slice(0,5))
// console.log(Name.slice(5))
// ........................................
// Number to String Converstion 
    // let age=25;
    // let str=age+"";
    // console.log(str,typeof str);
    // let str=String(age);
    // console.log(str,typeof str);
// String to Number  
    // let name="17";
    // let num=+name;
    // console.log(num, typeof num);
// ..........................

//  Comparison Operator
// ==,===,!=,!==
// let a=10;
// let b="10";
// (a==b)?console.log("true"):console.log("False");   true output 
// (a===b)?console.log("true"):console.log("False"); check data type also.
// (a!==b)?console.log("true"):console.log("False");

//                                         5Th class
// if-Else
/*
// Example#1
            let age=14;
            if(age>=15)
                {
                    console.log("you are mature");
                }
                else
                {
                    console.log("you are Immature");
                }
     //Example 2           
         let name="Iqra";
         let age="25";
         if(name[0]==="I" && age===25)
            {
                console.log("true");
            }
            else 
            {
                console.log("False");
            }
    */        
  /*  
    let day="Tuesday";
        switch(day)
        {
            case "Monday":
                console.log("monday");
                break;
                case "Tuesday":
                console.log("Tuesday");
                break;
                case "Wednesday":
                    console.log("Wednesday");
                    break;
                case "Thursday":
                    console.log("Thursday");
                    break; 
                case "Friday":
                    console.log("Friday");
                    break; 
                case "Saturday":
                    console.log("Saturday");
                    break;  
                    default:
                    console.log("");
        }
*/
// ....................................
// Loops
    //  for(let i=1;i<=9;i++)
    //     {
    //         console.log(i);

    //     }

//     let i=0;
//     for(i=0;i<=9;i++)
//         {
//             if(i==1)
//                 continue;
//             console.log(i);

//         }
//   console.log("value of i",i);


//                                       6th Class 
// non-Primitive (reference) data type
// 1-Array
// 2-object 

// let ar=['apple','mango','bannan'];
// console.log(typeof ar); by default typeof Array="object"
// console.log(Array.isArray(ar));  for checking array because datatype of arr and obj is obj. 
// let obj={};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// Push() pop()....Ending
// unshift() shift()-----Strting 
        // ar.unshift("guava");
        // console.log(ar);
        // ar.push("guava");
        // console.log(ar);
//clone array 
        // let a1=['items1','items2'];
        // let a2=a1;
        // console.log(a1===a2) (Answer true and if we change a1 it will effect a2 same);
// cloning method that not effect other Array;
    // 1- Ar2=Ar1.slice(0);
    // 2-Ar2=[].concat[ar1];
    // 3-Ar2=[...Ar1];  //spread operator

    // Example
    // let Ar1=['items1','items2'];
    // // let Ar2=Ar1.slice(0);
    // // let Ar2=[].concat(Ar1);
    //    let Ar2=[...Ar1];
    // Ar2.push('item3')
    // console.log(Ar1,Ar2);
// ...................................................
//looping method
        // 1-normal Loop
        // 2-for of loop(access element in array directly);
        // 3-for in loop(access index of array);

// Example
        // let fruits=['apple','Bannana','Mangoes'];
        // 1st 
            // for(let i=0;i<fruits.length;i++)
            //     {
            //         console.log(fruits[i]);
            //     }
        //2nd
            //  for(let fruit of fruits)
            //     {
            //         console.log(fruit);
            //     }
         //3rd
            //   for(let index in fruits)
            //     {
            //         console.log(fruits[index]);
            //     }   
// ........................... 
//                                                  7th Class    
// Object 
        //   const person={
        //     name:"Iqra",
        //     age:25,
        //     hobbies:["playing","drawing","singing"]
        //   }
        //     //   console.log(person);
            //   console.log(person.name);
            // //   console.log(person[name]);   Error 
            // console.log(person['age']);
            
    // Iteration Methods
    // 1- For In
    // 2- Objects.Keys(object_Name);

            // for(let p in person)
            //     {
            //         // console.log(person.p); Error
            //         // console.log(person['p']); Error 
            //         console.log(person[p]);
            //     }

            // let a=Object.keys(person);
            // for(let i of a)
            //     {
            //         console.log(person[i]);
            //     }

        // Example
            // let a="name";
            // let b="age";
            // let value1="Iqra";
            // let value2="25";
                //1st 
                    // const ob={
                    //     [a]:value1,
                    //     [b]:value2
                    // }
                    // console.log(ob);
                //2nd
                    // const ob={};
                    // ob[a]=value1;
                    // ob[b]=value2;
                    // console.log(ob);
                    // ............................
//object destructing
        //    const obj={
        //     name:"iqra",
        //     age:10,
        //     hobbies:["aa",'ccc',2],
        //     class:18
        //    }
        //    const {name:Name,age,...restvar}=obj;
        //    console.log(Name,restvar);
// .................................................
// Nested Object inside array 
        //  const ar=[{},{},{}];

        // const ar=[
        //     {
        //         Id:1,
        //         name:'iqra'
        //     },
        //     {
        //         Id:2,
        //         name:'Ayesha'
        //     }
        // ]
    // destructing
            // const [user1,user2,user3]=ar;
            // console.log(user1)
            // .........
            // const [{name},{name:Name}]=ar;
            // console.log(name,Name);
// .................................................................. 
// Function Declaration 
            //    function fun_name(var_name1,var_name2)
            //    {
            //              return var_name1+var_name2;
            //    }
            //    const return_value=fun_name(3,5);
            //    console.log(return_value);
//Function Expression 
                // const fun_name=function(var_name1,var_name2)
                // {
                //     return var_name1+var_name2;
                // }
                // console.log(fun_name(3,8));
//Arrow functions
                //  const fun_name=(number1,number2)=>
                //     {
                //         return number1+number2
                //     }
                //     console.log(fun_name(3,7));
                // ....................
                // const fun_name=number=> number%2===0;
                // console.log(fun_name(24));

// ................................................ 
// passing number & convert Array
            //    const fun=(...number)=>
            //     {
            //         console.log(number)
            //         let total=0;
            //         for(let num of number)
            //             {
            //               total+=num;
            //             }
            //             console.log(total);
            //     }
            //     fun(2,7,8,9)

// ................................................................. 
 
// Parameter Destruction
            // const person=
            // {
            //     name:"iqra",
            //     age:35
            // }
    // 1-simple 
                // function print_Detail(obj)
                // {
                //     console.log(obj.name);
                //     console.log(obj.age);
                // }
                // print_Detail(person);
    //2-para destructuring
                // const print_detail=({name,age})=>
                //     {
                //         console.log(name);
                //         console.log(age);
                //     }
                //     print_detail(person);
// ............................................................
// Call Back function (take input as function and call it)
                //    const myfun2=()=>console.log("Call Back function");
                //    const myfun1=(callback)=>{
                //     console.log("First function");
                //     callback();
                //    }
                //    myfun1(myfun2);
// .................................................
/* Important array methods
1-ForEach (foreach take input as a call back function)
2-Map (Rturn new array)
3-Filter
4-reduce 
*/
// For Each
        //  simple array 
        // const arr=[2,7,9,6];
        // function dis(number,index)
        // {
        //     console.log("index is",index,"and number is",number);
        // } 
        // 1st method
                 // for(let index in arr)
                //     {
                //       dis(arr[index],index);
                //     }
        //2nd 
            //  arr.forEach(dis);
        //example
                // const ar=[
                //     {name:"Iqra",age:10},
                //     {name:"Ayesha",age:30},
                //     {name:"Farah",age:20},
                // ]
                // ar.forEach(function(number,index){
                //     console.log(number.name,index);
                // })
//Map
/* 
                    const arr=[2,8,9]
                    const new_array=arr.map(number=>
                        {
                            return number*number;
                        }
                    )
                    console.log(new_array);
                   Example-2
                        const ar=[
                            {name:"Iqra",age:10},
                            {name:"Ayesha",age:30},
                            {name:"Farah",age:20},
                        ]
                        const new_array=ar.map(user=>
                            {
                                return user.name;
                            }
                        )
                        console.log(new_array);
*/
//Reduce
                /* const ar=[2,3,4,5,6]
                const b=ar.reduce((accumulator,currentValue)=>
                {
                    return accumulator+currentValue;
                })
                console.log(b);

    accumulator   currentValue   return
    2              3             5
    5              4             9
    9              5             11
    11             6             20
    */
//    Example#2
            // const ar=[
            //     {productId:1,productName:"Mobile",productPrice:25000},
            //     {productId:2,productName:"Samsung",productPrice:15000},
            //     {productId:3,productName:"Mobile",productPrice:10000}
            // ]
            // const a =ar.reduce((total,currentPrice)=>
            //     {
                
            //         return total + currentPrice.productPrice;
                
            //     },0)
            // console.log(a);
            // .........................................
 // sort method
           
                //    const ar=[
                //     {pI:1,PN:"Oil",PP:2600},
                //     {pI:2,PN:"Ghee",PP:1800},
                //     {pI:3,PN:"Flour",PP:3000},
                //     {pI:4,PN:"Salt",PP:1000},
                //    ]
                //    ar.sort((a,b)=>
                // {
                //     return a.PP-b.PP;
                // }
                // )
                // console.log(ar);
//   new array mayn store krwna
                //   const new=ar.slice(0).sort((a,b)=>
                // {
                //     return a.pp-b.pp;
                // })
                // console.log(new);
// ......................................................... 
// Array Methods's
// 1-find
// 2-Every 
// 3-some
// 4-Fill
// 5-Slpice

// Find(return 1st occurence and stop,)
        // Example#1
                // const ar=["catt",'dog',"Lion","Buffalo"];
                // const new_var=ar.find((number)=>
                // {
                //   return number.length===3
                // })
                // console.log(new_var);
        // Example#2(wo user jis ki id 3 hy)
                // const person=[
                //     {personId:1,personName:"Iqra"},
                //     {personId:2,personName:"Abdullah"},
                //     {personId:3,personName:"Ayesha"},
                // ]
                // const value= person.find((per)=>
                // {
                //     return per.personId===3;
                // })
                // console.log(value);
// Every
// Check array if array having even numbers all then return true otherwise false.
        // Example#1    
                // const ar=[2,4,6,9];
                // const new_var=ar.every((number)=>
                // {
                //     return number%2===0;
                // })
                // console.log(new_var);
        // Example#2
                // check chart if all product cose is less then 50,000
                        // const ar=[
                        //     {productId:1,productName:"Mobile",productPrice:25000},
                        //     {productId:2,productName:"Samsung",productPrice:15000},
                        //     {productId:3,productName:"Mobile",productPrice:10000}
                        // ]
                        // const a=ar.every((number)=>
                        // {
                        //     return number.productPrice<50000;
                        // })
                        // console.log(a);
//some
// kia ak bhi number asa hy jo even hy to ture return kry ga 
                //  const ar=[1,5,8,9]
                //  const b=ar.some((number)=>
                // {
                //     return number%2===0;
                // })
                // console.log(b);
                // Example   koie asa product jo 50,0000 sy zyda ho 
                    //   const ar=[
                    //             {productId:1,productName:"Mobile",productPrice:25000},
                    //             {productId:2,productName:"Samsung",productPrice:15000},
                    //             {productId:3,productName:"Mobile",productPrice:50000}
                    //         ]
                    //         const a=ar.some((number)=>
                    //         {
                    //             return number.productPrice>=50000;
                    //         })
                    //         console.log(a);
// fill Method 
// value,start,end 
                //  const array=new Array(10).fill(-1);
                //  console.log(array);
                // const array=[10,2,4,5,6];
                // console.log(array.fill(0,1,4)) ;     1,2,3 index pr jo value 0 kr do 
                
//splice  (used if we want to insert or delete element bewteen array)
//start,delete,insert
                // splice(start_index,deleted values_index,insert_value);
                // const ar=['item1','item2,item3']
                // ar.splice(1,0,"items-2","item-3")
                // console.log(ar);
// ............................................................................ 

// Iterable
        //jis pr for of loop lga skyn.
        // string and array iterable...object not iterable 
//array like object 
      //(jin per length property hoti hy)
      //jin kah hum index access kr skty hyn
      //string
// ........................................
// set (it's iterable)
    //->store data.
    //->set also have its own property. 
    //->no-index base access.
    //->order is not guranted.
    //->unique item only (no duplicate item).

    // Example#1
         /*
        const set_var=new Set([1,2,3,4]);
        console.log(set_var);
        const var2=new Set("abc");
        console.log(var2);
        set_var.add(6);
        console.log(set_var);
        // if(set_var.has(3))
         if(var2.has('c'))
            {
                console.log("yes present")
            }
            else
            {
                console.log("not Present");
            }
            */
    // Example#2
            /*
             const arr=['item1','item2'];
             const var1= new Set();
             var1.add(1);
             var1.add(arr);
             console.log(var1);
             */
    //Example#3
             /*
             const arr=[1,2,2,3,4,3,5,6,7,6]
             const a=new Set(arr);
             console.log(a);
            // for length finding in sets 
            let length=0;
            for(let number of a)
                {
                  length++;
                }
                console.log(length);
                */
// ............................................ 
//Map object.
    //->Iterable
    //->store date in order fashioned.
    //->store key value pair
    //->Duplicate Keys are not allowed like object.

//Difference between map and object
//Object can only have string or symbols as key
//in map you can use anything as a key..Like array,number,string.

    //   Example
                //  object mayn jo bhi keys hon gi wo string hongi?
                /*
                const person={
                    name:"iqra",
                    age:10,
                    1:'one' 
                }
                for(let key in person)
                    {
                        console.log(typeof key); 
                    }
                */

        // Maps Example
                   /*
                    const person=new Map();
                    person.set('name',"Iqra");
                    person.set('age',10);
                    person.set(1,"one");
                    console.log(person.name) //Output undefined
                    console.log(person['name']) //output undefined
                    console.log(person.get('name'));
                    console.log(person.keys());    //Important 
                    for(let k of person.keys())
                        {
                            console.log(k,typeof k);
                        }
                    // 2nd method 
                       for(let i of person)
                        {
                            console.log(i);    //Return array containing key, value[key,value];
                            console.log(Array.isArray(i));
                        }
                        //For destructuring key and value 
                        for(let [key,value] of person)
                            {
                                console.log(key,value);
                            }

                        */
                 //Realistic example
                 /*
                        const person=
                        {
                            id:1,
                            Name:"iqra"
                        }
                        const extraInfor=new Map();
                        extraInfor.set(person,{age:20,gender:"Female"});
                       console.log(extraInfor.get(person));
                         console.log(extraInfor.get(person).gender);
                */
// ..........................................................
//Clone using Object.assign
      /*
        const per=
        {
            key1:"abc",
            key2:"def"
        }
        const per2=per
        console.log(per,per2);
        // if we add key3 in per..It will refelect per2 also 
        per.key3="ghi"
        console.log(per,per2);
        //To overcome this Error, we Use clone
        const per3={...per};
        console.log(per3);
        per.key4="dhjdhi";
        console.log(per,per2,per3);
        */
 // Cloning 2nd Method
   /* 
         const per={
            name:"iqra",
            age:10
         }
         const per1=Object.assign({},per)
         per.gende="Female";
         console.log(per1);
*/
// Optional Chaining 
/*
        const user={
            name:"iqra",
            // age:{i:17,b:10}
        }
        console.log(user);
        console.log(user.name); //if we comment out name:"iqra" output undefined.
        //  console.log(user.age.i)   //Error if we comment out age in object.
        console.log(user?.age?.i)   //to overcome error we use ?. combine.
*/
// ................................. 
// methods (Function inside object)
/*
            function perosn_info()
            {
                console.log(`Id =${this.id} and Name=${this.name} `)
            }
                const person={
                    id:1,
                    name:"iqra",
                    about:perosn_info
                }
                
                const person1={
                    id:2,
                    name:"Ayesha",
                    about:perosn_info
                }
            person.about();
            person1.about();
*/
// .................... 
/*
    console.log(this); // this statment =console.log(window);
    function hello()
    {
        console.log(this)  //will return window
    }
    hello(); //is equal to window.hello();
*/
// ............................
// call ,Apply, Bind 
/*
            function hello()
            {
                console.log("hello");
            }
            hello.call();
            // ..........................
            const perosn1={
                id:1,
                name:'iqra',
                about:function()
                {
                    console.log(`Id:${this.id},name:${this.name}`);
                }
            }
            const person2=
            {
                id:2,
                name:"ayesha"
            }
            perosn1.about.call(person2); 
            perosn1.about(); 
            perosn1.about.call(); //output Undefined undefined 
    */
// .................................................
        //  Example#2
        /* 
                function about(age,gender)
                {
                    console.log(`Id:${this.id},name:${this.name},age:${age},gender:${gender}`)
                }
                const person1={
                    id:1,
                    name:'Iqra'
                }
                const person2={
                    id:2,
                    name:'ayesha'
                }
               about.call(person1,10,'female'); 
               about.apply(person2,[22,"female"]);  //above and this statment same.
               const a=about.bind(person1,10,'Male')  //return function ;
               a()
        */
    // Example#3
                //  don't make this mistake 
                /*
                            const per={
                                id:1,
                                name:"iqra",
                                about:function()
                                {
                                    console.log(`${this.id},${this.name}`);
                                }
                            }
                            const fun=per.about;
                            fun();  // output undefined undefined 
                            //to overcome this error we use bind which return function 
                            const func=per.about.bind(per);
                            func();
                    */
// ....................................... 
// Arrow function (arrow func doesn't have this)
// apna this nhi hota .arrow fun apni surronding sy value lyta. 


// <--------------------------------------OOP------------------------------------->
// Multiple User banny ki Bhjya function bna dyn or value pass kr dyn 
/*
  Example#1
            function create_object(id,name)
            {
            const user={};
            user.Id=id;
            user.Name=name; 
            user.about=function()
            {
                return `Id:${this.Id},Name:${this.Name}`;
            }
            return user;
            }
            const user=create_object(1,"iqra");
            console.log(user.about())
*/
//   Example#2
// jitni dafa user banny ga utna dfa about function memory myn store ho ga
// to over come this error we define object of function in seperated object 
/*            
            const userMethod={
                about()
                {
                console.log(`${this.Id},${this.Name}`)
                }
            }
            function create_object(id,name)
            {
            const user={};
            user.Id=id;
            user.Name=name;
            user.about=userMethod.about; 
            return user;
            }
            const user=create_object(1,"viqra");
            user.about();
*/
// Example#3
//Issue in above code if we have multiple methods we need to created methods in object
//and must asign address in function .
//to overcome this problem we have another solution 

//Learning with simple example.
         /*
                const obj1={
                    key1:"value1",
                    key2:'value2'
                }
                //  const obj2={
                //     key3:"value3"
                //  }
         // we want that if we call obj2 and wanna access key2 value 
        //so we create empty obj2
                            const obj2=Object.create(obj1);
                            obj2.key3="Value4";
                            console.log(obj2.key1);
            */
 // [[prototype]],--prototype--   both same.
//  Example
/* 
                const userMethod={
                    about()
                    {
                    console.log(`${this.Id},${this.Name}`)
                    },
                    hobby()
                    {
                        console.log('love singjng')
                    }
                }
                function create_object(id,name)
                {
                // const user={};
                const user=Object.create(userMethod)
                user.Id=id;
                user.Name=name;
                return user;
                }
                const user=create_object(1,"viqra");
                user.about();
                user.hobby();
*/
// ....................................................
// Prototype
//when we create function, It's provide free space which is called prototype.
 //Function act like object ex: helo.call(),hello.apply(),hello.bind();
/*Example#1
                    function hello()
                    {
                        console.log("Hello world");
                    }
                    console.log(hello.prototype);  //{} empty object that contain constructor which have hello function 
                    //can add key value
                    hello.prototype.abc="abc";
                    hello.prototype.xyz="xyz";
                    hello.prototype.sing=function()
                    {
                        console.log("sing");
                        }
                    console.log(hello.prototype);
                    hello.prototype.sing();
*/
// Example#2 
//2nd above example: In this example we create new object and assign in function 
//but function already give free space so we use it .
            
   /*
            function create_object(id,name)
            {
            const user=Object.create(create_object.prototype);
            user.Id=id;
            user.Name=name;
            return user;
            }
            create_object.prototype.about=function()
            {
            console.log(`${this.Id},${this.Name}`)
            }
            const user=create_object(1,"viqra");
            user.about();
    */
// ........................... 
// New Keyword
//1-> create empty object //this={}
//2->Return this
//3->Object.create(createUser.prototype) //Manual Kam khtm ho gya new khud sy prototype set kry ga

// Example:
/*
          function createUser(firstName,age)
          {
            this.firstName=firstName;
            this.age=age;
          }
          createUser.prototype.about=function()
          {
            console.log(`Name:${this.firstName},Age:${this.age}`);
          }
          const user1=new createUser('Iqra',25);
          user1.about();

    // for displaying keys 
                for(let k in user1)
                    {
                       // console.log(k); //it'll show about method also key .
                       //to overcome this use hasOwnproperty.
                       if(user1.hasOwnProperty(k))
                        {
                            console.log(k)
                        }
                    }
*/
// ................. 
// New 
//Example#1
// const ar=new Array(1,2,2);
// console.log(Array.prototype);
// //Example#2
// const a=[1,2,3,4]
// console.log(Object.getPrototypeOf(a));
// ..................................................
            // ................................Classes...................
            /*
                        function createUser(firstName,age)
                        {
                        this.firstName=firstName;
                        this.age=age;
                        }
                        createUser.prototype.about=function()
                        {
                        console.log(`Name:${this.firstName},Age:${this.age}`);
                        }
                        const user1=new createUser('Iqra',25);
                        user1.about();
                */
//    Using above example with clases
/*                        class createUser{
                            constructor(firstname,age)
                            {
                                this.firstName=firstname;
                                this.age=age;
                            }
                            about()
                            {
                                console.log(`Name:${this.firstName},Age:${this.age}`);
                            }

                        }
                        const user1=new createUser("iqra",10);
                        user1.about()
*/
// Example #2
/*
                    class Animal {
                        constructor(name, age){
                            this.name = name;
                            this.age = age;
                        }

                        eat(){
                            return `${this.name} is eating`;
                        }

                        isSuperCute(){
                            return this.age <= 1;
                        }

                        isCute(){
                            return true;
                        }
                    }
                    const cat1=new Animal("Miaon",25);
                    console.log(cat1);
                    console.log(cat1.eat())
                    console.log(cat1.isCute())
                    console.log(cat1.isSuperCute())
//Inheritence 
//we want dog class having all properties and method same in animal 
 
                            class Dog extends Animal{
                                
                            } 
                            const dog=new Dog('Bukhi',2);
                            console.log(dog);
    */
//    ..........................
/*
                    class Animal {
                        constructor(name, age){
                            this.name = name;
                            this.age = age;
                        }

                        eat(){
                            return `${this.name} is eating`;
                        }

                        isSuperCute(){
                            return this.age <= 1;
                        }

                        isCute(){
                            return true;
                        }
                    }

                    class Dog extends Animal{
                        constructor(name, age, speed){
                            super(name,age);
                            this.speed = speed;
                        }

                        run(){
                            return `${this.name} is running at ${this.speed}kmph`
                        }
                    } 
                    // object / instance 
                    const tommy = new Dog("tommy", 3,45);
                    console.log(tommy.run());
*/
// ............................... 
// getter and setters 
/*
                class Person{
                    constructor(firstName, lastName, age){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }
                    get fullName(){
                        return `${this.firstName} ${this.lastName}`
                    }
                    set fullName(fullName){
                        const [firstName, lastName] = fullName.split(" ");
                        this.firstName = firstName;
                        this.lastName = lastName;
                    }
                }


                const person1 = new Person("harshit", "sharma", 5);
                // console.log(person1.fullName());
                // console.log(person1.fullName);
                // person1.fullName = "mohit vashistha";
                // console.log(person1);
*/
// .......................................
// static methods and properties
/*
                class Person{
                    constructor(firstName, lastName, age){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }
                    static classInfo(){
                        return 'this is person class';
                    }
                    static desc = "static property";
                    get fullName(){
                        return `${this.firstName} ${this.lastName}`
                    }
                    set fullName(fullName){
                        const [firstName, lastName] = fullName.split(" ");
                        this.firstName = firstName;
                        this.lastName = lastName;
                    }
                    eat(){
                        return `${this.firstName} is eating`;
                    }

                    isSuperCute(){
                        return this.age <= 1;
                    }

                    isCute(){
                        return true;
                    }
                }

                const person1 = new Person("harshit", "sharma", 8);
                // // console.log(person1.eat());
                // const info = Person.classInfo();
                // console.log(person1.desc);
                // console.log(info);
*/