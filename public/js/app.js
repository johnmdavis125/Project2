$(() => {
    // VARIABLES
    const $imgArray = $('.carousel-images').children();
    let currentImgIndex = 0;
    const highestIndex = $imgArray.length -1;

    console.log($imgArray); 
    console.log(currentImgIndex); 
    console.log(highestIndex); 

    // Start images at display none   
    for (let i=1; i<$imgArray.length; i++){
        $imgArray.eq(i).css('display', 'none'); 
    }

    const nextImg = () => {
      $imgArray.eq(currentImgIndex).css('display', 'none');
      if(currentImgIndex < highestIndex) {
        currentImgIndex += 1;
      } else {
        currentImgIndex = 0;
      }
      console.log(currentImgIndex);
      $imgArray.eq(currentImgIndex).css('display', 'block');
    }

    const previousImg = () => {
        $imgArray.eq(currentImgIndex).css('display', 'none');
        
        if(currentImgIndex > 0){
            currentImgIndex -= 1; 
        } else {
            currentImgIndex = highestIndex; 
        }        
        console.log(currentImgIndex); 
        $imgArray.eq(currentImgIndex).css('display', 'block'); 
    }

    $('.next').on('click', nextImg);
    $('.previous').on('click', previousImg); 
  });
