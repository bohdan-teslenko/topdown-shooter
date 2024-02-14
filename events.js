// Key Events

let updateHealthBar = false
function getPressedKey(event) {
  if (inMainMenu) return
  if (gameOver) return
  if (event.type === 'keydown' && !pressedKeys.includes(event.key)) {
    pressedKeys.push(event.key)
    if (event.key === options.punchKey) {
      zoomApplied = true
      zoomSpeed += 0.1
      if (quickPunch) return;
      quickPunch = true;
      let punchX
      let punchY
      const punchDistance = 30;
      punchArray.push({ punchX, punchY, punchDistance });
    
      let punchingSpeed = [200,  800];
        if (musicPlayerOpened) {
          punchingSpeed = punchingSpeed.map((s) => s * 5);
        }
        setTimeout(() => {
          punchArray = [];
          punchedEnemies = [];
        }, punchingSpeed[0]);
        
        setTimeout(() => {
          quickPunch = false;
        }, punchingSpeed[1]);
    }

    if (event.key === 'Alt') {  
      altPressed = true
    }
      if (event.key === 'Escape') {
        // Pause the game pressing 'Esc'
        // Fix when game is running esc
        pauseTheGame()
        if (gamePaused) {
          continueButton.click()
        }
        if (inOptionsWindow) {
          // Close the options window if both in the main menu and options window
          optionsCloseButton.click();
        }

      }
      if(event.key === options.musicPlayerKey) {
        toggleMusicWindow()
      }

      if (event.key === options.enemyHealthKey) {
        displayEnemyHealth = true
      }
      if (event.key === options.takeKey) {
        if(ableTakeDrop) {
          takeDropButtonPressed = true
          
        }
      }
      if (event.key === options.reloadKey) {
          if(isReloading)return
          if(ammo === player.ammo) return
          if(punchWeaponChosen)return
          if(minigunWeaponChosen && miniGunBulletsStorage <= 0) return
            ammo = 0
            reloadRequired = true
            isReloading = true
            // Needed for adjusting reloading time left when going in and out of music player slowmotion. 
            reloadCounter = player.reloadTime
            player.randomR = Math.floor(Math.random() * 3)

            reloadCounterInterval = setInterval(() => {
              reloadCounter -= 50
              if(reloadCounter <= 0) {
                clearInterval(reloadCounterInterval)
                
              }
            }, 50);
            setTimeout(() => {
              if (reloadCounter <= 0) {
                ammo = player.ammo
                reloadRequired = false
                isReloading = false
                player.scopeCircumferance = 2
              }
            }, player.reloadTime);
            
      } 
      
      if (event.key === options.weaponWheelKey) {
        weaponSectionContainer.style.display = 'flex'
        tintBackground.style.opacity = '1'
        blurBackground.style.backdropFilter = 'blur(5px)'
        blurBackground.style.opacity = '1'
        blurBackground.style.transform = 'scale(1)'
        inWeaponWheel = true
      }

      if(event.key === options.wallKey) {
        if(mouseIsPressed) return
        spSide2.style.opacity = '0.5'
        setTimeout(() => {
          spSide2.style.opacity = '1'
        }, 100);
        if(!aimingWall){
          if(wallAmount > 0) {
            displayCancelSuperPowerBtn()
            // Remove walls that weren't placed because clicked different key like turretKey.
            const lastWallIndex = wallsArray.length-1;
            if(wallsArray.length > 1){
              if(wallsArray[lastWallIndex].placed === false) {
                wallsArray.splice(lastWallIndex, 1);
                }
            }
            // If one of the other abilities were chosen prior it cancels everything.
            turretMode = false
            turretSuperpowerHovered = false
            spSide4.style.opacity = '1';
            aimingGrenade = false
            grenadeSuperpowerHovered = false

            aimingWall = true
            wallSuperpowerHovered = true
            wallsArray.push(new Wall({x:mousePositionX,y:mousePositionY,placed:false}))
          } else {
            // Signal that there no wall left
            spSide2.style.backgroundColor = 'red'
            setTimeout(() => {
              spSide2.style.backgroundColor = ''
            }, 100);
          }
        }
        if (aimingWall && wallsArray.length > 0) {
          let lastIndex = wallsArray.length - 1;
          wallsArray[lastIndex].rotation += 10;
          wallsArray[lastIndex].aiming();

          if(wallsArray[lastIndex].rotation>=360){
            wallsArray[lastIndex].rotation = 0
          }
        }
       
       }
     if(event.key === options.grenadeKey) {
      if(grenadeAmount>0) {
        displayCancelSuperPowerBtn()
          // If one of the other abilities were chosen it cancels it.
        turretMode = false
        turretSuperpowerHovered = false
        spSide4.style.opacity = '1';
        aimingWall = false
        wallSuperpowerHovered = false

        grenadeSuperpowerHovered = true
      }
      aimingGrenade = true
      spSide3.style.opacity = '0.5'
      setTimeout(() => {
        spSide3.style.opacity = '1'
      }, 100);

      if(grenadeAmount <= 0) {
         // Signal that there no wall left
         spSide3.style.backgroundColor = 'red'
         setTimeout(() => {
           spSide3.style.backgroundColor = ''
         }, 100);
      }
      
     }
     
if (event.key === options.turretKey) {
  if (turretAmount > 0 && turretArray.length<1) {
    spSide4.style.opacity = '0.5';
    // setTimeout(() => {
    // spSide4.style.opacity = '1';
    // }, 100);
    displayCancelSuperPowerBtn()
    
    // If one of the other abilities were chosen it cancels it.
    aimingWall = false
    wallSuperpowerHovered = false
    aimingGrenade = false
    grenadeSuperpowerHovered = false

    turretMode = true;
    turretSuperpowerHovered = true
  
  } 
  if(turretAmount <= 0 && turretArray.length<1) {
    spSide4.style.opacity = '0.5';
    spSide4.style.backgroundColor = 'red';
    setTimeout(() => {
      spSide4.style.backgroundColor = '';
      spSide4.style.opacity = '1';
    }, 100);
  }
  }
  if(event.key === options.energyDrinkKey) {
    if(energyDrinkAmount>0){
      if(energyDrinkIsWorking)return
      energyDrinkDuration = 7
      energyDrinkIsWorking = true
      energyDrinkAmount --
      let energyDrinkCooldownEl = sideSuperPowers[4].cooldownEl
      energyDrinkInterval = setInterval(() => {
        if(energyDrinkDuration>0){
          spSide5.style.opacity = '0.5'
        }
        if (energyDrinkDuration < 10) {
          energyDrinkCooldownEl.style.left = '10px';
        } else if (energyDrinkDuration === 1) {
          energyDrinkCooldownEl.style.left = '';
        } else if (energyDrinkDuration <= 0 ){
          energyDrinkCooldownEl.style.left = '5px';
        }
        energyDrinkDuration --
        spSide5Cooldown.textContent = energyDrinkDuration
        energyDrinkAmountEl.style.display = 'none'
        if(energyDrinkDuration <= 0) {
          clearInterval(energyDrinkInterval)
          energyDrinkIsWorking = false
          spSide5Cooldown.textContent = ''
          energyDrinkAmountEl.style.display = 'block'
          spSide5.style.opacity = '1'
        }
      }, 1000);
    } else {
        if(energyDrinkIsWorking) return
        spSide5.style.backgroundColor = 'rgb(255,0,0,0.5)' // red with opacity
        setTimeout(() => {
          spSide5.style.backgroundColor = ''
        }, 100);
     
    }
  }
      if (inMainMenu) {
        const chosenItem = document.querySelector('.main-menu__item--chosen');
      
        if (event.key === 'ArrowDown') {
          if (chosenItem) {
            const nextItem = chosenItem.nextElementSibling;
      
            if (nextItem) {
              chosenItem.classList.remove('main-menu__item--chosen');
              nextItem.classList.add('main-menu__item--chosen');
            }
          }
        } else if (event.key === 'ArrowUp') {
          if (chosenItem) {
            const previousItem = chosenItem.previousElementSibling;
      
            if (previousItem) {
              chosenItem.classList.remove('main-menu__item--chosen');
              previousItem.classList.add('main-menu__item--chosen');
            }
          }
        } else if (event.key === 'Enter') {
          if (chosenItem.innerHTML.includes ('Play')) {
            // Emulates clicking 'Play'
            mainMenuPlay.click()
          } else if (chosenItem.innerHTML.includes ('Options')) {
            mainMenuOptions.click()
          }
        }
      }
  } else if (event.type === 'keyup') {
    const index = pressedKeys.indexOf(event.key)
    if (index !== -1) {
      pressedKeys.splice(index, 1)
    }
    if (event.key === 'Alt') {  
      altPressed = false
    }
    if (event.key === options.enemyHealthKey) {
      if(displayEnemyHpON) return
      displayEnemyHealth = false;
    }
    
    // Chose weapon on keys
      if (event.key === options.weaponWheelKey) {
        weaponSectionContainer.style.display = 'none'
        weaponStatsContainter.style.display = 'none'
        hoveringWeaponSection = false
        inWeaponWheel = false
        reloadWeaponFunction()
      }else if (inWeaponWheel && event.key >= '1' && event.key <= '6'){
        choseWeaponOnKeys(event)
        reloadWeaponFunction()
      }
    // Throw Grenade
    if(event.key === options.grenadeKey) {
      if(turretMode || aimingWall) return
      if(cancelSuperPower.style.visibility === 'hidden') return
      if(grenadeAmount > 0) {
        // Fix with pressed key because doesn't work the
        if(hoveringCancelSuperPowerBtn) return
        hideCancelSuperPowerBtn()
        aimingGrenade = false
        grenadeSuperpowerHovered = false
        
        const grenadePositionX = grenadeX
        const grenadePositionY = grenadeY
        const grenadeExplosionTime = (Math.floor(Math.random() * (4500 - 3000) + 3000))
        setTimeout(() => {
          grenadeExplosion({
            x:grenadePositionX,
            y:grenadePositionY}
            )
          grenadeArray.push(new Grenade({
            x:grenadePositionX,
            y:grenadePositionY
          }))
        }, grenadeExplosionTime);

        grenadeAmount -= 1
      
        // Close music window
        if(musicPlayerOpened) {
          toggleMusicWindow()
        }
      } 
    }


  }

}
document.addEventListener('keydown', getPressedKey)
document.addEventListener('keyup', getPressedKey)

function displayCancelSuperPowerBtn() {
  cancelSuperPower.style.opacity = '1'
  cancelSuperPower.style.visibility = 'visible'
  cancelSuperPower.style.transform = 'scale(1)'
}
function hideCancelSuperPowerBtn() {
  cancelSuperPower.style.opacity = '0'
  cancelSuperPower.style.visibility = 'hidden'
  cancelSuperPower.style.transform = 'scale(0.5)'
}

function choseWeaponOnKeys(event){
  inWeaponWheel = false;
  weaponSectionContainer.style.display = 'none';
  weaponStatsContainter.style.display = 'none'
  hoveringWeaponSection = false
  clearTimeout(displayWeaponStatsTimeout)
    if(event.key === '6') {
      console.log('?')
    } else if(event.key === '1') {
      chosenWeapon = 'Automatic';
      automaticWeaponChosen = true;
      shotgunWeaponChosen = false
      minigunWeaponChosen = false;
      sniperWeaponChosen = false;
    }else if(event.key === '2') {
      chosenWeapon = 'Shot';
      automaticWeaponChosen = false;
      shotgunWeaponChosen = true
      minigunWeaponChosen = false;
      sniperWeaponChosen = false;
    } else if(event.key === '3') {
      chosenWeapon = 'Minigun';
      automaticWeaponChosen = false;
      shotgunWeaponChosen = false
      minigunWeaponChosen = true;
      sniperWeaponChosen = false;
    } else if(event.key === '4') {
      chosenWeapon = 'Sniper';
      automaticWeaponChosen = false;
      shotgunWeaponChosen = false;
      minigunWeaponChosen = false;
      sniperWeaponChosen = true
    }

  weaponArray.forEach((weapon) => {
    if(weapon.name === chosenWeapon){
      player.ammo = weapon.magazineSize;
      player.reloadSpeed = weapon.reloadSpeed;
      player.originalReloadSpeed = weapon.reloadSpeed;
      player.originalReloadTime = weapon.reloadTime;
      player.reloadTime = weapon.reloadTime;
      player.accuracy = weapon.accuracy;
      player.range = weapon.range;
      player.weaponWeight = weapon.weaponWeight;
    } 
  } 
)
    
}

function reloadWeaponFunction() {
  if(blurBackground.style.opacity !== 0 ){
    blurBackground.style.opacity = '0'
    blurBackground.style.transform = 'scale(0)'
    tintBackground.style.opacity = '0'
  }
  
  if(punchWeaponChosen) return
  if(minigunWeaponChosen && miniGunBulletsStorage <= 0) return
  isReloading = false
  if(isReloading)return
    if(ammo === player.ammo) return

      ammo = 0
      reloadRequired = true
      isReloading = true
      // Needed for adjusting reloading time left when going in and out of music player slowmotion. 
      reloadCounter = player.reloadTime
      player.randomR = Math.floor(Math.random() * 3)

      reloadCounterInterval = setInterval(() => {
        reloadCounter -= 50
        if(reloadCounter <= 0) {
          clearInterval(reloadCounterInterval)
          
        }
      }, 50);
      setTimeout(() => {
        if (reloadCounter <= 0) {
          ammo = player.ammo
          reloadRequired = false
          isReloading = false
          player.scopeCircumferance = 2
        }
      }, player.reloadTime);
}

// Get Key
let shootingInterval
let periodicFire = false
let periodicLength = 3
function isMousePressedFunction(event) {
  if(event.type === 'mousedown') {
    mouseIsPressed = true
    getMousePosition(event);
    shootingInterval = setInterval(() => {
      getMousePosition(event);
    }, 1);
  } else if (event.type === 'mouseup') {
    mouseIsPressed = false

    clearInterval(shootingInterval);
  }

}
document.addEventListener('mousedown', isMousePressedFunction)
document.addEventListener('mouseup', isMousePressedFunction)

// Get mouse position on click
function getMousePosition(event) {
  if(hoveringHealthStash||hoveringManaStash||hoveringNavbar||hoveringMusicPlayer||hoveringSuperpowerBar||hoveringCancelSuperPowerBtn ) return
  if(inMainMenu) return
  if(gamePaused) return
  if(gameOver) return
  if(rewindTimeAnimation) return
  // Place wall
  if (aimingWall) {
    hideCancelSuperPowerBtn()
    aimingWall = false;
    wallSuperpowerHovered = false
    const lastWallIndex = wallsArray.length-1;
    wallsArray[lastWallIndex].placed = true;
    wallAmount--;

    wallsArray[lastWallIndex].remove()
  }
  // Place turret
  if (turretMode) {
      hideCancelSuperPowerBtn()
      turretMode = false;
      turretSuperpowerHovered = false
      turretAmount --
      const turretDuration = 10000
      const cooldown = 60
      const turretPositionX = turretX
      const turretPositionY = turretY
      turretArray.push({
        x: turretPositionX,
        y: turretPositionY,
        duration: turretDuration,
        timerRunout: false,
        timerIsRunning:false,
        cooldown: cooldown,
        cooldownFull : cooldown,
        cooldownIsRunning : false
    });
    
  }
    // Bullet
    mouseX = mousePositionX
    mouseY = mousePositionY
    const directionX = mouseX - player.x;
    const directionY = mouseY - player.y;
    if(blastMode){
      spread = 0.2
    }
    const deviation = (Math.random() - 0.5) * spread;
    const angle = Math.atan2(directionY, directionX) + deviation;
    const velocityX = Math.cos(angle);
    const velocityY = Math.sin(angle);
    // Twitching cursor animation
    if(miniGunIsFiring && !isReloading) {
      mousePositionX += deviation *  Math.random() * (15 - 0) + 0;
      mousePositionY += deviation *  Math.random() * (15 - 0) + 0;
    }
    // Blast superpower
    let blastInterval
    if(automaticWeaponChosen && blastMode) {
      blastInterval = setInterval(() => {
        bulletArray.push(new Bullet({
          velocity: { x: velocityX, y: velocityY }
        }));
        isFired = true
      }, 1);
      setTimeout(() => {
        blastMode = false
        clearInterval(blastInterval)
        isFired = false
      },50);
    }

    // Punch
    if(punchWeaponChosen) {
        if (executingPunch) return;
        isReloading = false
        executingPunch = true;
        let punchX
        let punchY
        const punchDistance = 30;
        punchArray.push({ punchX, punchY, punchDistance });
        let punchingSpeed = [200, 400];
        if (musicPlayerOpened) {
          punchingSpeed = punchingSpeed.map((s) => s * 5);
        }
        stopStaminaRegeneration = true
        if(energyDrinkIsWorking){
          stamina -= 5
        } else {
          stamina -= 10
        }
        setTimeout(() => {
          punchArray = [];
          punchedEnemies = [];
        }, punchingSpeed[0]);
        
        setTimeout(() => {
          executingPunch = false;
          stopStaminaRegeneration = false
        }, punchingSpeed[1]);

    }

    // Bullet all for weapons
    if (!isFired && ammo > 0) {
    if(inWeaponWheel) return
    if(aimingWall || aimingGrenade) return
    if(quickPunch || punchWeaponChosen) return
    if(shotgunWeaponChosen){
      shotGunAttack()
      ammo--
      if(energyDrinkIsWorking){
        stamina -= 7.5
      } else {
        stamina -= 15
      }
      stopStaminaRegeneration = true
      clearTimeout(shotGunStaminaTimeout)
      shotGunStaminaTimeout = setTimeout(() => {
        stopStaminaRegeneration = false
      }, 750);
    } else if (minigunWeaponChosen && !isReloading && !miniGunIsFiring){
      miniGunAttack()
    } else {
         // If Power Shot is activated kill any enemy with one shot
         if (powerShotMode) {
          if(powerShotCount < powerShotAmount){
            powerShotCount ++
          } else {
            powerShotMode = false 
            powerShotCount = 0
          }
        }
      
      clearTimeout(staminaRegenerationTimeout)
      stopStaminaRegeneration = true
      staminaRegenerationTimeout = setTimeout(() => {
        stopStaminaRegeneration = false
      }, 750);
      bulletArray.push(new Bullet({
        velocity: { x: velocityX, y: velocityY }
      }));
      if(minigunWeaponChosen){
        miniGunBulletsStorage -= 1
        if(energyDrinkIsWorking){
          stamina -= 1.5
        }else {
          stamina -= 3
        }
      }
      if(automaticWeaponChosen){
        if(energyDrinkIsWorking){
          stamina -= 1
        }else {
          stamina -= 6
        }
       }
      if(sniperWeaponChosen){
        if(energyDrinkIsWorking){
          stamina -= 5
        }else {
          stamina -= 10
        }
      }
      ammo --
  
    }
    isFired = true;

      setTimeout(() => {
        isFired = false;
      }, player.reloadSpeed);
    } else {
      reloadRequired = true
      return
    }
    if(ammo <= 0 ) {
      reloadWeaponFunction()
      
    }

}

let miniGunSpinningTime
function miniGunAttack() {
  if(miniGunCounterIsWorking) return
  miniGunCounterIsWorking = true
  miniGunInterval = setInterval(() => {
    if (mouseIsPressed) {
      miniGunCounter += 100;
      if (miniGunCounter >= miniGunSpinningTime) { // Time minigun baraban is spinning before start firing.
        miniGunIsFiring = true;
      }
      
    } else {
      miniGunIsFiring = false;
      miniGunCounterIsWorking = false
      stopStaminaRegeneration = false
      miniGunCounter = 0;
      clearInterval(miniGunInterval);
    }
  }, 100);

}

function shotGunAttack() {
  const numberOfBullets = 5;
  for (let i = 0; i < numberOfBullets; i++) {
    const directionX = mouseX - player.x;
    const directionY = mouseY - player.y;
    const spreadAngle = (i - Math.floor(numberOfBullets / 2)) * 0.02; // Adjust spread angle as needed
    const angle = Math.atan2(directionY, directionX) + spreadAngle;
    const bulletVelocityX = Math.cos(angle);
    const bulletVelocityY = Math.sin(angle);
    
    const randomBulletSpeed = Math.random() * (15 - 6) + 6

    // Create a bullet for each angle
    bulletArray.push(new Bullet({
      velocity: { x: bulletVelocityX, y: bulletVelocityY },
      bulletSpeed: randomBulletSpeed,
      ricocheted:false
    }));
  }
}

function shotShotSHOTSuperPower() {
  const numberOfBullets = 3;
  shotShotSHOTArray.forEach((enemy) => {
    for (let i = 0; i < numberOfBullets; i++) {
      const spreadAngle = (i - Math.floor(numberOfBullets / 2)) * 0.15;
      const angle = Math.atan2(enemy.trajectoryY, enemy.trajectoryX) + spreadAngle;
      const bulletVelocityX = Math.cos(angle);
      const bulletVelocityY = Math.sin(angle);
      bulletArray.push(new Bullet({
        x: enemy.x + 10,
        y: enemy.y + 10 ,
        shotShotSHOT:true,
        velocity: { x: bulletVelocityX, y: bulletVelocityY },
      }));
    }

    setTimeout(() => {
      enemyArray[enemy.enemyIndex].shotShotSHOTApplied = false;
  }, 150);

  });
  
  shotShotSHOTArray = []
}

function thunderSuperPower() {
    const numberOfBullets = 25;
    // Calculate angles for each bullet in a circular pattern
    for ( let i = 0; i < numberOfBullets; i++) {
      const angle = (i / numberOfBullets) * (2 * Math.PI);
      const bulletVelocityX = Math.cos(angle);
      const bulletVelocityY = Math.sin(angle);
      // Create a bullet for each angle
      bulletArray.push(new Bullet({
        velocity: { x: bulletVelocityX, y: bulletVelocityY }
      }));
    
    }
}