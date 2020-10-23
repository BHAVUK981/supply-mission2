function bounceoff(){
  if (packageSprite.x -groundSprite.x < groundSprite.width/2 + packageSprite.width/2
      && groundSprite.x - packageSprite.x < groundSprite.width/2 + packageSprite.width/2) {
    packageSprite.velocityX = packageSprite.velocityX * (0);
    groundSprite.velocityX = groundSprite.velocityX * (0);
  }
  if (packageSprite.y - groundSprite.y < groundSprite.height + packageSprite.height
    && groundSprite.y - packageSprite.y < groundSprite.height/5+ packageSprite.height/5){
    packageSprite.velocityY = packageSprite.velocityY * (0);
    groundSprite.velocityY = groundSprite.velocityY * (0);
  }
  }