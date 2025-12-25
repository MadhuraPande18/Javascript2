//factorial

function factorial(no)
{
    let iFact=1;

    while(no!=0)
    {
        iFact=iFact*no;
        no--;
    }

    return iFact;

}


function main()
{
    iValue=5; //localvariable

    let iRet=0;
   

    iRet=factorial(iValue);  //call //will go to no

    console.log('Factorial of ${iValue} is ${iRet}');  //single and double quotes are considered as same in js

}

main();