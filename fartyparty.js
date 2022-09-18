// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
let count = 0;

$w.onReady(function () {

  $w('#fartclickbutton').onClick( event=> {
    count ++;
    let imageName = "#fartplume" + count.toString();
    console.log(count);
    if(count > 8) {
      $w('#fartclickbutton').hide();
      $w('#monster').hide();
      $w('#farthint').hide();
      $w('#fartendtext').hide();
      $w('#monstergrowl').play();

      for(let i=1; i<=8; i++) {
        let deleteName = "#fartplume" + i.toString();
        $w(deleteName).hide();
      }
    }
    else {
      $w(imageName).show('FadeIn');	
      $w('#fartsound').play();
    }
  })
  
}
