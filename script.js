
console.log("Welcome to the Basic console Todo project");
var inps =[];
// inp=prompt("what do you want to do?")
let inp=0,ele;
 while(inp!=='4')
{
    inp=prompt("what do you want to do? 1.Write 2. list 3. delete 4. quit");
if(inp =='1')
{
    let count=0;
    
    let i=0;
    inps[i]=prompt("enter element");
    console.log(inps[i] + " added to the list");
    document.write(inps[i]);
    i++;

    // console.log("########################");
    // for(var j=0;j<inps.length;j++)
    // {
    //     console.log(inps[j] + "\n");
    // }

    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$");
    
  

}
else if(inp=='2')
{
    console.log("########################");
    for(var i=0;i<inps.length;i++)
    {
        console.log(inps[i] + "\n");
    }

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$");
}
else if(inp==3)
{
ele=prompt("which element you want to edit?");
let val=prompt("enter value");
inps[ele]=val;


}
else if(inp===4)
{
    break;
}
else{
warn("wrong value input");
}
}