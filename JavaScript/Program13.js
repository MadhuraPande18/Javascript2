function Display(no)  //type2
{
    console.log("Jay Ganesh "+no);

    return ++no;
}

function main()
{

    let iRet=0;

    iRet=Display(11);
   

    console.log("Return value is : " +iRet);

}

main();