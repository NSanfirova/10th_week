let theNum = "0";
let arr = ["/assets/images/summer1.jpg","/assets/images/summer2.jpg",
"/assets/images/summer3.jpg","/assets/images/summer4.jpg"];

function go_to_right()

{

  theNum++;

  if(theNum == arr.length){theNum="0";}

  change_image.src='/assets/images/'+arr[theNum]+'.jpg';

}

function go_to_left()
{

    theNum--;
  
    if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );
  
    change_image.src='/assets/images/'+arr[theNum]+'.jpg';
  
  }

  
  