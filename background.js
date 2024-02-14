
class Background {
  constructor() {
    this.gameHeight = gameHeight;
    this.bloodBottom = 0;
    this.bloodTop = 0;
    this.bloodRight = 0;
    this.bloodLeft = 0;
    this.bloodOpacity = 0.1
  }
  update() {
    this.animations()
  }

  animations() {
    superPowerArray.forEach((sp) => {
      if(sp.name === 'Heal') {
        healthRegenerationAnimation()
      }
    })
    if(stashHealthUsed) {
      healthRegenerationAnimation()
    }
    if(stashManaUsed) {
      manaRegenerationAnimation()
    }
   
  }

  bloodEffect({health}){
    // Create radial gradients on the sides for a blood effect
            //ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
    // // Bottom Left
    // const gradientBottomLeft = ctx.createRadialGradient(0, gameHeight, 0, 0, gameHeight, 300);
    // gradientBottomLeft.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
    // gradientBottomLeft.addColorStop(1, 'rgba(255, 0, 0, 0)');
    // ctx.fillStyle = gradientBottomLeft;
    // ctx.fillRect(0, 0, gameWidth / 2, gameHeight);
    // Bottom Right
   // Bottom

    // Top Right
    // const gradientTopRight = ctx.createRadialGradient(gameWidth, 0, 0, gameWidth, 0, 300);
    // gradientTopRight.addColorStop(0, 'rgba(255, 0, 0, 0.2)');
    // gradientTopRight.addColorStop(1, 'rgba(255, 0, 0, 0)');
    // ctx.fillStyle = gradientTopRight;
    // ctx.fillRect(gameWidth / 2, 0, gameWidth / 2, gameHeight / 2);
    // // Top Left
    // const gradientTopLeft = ctx.createRadialGradient(0, 0, 0, 0, 0, 300);
    // gradientTopLeft.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
    // gradientTopLeft.addColorStop(1, 'rgba(255, 0, 0, 0)');
    // ctx.fillStyle = gradientTopLeft;
    // ctx.fillRect(0, 0, gameWidth / 2, gameHeight / 2);  

    if(!bloodSplashOn) return

    if(health > 98)return
    if(matrixMode)return
    const healthPercentage = health / 100;
    const maxBloodValue = 0.10;
    this.bloodBottom = maxBloodValue * (1 - healthPercentage);
    this.bloodTop = maxBloodValue * (1 - healthPercentage);
    this.bloodLeft = maxBloodValue * (1 - healthPercentage);
    this.bloodRight = maxBloodValue * (1 - healthPercentage);
    if (health === 0) {
      this.bloodOpacity = 0.45;
    } else if (health <= 20) {
      this.bloodOpacity = bloodOpac
      pulseAnimation = true
      executePulseAnimation(health)
    } else if (health <= 60) {
      pulseAnimation = false
      this.bloodOpacity = 0.16;
    } else {
      this.bloodOpacity = 0.13
    } 
    
    if(musicPlayerOpened) {
      this.bloodOpacity = this.bloodOpacity / 1.5
    }
    // if(longControlledFire) return
    const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
    gradientBottom.addColorStop(0, `rgba(255, 0, 0, ${this.bloodOpacity})`);
    gradientBottom.addColorStop(this.bloodBottom, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradientBottom;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
    // Top
    const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
    gradientTop.addColorStop(0, `rgba(255, 0, 0,${this.bloodOpacity})`);
    gradientTop.addColorStop(this.bloodTop, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradientTop;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
    // Left
    const gradientLeft = ctx.createLinearGradient(0, 0, gameWidth, 0);
    gradientLeft.addColorStop(0, `rgba(255, 0, 0,${this.bloodOpacity})`);
    gradientLeft.addColorStop(this.bloodLeft, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradientLeft;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
    // Right
    const gradientRight = ctx.createLinearGradient(gameWidth, 0, 0, 0);
    gradientRight.addColorStop(0, `rgba(255, 0, 0,${this.bloodOpacity})`);
    gradientRight.addColorStop(this.bloodRight, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradientRight;
    ctx.fillRect(0, 0, gameWidth, gameHeight);


  }
  
}

function pulseAnimationFunction(health) {
  let goingDownInterval;
  let goingUpInterval;
  let bloodOpacFull;
  let pulsingSpeed;

  if (health <= 5) {
    bloodOpac = 0.30;
    bloodOpacFull = bloodOpac;
    pulsingSpeed = 8;
  } else if (health <= 10) {
    bloodOpac = 0.25;
    bloodOpacFull = bloodOpac;
    pulsingSpeed = 10;
  } else if (health <= 15) {
    bloodOpac = 0.23;
    bloodOpacFull = bloodOpac;
    pulsingSpeed = 15;
  } else if (health <= 20) {
    bloodOpac = 0.20;
    bloodOpacFull = bloodOpac;
    pulsingSpeed = 18;
  }
  if(musicPlayerOpened) {
    pulsingSpeed = pulsingSpeed * 5
  }
  goingDownInterval = setInterval(() => {
    bloodOpac -= 0.01;
    if (bloodOpac <= 0) {
      clearInterval(goingDownInterval);
      goingUpInterval = setInterval(() => {
        bloodOpac += 0.01;
        if (bloodOpac >= bloodOpacFull) {
          clearInterval(goingUpInterval);
          
          pulseAnimationIsExecuting = false
          pulseAnimation = false;
        }
      }, pulsingSpeed);
    }
  }, pulsingSpeed);
  
}
function executePulseAnimation(health) {
  if(pulseAnimationIsExecuting) return
  pulseAnimationFunction(health)
  pulseAnimationIsExecuting = true
}
function dropHPRegeneration() {
  if(dropHPRegenerationIsWorking) return
    setTimeout(() => {
      dropHPRegenerationIsWorking = false;
      
    console.log(dropHPRegenerationIsWorking)
    }, 1000);
    
  dropHPRegenerationIsWorking = true;
    console.log(dropHPRegenerationIsWorking)
}

function vampirismAnimationFunction() {
  if(vampirismAnimationIsWorking) return
    vampirismAnimationIsWorking = true;
    setTimeout(() => {
      vampirismAnimationIsWorking = false;
    }, 150);
}
function healthRegenerationAnimation() {
  const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
  gradientBottom.addColorStop(0, `rgba(0, 255, 0, 0.2)`);
  gradientBottom.addColorStop(0.2, 'rgba(0, 255, 0, 0)');
  ctx.fillStyle = gradientBottom;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function dropManaRegeneration() {
  if(dropManaRegenerationIsWorking) return
    setTimeout(() => {
      dropManaRegenerationIsWorking = false;
      
    console.log(dropManaRegenerationIsWorking)
    }, 1000);
    
  dropManaRegenerationIsWorking = true;
    console.log(dropManaRegenerationIsWorking)
}
function manaRegenerationAnimation() {
  const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
  gradientBottom.addColorStop(0, `rgba(49,78,158,0.4)`);
  gradientBottom.addColorStop(0.2, 'rgba(49,78,158, 0)');
  ctx.fillStyle = gradientBottom;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}
// White color
// function killedAnimationFunction() {
//   killedAnimation = true
//   setTimeout(() => {
//     killedAnimation = false
//   }, 300);
//   if(killedAnimation) {
//     const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
//     gradientBottom.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
//     gradientBottom.addColorStop(0.03, 'rgba(255, 255, 255, 0)');
//     ctx.fillStyle = gradientBottom;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
    
//     // Top
//     const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
//     gradientTop.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
//     gradientTop.addColorStop(0.03, 'rgba(255, 255, 255, 0)');
//     ctx.fillStyle = gradientTop;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
    
//     // Left
//     const gradientLeft = ctx.createLinearGradient(0, 0, gameWidth, 0);
//     gradientLeft.addColorStop(0, 'rgba(255, 200, 200, 0.3)');
//     gradientLeft.addColorStop(0.03, 'rgba(255, 200, 200, 0)');
//     ctx.fillStyle = gradientLeft;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
    
//     // Right
//     const gradientRight = ctx.createLinearGradient(gameWidth, 0, 0, 0);
//     gradientRight.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
//     gradientRight.addColorStop(0.03, 'rgba(255, 200, 200, 0)');
//     ctx.fillStyle = gradientRight;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
//     }
// }

function startKilledAnimation() {
    if(killedEnemyArray.length > 0) {
      killedAnimation = true
      setTimeout(() => {
        killedEnemyArray = []
        killedAnimation = false
      }, 300);
    }
}
function killedAnimationFunction() {
      const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
      gradientBottom.addColorStop(0, `rgb(33, 33, 33,0.7)`);
      gradientBottom.addColorStop(0.10, 'rgb(33, 33, 33,0)');
      ctx.fillStyle = gradientBottom;
      ctx.fillRect(0, 0, gameWidth, gameHeight);

       // Top
       const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
       gradientTop.addColorStop(0, `rgb(33, 33, 33,1)`);
       gradientTop.addColorStop(0.10, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientTop;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
       
       // Left
       const gradientLeft = ctx.createLinearGradient(0, 0, gameWidth, 0);
       gradientLeft.addColorStop(0, `rgb(33, 33, 33,0.3)`);
       gradientLeft.addColorStop(0.10, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientLeft;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
   
       // Right
       const gradientRight = ctx.createLinearGradient(gameWidth, 0, 0, 0);
       gradientRight.addColorStop(0, `rgb(33, 33, 33,0.3)`);
       gradientRight.addColorStop(0.15, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientRight;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
 
}
function energyDrinkAnimation() {
  const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
  gradientBottom.addColorStop(0, `rgb(197, 168, 39,0.15)`);
  gradientBottom.addColorStop(0.15, 'rgb(197, 168, 39,0)');
  ctx.fillStyle = gradientBottom;
  ctx.fillRect(0, 0, gameWidth, gameHeight);

   // Top
   const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
   gradientTop.addColorStop(0, `rgb(197, 168, 39,0.15)`);
   gradientTop.addColorStop(0.10, 'rgb(197, 168, 39,0)');
   ctx.fillStyle = gradientTop;
   ctx.fillRect(0, 0, gameWidth, gameHeight);
   
   // Left
   const gradientLeft = ctx.createLinearGradient(0, 0, gameWidth, 0);
   gradientLeft.addColorStop(0, `rgb(197, 168, 39,0.1)`);
   gradientLeft.addColorStop(0.02, 'rgb(197, 168, 39,0)');
   ctx.fillStyle = gradientLeft;
   ctx.fillRect(0, 0, gameWidth, gameHeight);

   // Right
   const gradientRight = ctx.createLinearGradient(gameWidth, 0, 0, 0);
   gradientRight.addColorStop(0, `rgb(197, 168, 39,0.1)`);
   gradientRight.addColorStop(0.02, 'rgb(197, 168, 39,0)');
   ctx.fillStyle = gradientRight;
   ctx.fillRect(0, 0, gameWidth, gameHeight);

}

function blackLinesAnimation() {
  ctx.beginPath();
  ctx.moveTo(0, 0);         // Starting point at the top-left corner
  ctx.lineTo(gameWidth, 0);  // Ending point at the top-right corner
  ctx.strokeStyle = 'black';   // Set the line color to black
  ctx.lineWidth = 100;           // Set the line width (adjust as needed)
  ctx.stroke();                // Draw the line
  ctx.closePath();
}
function matrixGradientAnimation() {
  if (matrixModeCounter > 1500) {
    if (matrixAnimationOpacity === 0.7) {
      manipulateMatrixOpacity = false;
    } else if (matrixAnimationOpacity === 0) {
      manipulateMatrixOpacity = true;
    }
  } else {
    manipulateMatrixOpacity = true;
    matrixAnimationOpacity -= 0.008;
  }
  console.log(matrixAnimationOpacity)
  console.log(matrixMode,)
  const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
  gradientBottom.addColorStop(0, `rgb(33,33, 33,${matrixAnimationOpacity})`);
  gradientBottom.addColorStop(0.2, 'rgb(33, 33, 33,0)');
  ctx.fillStyle = gradientBottom;
  ctx.fillRect(0, 0, gameWidth, gameHeight);

  // Top
  const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
  gradientTop.addColorStop(0, `rgb(33, 33, 33,${matrixAnimationOpacity})`);
  gradientTop.addColorStop(0.2, 'rgb(33, 33, 33,0)');
  ctx.fillStyle = gradientTop;
  ctx.fillRect(0, 0, gameWidth, gameHeight);

  if (matrixModeCounter > 1500 && manipulateMatrixOpacity) {
    matrixAnimationOpacity += 0.005;
  } else if (matrixModeCounter <= 1500) {
    manipulateMatrixOpacity = false;
    matrixAnimationOpacity -= 0.005;
  }
  console.log(matrixModeCounter)
}

function musicPlayerAnimation() {
    const gradientBottom = ctx.createLinearGradient(0, gameHeight, 0, 0);
    gradientBottom.addColorStop(0, `rgb(33, 33, 33,1)`);
    gradientBottom.addColorStop(0.05, 'rgb(33, 33, 33,0)');
    ctx.fillStyle = gradientBottom;
    ctx.fillRect(0, 0, gameWidth, gameHeight);

       // Top
       const gradientTop = ctx.createLinearGradient(0, 0, 0, gameHeight);
       gradientTop.addColorStop(0, `rgb(33, 33, 33,1)`);
       gradientTop.addColorStop(0.05, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientTop;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
       
       // Left
       const gradientLeft = ctx.createLinearGradient(0, 0, gameWidth, 0);
       gradientLeft.addColorStop(0, `rgb(33, 33, 33,0.25)`);
       gradientLeft.addColorStop(0.1, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientLeft;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
   
       // Right
       const gradientRight = ctx.createLinearGradient(gameWidth, 0, 0, 0);
       gradientRight.addColorStop(0, `rgb(33, 33, 33,0.5)`);
       gradientRight.addColorStop(0.1, 'rgb(33, 33, 33,0)');
       ctx.fillStyle = gradientRight;
       ctx.fillRect(0, 0, gameWidth, gameHeight);
  
}