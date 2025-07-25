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