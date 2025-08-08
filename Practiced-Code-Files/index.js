
// Find long text using function and argument object
function find_long()
{
    let long_text="";
    for(let i=0;i<arguments.length;i++)
    {
        if(long_text.length<arguments[i].length)
        {
            long_text=arguments[i];
        }
    }
    return long_text;
}

const a=find_long("a","ab","abc","abcd");

console.log(a);


// List creation using function with argument object
function list(a)
{
    let total=`<${a}l><li>`;
    const arr=Array.from(arguments).slice(1);
    total+=arr.join("</li><li>");
    total+=`</li><${a}l>`;
    return total;
}

list("u", "One", "Two", "Three");