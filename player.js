let NUM
function randomNumber(max,min) {

 NUM = Math.random() * (max - min ) + min
}

class Player {
  static randomN = Math.floor(Math.random() * (6 - 3) + 3);

  constructor() {
    this.radius = 15
    this.x = gameWidth / 2 // Starting positing right at the center of the screen
    this.y = gameHeight / 2
    this.originalPlayerVelocity = 7
    this.weaponWeight = weaponWeight
    this.velocity = 7
    this.health = health
    this.mana = mana
    this.ammo = ammo
    this.reloadSpeed = reloadSpeed
    this.originalReloadSpeed = originalReloadSpeed
    this.originalReloadTime = originalReloadTime
    this.reloadTime = reloadTime
    this.scopeCircumferance = 2
    this.randomR
    this.damage = damage
    this.spread = spread
    this.spreadWhenMoving = this.spreadWhenMoving
    this.range = range
    this.isMoving = isMoving
    this.rangeValue
    // Shield
    this.shieldRadius = 130
    this.shieldOpacity = 0.3
    this.revivalShieldRadius = this.radius + 30
    this.increasedPlayerRadius = this.radius*1.5
    // Summon

    // Slice Explosion radnom side
  }

  update() {
    this.weaponDamage()
    this.draw()
    this.drawScope()
    this.drawLaser()
    this.move()
    this.drawSliceExplosion()
    this.transparentBars()
    this.bulletTeleport()
    this.drawBulletTeleportAnimation()
    this.rewindTime()
    this.punch()
  }

  rewindTime() {
    if(rewindTimeMode) {
      this.radius = 15
      const lastCheckpoint = checkpointArray[0]
      this.x = lastCheckpoint.x
      this.y = lastCheckpoint.y
      health = lastCheckpoint.health
      armor = lastCheckpoint.armor
      stamina = lastCheckpoint.stamina
    }
  }

  weaponDamage() {
    if(minigunWeaponChosen) {
      ammoElement.textContent = miniGunBulletsStorage
      if(isReloading) {
        ammoElement.textContent = '0'
      }
    }else {
      ammoElement.textContent = ammo
    }
    
    if (this.isMoving) {
      spread = this.spreadWhenMoving
    } else {
      spread = this.spread
    }
    if(quickPunch || punchWeaponChosen) {
      this.damage = Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (automaticWeaponChosen) {
      this.damage = Math.floor(Math.random() * (1700 - 1000) + 1000);
    } else if (shotgunWeaponChosen) {
      this.damage = Math.floor(Math.random() * (1100 - 700) + 700); // per pellet
    } else if (minigunWeaponChosen) {
      this.damage = Math.floor(Math.random() * (1200 - 600) + 600);
    } else if (sniperWeaponChosen) {
      this.damage = Math.floor(Math.random() * (2500 - 2000) + 2000);
    }
  }

  combo() {
    
  }
  draw() {
    if(rewindTimeAnimation) return
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()


        // Circle around the player.
        if(!justRevived){
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius + 15, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(0, 255, 255, 0.3)`;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.closePath();
        }

       // SHIELD Super Power
        if (shieldMode) {
          const angle = Math.atan2(mousePositionY - this.y, mousePositionX - this.x);
          const startAngle = angle - 0.3 * Math.PI;
          const endAngle = angle + 0.3 * Math.PI;
          // Green circular border
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.shieldRadius, startAngle, endAngle);
          ctx.strokeStyle = `rgba(0, 255, 0, ${this.shieldOpacity})`
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.closePath();
          let insideShieldColor = `rgba(0, 0, 255, 0.1)`

          enemyArray.forEach((enemy) => {
            let enemyAngle = Math.atan2(enemy.y+enemy.radius - this.y, enemy.x+enemy.radius - this.x);
            
    enemyBulletArray.forEach((bullet) => {
                
      const enemyDistance = Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2);
      
      if (enemyDistance <= this.shieldRadius) {
          bullet.ricocheted = false
          }
        })
            const enemyDistance = Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2);
          
            if (enemyDistance <= this.shieldRadius) {
            // Slow down enemies in the blue circle radius
              enemy.velocity = enemy.velocity/2
              insideShieldColor = `rgba(125, 33, 0, 0.1)`
            }
          });

           // Blue circle
           ctx.beginPath();
           ctx.arc(this.x, this.y, this.shieldRadius, 0, 2 * Math.PI);
           ctx.fillStyle = insideShieldColor // Blue fill color with opacity
           ctx.fill();
           ctx.closePath();

        enemyBulletArray.forEach((bullet, bulletIndex) => {
          
          const bulletDistance = Math.sqrt((bullet.x - this.x) ** 2 + (bullet.y - this.y) ** 2);
             
          if (bulletDistance <= this.shieldRadius) {
              const bulletAngle = Math.atan2(bullet.y - this.y, bullet.x - this.x);
              
              if (bulletAngle >= startAngle && bulletAngle <= endAngle) {
                  const shieldCenterAngle = Math.atan2(this.y - mousePositionY, this.x - mousePositionX);
                  const ricochetAngle = 2 * shieldCenterAngle - bulletAngle; // Reflect angle
      
                  const newVelocityX = Math.cos(ricochetAngle);
                  const newVelocityY = Math.sin(ricochetAngle);
                  bullet.velocity.x = newVelocityX * bullet.bulletSpeed*3;
                  bullet.velocity.y = newVelocityY * bullet.bulletSpeed*3;
                  bullet.ricocheted = true
              }
          }

          enemyArray.forEach((enemy) => {
            let distance

            // Fix ricochet
            // const enemyDistance = Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2);
            // if (enemyDistance <= this.shieldRadius) {
            //   bullet.ricocheted = false
            // }
             // if(enemyAngle >= startAngle && enemyAngle <= endAngle) {
            //   enemyBulletArray.forEach((bullet) => {
            //     bullet.ricocheted = false
            //   })
            // }

            if(bullet.ricocheted) {
               distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y)
            }
            if (distance < enemy.radius + bullet.width / 2) {
              enemyBulletArray.splice(bulletIndex, 1);
              const damage = Math.floor(Math.random() * (700 - 300) + 300)
              enemy.health -= damage;
              ctx.font = '40px Poppins';
              ctx.fillStyle = 'white';
              ctx.fillText(damage, enemy.x, enemy.y);
              if (enemy.health <= 0) {
                const index = enemyArray.indexOf(enemy);
                if (index !== -1) {
                  enemyIllusionArray.splice(index, 1);
                }
              }
          }
          })


      });
        
        }
        if (justRevived) {
          this.radius = this.increasedPlayerRadius;
        // Green circle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.revivalShieldRadius, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(0, 255, 0, 0.1)`; // Blue fill color with opacity
          ctx.fill();
          ctx.closePath();
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.revivalShieldRadius, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(0, 255, 0, 0.35)`; // Green border with opacity
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.closePath();

          // Push enemies out that are in the revivalShieldRadius on the moment of revival.
          enemyArray.forEach((enemy) => {
            const enemyDistance = Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2);
            if (enemyDistance <= this.revivalShieldRadius) {
              enemy.velocity = enemy.velocity - 3
            }
          });
      }else {
        this.radius = 15
      }
    
  }

  drawScope() {
      //  Scope for the part outside the range when aiming 
       if (mouseBeyoundSuperPowerRange) {
        if(wallSuperpowerHovered || turretSuperpowerHovered || grenadeSuperpowerHovered) {
          ctx.beginPath()
          ctx.arc(mousePositionX, mousePositionY, 7, 0, 2 * Math.PI)
          ctx.fillStyle = 'rgba(255,255, 255, 0.9)'
          ctx.fill()
          ctx.closePath()
        }
      }
    if(aimingWall) return
    if(turretMode) return
    if(grenadeAmount > 0 && aimingGrenade) return
    if(sniperWeaponChosen && !isReloading) return
    if(noManaNotification) return
    if(gameOver) return

    let rFontSize = `700 15px Orbitron`
    let scopeSize 
    let gapSize
    let scopeCircleRadius
    let scopeLineWidth

    if(punchWeaponChosen) {
      ctx.beginPath()
      ctx.arc(mousePositionX, mousePositionY, 5, 0, 2 * Math.PI)
      ctx.fillStyle = 'rgba(255,255, 255, 0.7)'
      ctx.fill()
      ctx.closePath()
    }
     if (automaticWeaponChosen) {
       scopeSize = 20;
       gapSize = 10;
       scopeCircleRadius = 25;
       
      if (isFired) {
        randomNumber(3,7)
        scopeSize += NUM;
        scopeCircleRadius += 3;
      }
      if (this.isMoving) {
        scopeSize += 3;
        scopeCircleRadius += 5;
      }
    }
    if (shotgunWeaponChosen) {
      scopeCircleRadius = 33;
      if (this.isMoving) {
        scopeCircleRadius += 4;
      }
      if (isFired) {
        scopeCircleRadius += 6;
      }
    }
    if (minigunWeaponChosen) {
        scopeSize = 20;
        gapSize = 10;
        scopeCircleRadius = 30;
        scopeLineWidth = 2;
        rFontSize = `0px Poppins`;
      if (this.isMoving) {
        scopeSize += 2
        scopeCircleRadius += 3
      }
      if(!isReloading) {
        if(isFired && !miniGunIsFiring) { // slightly twitching scope before minigun start firing signifying spinning baraban
          randomNumber(0,5)
          scopeSize += NUM;
          scopeCircleRadius += 1;
        }
        if (miniGunIsFiring) {
          randomNumber(7,17)
          scopeSize += NUM;
          scopeCircleRadius += 5;
        }
      }
    }
    if(sniperWeaponChosen && isReloading) {
      scopeCircleRadius = 25;
    }
    

    // Reloading scope animation
    let scopeCircleColor
    let scopeColor = 'rgba(255, 255, 255, 1)';
    if(this.randomR === 0) {
      scopeCircleColor = 'rgba(0, 0, 0, 0.5)'
    }else {
      scopeCircleColor = 'rgba(255, 255, 255, 0.5)';
    }    
    enemyArray.forEach((enemy) => {
      const distance = Math.hypot(enemy.x - mousePositionX, enemy.y - mousePositionY);
      // Scope turns red if hover over the enemy.
        if(!isReloading){
          if (distance <= enemy.radius) {
            scopeCircleColor = 'rgba(255, 0, 0, 0.5)';
            scopeColor = 'rgba(255, 0, 0, 0.5)';
          }
          // Turn red green if hover over the enemy and shooting.
          if (distance <= enemy.radius && mouseIsPressed) {
            scopeCircleColor = 'green';
            scopeColor = 'green';
          } 
        }
    });
    if(isReloading) {
      scopeColor = 'transparent'
    }

    // Scope circle
    ctx.beginPath();
    ctx.arc(mousePositionX, mousePositionY, scopeCircleRadius, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = scopeCircleColor;
    ctx.stroke();
    // Draw horizontal lines
    ctx.beginPath();
    ctx.moveTo(mousePositionX - scopeSize / 2, mousePositionY);
    ctx.lineTo(mousePositionX - gapSize / 2, mousePositionY);
    ctx.moveTo(mousePositionX + gapSize / 2, mousePositionY);
    ctx.lineTo(mousePositionX + scopeSize / 2, mousePositionY);
    ctx.lineWidth = scopeLineWidth;
    ctx.strokeStyle = scopeColor
    ctx.stroke();
    
    // Draw vertical lines
    ctx.beginPath();
    ctx.moveTo(mousePositionX, mousePositionY - scopeSize / 2);
    ctx.lineTo(mousePositionX, mousePositionY - gapSize / 2);
    ctx.moveTo(mousePositionX, mousePositionY + gapSize / 2);
    ctx.lineTo(mousePositionX, mousePositionY + scopeSize / 2);
    ctx.lineWidth = scopeLineWidth;
    ctx.strokeStyle =  scopeColor
    ctx.stroke();

    // R at the center when reloading
    if(isReloading) {
        ctx.font = rFontSize
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const rText = 'R';
        ctx.fillText(rText, mousePositionX - 5, mousePositionY + 9);
      // Reloading animation
      let reloadingAnimationColor
      if(this.randomR === 0){
        reloadingAnimationColor = 'orange'
      } else if (this.randomR === 1) {
        reloadingAnimationColor = 'white'
      } else if (this.randomR === 2) {
        reloadingAnimationColor = 'black'
      }
      this.scopeCircumference = (2 * Math.PI) * (1 - reloadCounter / player.reloadTime);
      ctx.beginPath();
      ctx.arc(mousePositionX, mousePositionY, scopeCircleRadius, 0, this.scopeCircumference);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = reloadingAnimationColor; 
      ctx.stroke();
      ctx.closePath();    
    }

  }
  // Laser for sniper weapon
  drawLaser() {
    if(gameOver)return
    if(turretMode || aimingWall || aimingGrenade) return
    if(sniperWeaponChosen && isFired) return
    if(sniperWeaponChosen && !isReloading ){
            let gradient = ctx.createLinearGradient(this.x, this.y, mousePositionX, mousePositionY);
            gradient.addColorStop(0, 'rgba(0, 255, 0, 0.1)');  // Starting color at the player
            gradient.addColorStop(1, 'rgba(0, 255, 0, 1)');  // Ending color at the endpoint
            // Draw the laser with the gradient stroke
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);  // Starting point of the laser 
            ctx.lineTo(mousePositionX,mousePositionY);  // Ending point of the laser 
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;  // Starting width
            ctx.stroke();
            ctx.closePath();
        }
    
}

  move() {
    // Consider weapon weight it affects player velocity.
    if(punchWeaponChosen){
      this.weaponWeight = 0
    }
    this.velocity = this.originalPlayerVelocity - this.weaponWeight

    // If player is shooting and moving simulateniously speed is reduced in 2.5 
    if (stopStaminaRegeneration) {
      this.velocity = this.velocity / 2
    }
    if(musicPlayerOpened) {
      this.velocity = this.velocity / 5
      this.reloadSpeed = this.originalReloadSpeed * 5
      this.reloadTime = this.originalReloadTime * 5
    } else {
      this.reloadSpeed = this.originalReloadSpeed
      this.reloadTime = this.originalReloadTime
    }
    
    if(rageMode) {
      this.reloadSpeed = this.reloadSpeed / 2; // Increase reloading speed
      this.velocity = this.velocity * 2; // Increase moving speed
    }
    // Stamina effect on velocity 
    let velocityDecrease
    const staminaPercent = Math.floor(staminaPercentage)
    if(staminaPercent < 100 && !stopStaminaRegeneration){
      velocityDecrease = (100 - staminaPercent) * 0.020; // 1.5 velocity decrease when stamina is 0
      this.velocity = this.velocity - velocityDecrease
    }


    const borderThreshold = 100; // Define the distance from the border to trigger screen movement
    // Check if the player is close to any of the borders
    const isNearTop = this.y < borderThreshold;
    const isNearBottom = this.y > gameHeight - borderThreshold;
    const isNearLeft = this.x < borderThreshold;
    const isNearRight = this.x > gameWidth - borderThreshold;

    const directionX = mousePositionX - player.x;
    const directionY = mousePositionY - player.y;
    const angle = Math.atan2(directionY, directionX);
    const velocityX = Math.cos(angle);
    const velocityY = Math.sin(angle);

    // Can't go further than initial boarders.
    // this.y = Math.max(this.radius, Math.min(gameHeight - this.radius, this.y))
    // this.x = Math.max(this.radius, Math.min(gameWidth - this.radius, this.x))

    // Move beyound initial boarders
    enemyArray.forEach((enemy) => {
      bossArray.forEach((boss) => {
      if(!this.isMoving)return
      if(isNearTop){
        enemy.y += this.velocity/2
        boss.y += this.velocity/2
       } else if(isNearBottom) {
        enemy.y -= this.velocity/2
        boss.y -= this.velocity/2
       } else if(isNearLeft) {
        enemy.x += this.velocity/2
        boss.x += this.velocity/2
       } else if(isNearRight) {
        enemy.x -= this.velocity/2
        boss.x -= this.velocity/2
       }
      })
    }) 
    for (const key of pressedKeys) {
      if (key === 'ArrowUp' || key === 'w') {
        if (!isNearTop) {
          this.y -= this.velocity; // Move character up
        }
      } else if (key === 'ArrowDown' || key === 's') {
        if (!isNearBottom) {
          this.y += this.velocity; // Move character down
        }
      } else if (key === 'ArrowLeft' || key === 'a') {
        if (!isNearLeft) {
          this.x -= this.velocity; // Move character left
        }
      } else if (key === 'ArrowRight' || key === 'd') {
        if (!isNearRight) {
          this.x += this.velocity; // Move character right
        }
      } else if (key === options.sliceKey) { // Slice superpower
          if(!sliceMode) {
            if(musicPlayerOpened) {
              toggleMusicWindow()
            }
            sliceMode = true
            this.x += velocityX * 200
            this.y += velocityY * 200
            sliceExplosion({x:this.x,y:this.y})
            reloadSlice()
          }
       }
    } 
    if (
      pressedKeys.includes('w') ||
      pressedKeys.includes('s') ||
      pressedKeys.includes('a') ||
      pressedKeys.includes('d') ||
      pressedKeys.includes('ArrowUp') ||
      pressedKeys.includes('ArrowDown') ||
      pressedKeys.includes('ArrowLeft') ||
      pressedKeys.includes('ArrowRight' || 
      pressedKeys.includes(options.sliceKey))
    ) {
      this.isMoving = true;
    } else {
      this.isMoving = false;
    }

    // Slice,Wall,Grenade,Turret range 
    const spSlice = 200;
    const spWall = 250;
    const spGrenade = 350;
    const spTurret = 125;
    let rangeValue;

    if (sliceSuperpowerHovered) {
        rangeValue = spSlice;
    } else if (wallSuperpowerHovered) {
        rangeValue = spWall;
    } else if (grenadeSuperpowerHovered) {
        rangeValue = spGrenade;
    } else if (turretSuperpowerHovered) {
        rangeValue = spTurret;
    }
    this.rangeValue = rangeValue
    wallsArray.forEach((wall) => {
      wall.rangeValue = rangeValue
    })
    
    let circleColor;
    let backgroundColor;
    let rangeColor;
    
    if (hoveringSuperpowerBar) {
        circleColor = 'rgba(0, 0, 255, 0.45)';
        backgroundColor = 'rgba(0, 0, 255, 0.04)';
        rangeColor = 'rgba(0, 0, 255, 0.35)';
        cancelSuperPower.style.boxShadow = '0px 0px 20px rgba(0, 0, 255, 0.2)'
        cancelSuperPower.style.textShadow = '0px 0px 10px rgba(12, 0, 255, 0.9)'
    } else {
        circleColor = 'rgba(0, 255, 0, 0.45)';
        backgroundColor = 'rgba(0, 255, 0, 0.04)';
        rangeColor = 'rgba(0, 255, 0, 0.35)';
        cancelSuperPower.style.boxShadow = ''
        cancelSuperPower.style.textShadow = ''
    }
    // Draw range animation
    let rangeX = this.x + velocityX * rangeValue;
    let rangeY = this.y + velocityY * rangeValue;
    let distance = Math.sqrt((rangeX - this.x) ** 2 + (rangeY - this.y) ** 2);

    // Line 
    if (sliceSuperpowerHovered || grenadeSuperpowerHovered) {
        let lineThickness = 5
        if(grenadeSuperpowerHovered) {lineThickness = 0.5}
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(rangeX, rangeY);
        ctx.strokeStyle = rangeColor;
        ctx.lineWidth = lineThickness;
        ctx.stroke();
        ctx.closePath();
    }
    
    // Green circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, distance, 0, 2 * Math.PI);
    ctx.strokeStyle = circleColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.closePath();
    
    // Slight green background of the circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, distance, 0, 2 * Math.PI);
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.closePath();
    
  }

  transparentBars() {
    barsArray.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect();
      if (
        this.x + this.radius * 3 > barPosition.x &&
        this.x - this.radius * 3 < barPosition.x + barPosition.width &&
        this.y + this.radius * 3 > barPosition.y &&
        this.y - this.radius * 3 < barPosition.y + barPosition.height
      ) {
        bar.style.opacity = '0.3';
        bar.style.transition = '0.5s'
      } else {
        bar.style.opacity = '1'
      }

      if (killedDisplay.style.opacity !== navDisplay.style.opacity) {
        killedDisplay.style.opacity = navDisplay.style.opacity;
      }


      bar.style.zIndex = '3' // all navbars should be above blur and tint z-index
    });
    
    // When music player opened and player on the music player window make it slightly transparent.
    const musicPlayerPosition = musicPlayer.getBoundingClientRect();
    if (
      this.x + this.radius > musicPlayerPosition.x &&
      this.x - this.radius < musicPlayerPosition.x + musicPlayerPosition.width &&
      this.y + this.radius > musicPlayerPosition.y &&
      this.y - this.radius < musicPlayerPosition.y + musicPlayerPosition.height
    ) {
      musicPlayer.style.opacity = '0.5';
      musicPlayer.style.transition = '0.5s';
    } else {
      musicPlayer.style.opacity = '1';
    }


  }

  punch() {

    punchWeapon.addEventListener('mouseover', () => {
      punchWeaponChosen = true
      ammoElement.style.opacity = '0'
      arcenalAmmoImg.style.opacity = '0'
    })
    if(punchWeaponChosen === false){
      ammoElement.style.opacity = '1'
      arcenalAmmoImg.style.opacity = '1'
    }

    if (quickPunch || punchWeaponChosen) {
      punchArray.forEach((punch) => {
        
        const directionX = mousePositionX - this.x;
        const directionY = mousePositionY - this.y;
        const angle = Math.atan2(directionY, directionX);
        const velocityX = Math.cos(angle);
        const velocityY = Math.sin(angle);
        
        punch.punchX = player.x + velocityX * player.radius;
        punch.punchY = player.y + velocityY * player.radius;

        ctx.beginPath();
        ctx.rect(punch.punchX - punch.punchDistance / 2, punch.punchY - punch.punchDistance / 2, punch.punchDistance, punch.punchDistance);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
      })
  
    }
    
  }

  bulletTeleport() {
    let firstBullet = bulletArray[0];

    if (bulletArray.length > 0 && bulletTeleportMode) {
      this.x = firstBullet.x;
      this.y = firstBullet.y;
      bulletTeleportAnimation()
      bulletTeleportMode = false
      
    }
  }

  drawBulletTeleportAnimation() {
    if (bulletTeleportArray.length > 0) {
      bulletTeleportArray.forEach((explPiece, index) => {
        ctx.beginPath();
        ctx.arc(explPiece.x, explPiece.y, explPiece.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
        explPiece.x -= 10 * explPiece.randomX;
        explPiece.y -= 10 * explPiece.randomY;
        if (explPiece.x < 0 || explPiece.y < 0) {
          // Remove the element from the array
          bulletTeleportArray.splice(index, 1);
        }
      });
    }
  }
  
  drawSliceExplosion() {
    if (sliceExplosionArray.length > 0) {
      sliceExplosionArray.forEach((explPiece, index) => {
        ctx.beginPath();
        ctx.arc(explPiece.x, explPiece.y, explPiece.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
  
        explPiece.x -= 7 * explPiece.randomX;
        explPiece.y -= 6 * explPiece.randomY;
  
        // Check if the element has gone beyond boundaries
        if (explPiece.x < 0 || explPiece.y < 0) {
          // Remove the element from the array
          sliceExplosionArray.splice(index, 1);
        }
      });
      
      
    }
  }

}

let bulletTeleportArray = []
function bulletTeleportAnimation() {
  const explosionPieces = 20
  for (let i = 0; i < explosionPieces; i++){
    const radius = Math.floor(Math.random() * (4 - 1) + 1)
    const randomX = Math.random() - 0.5;
    const randomY = Math.random() - 0.5;
    sliceExplosionArray.push({x: player.x, y: player.y,radius: radius,randomX:randomX, randomY: randomY })

  }
}
function sliceExplosion({x,y}) {
  const explosionPieces = 10
  for (let i = 0; i < explosionPieces; i++){
    const radius = Math.floor(Math.random() * (4 - 1) + 1)
    const randomX = Math.random() - 0.5;
    const randomY = Math.random() - 0.5;
    sliceExplosionArray.push({x: x, y: y,radius: radius,randomX:randomX, randomY: randomY })

  }

}
function reloadSlice() {
  if(sliceMode) {
    sliceDamageEffect = true
    sliceDamage = Math.floor(Math.random() * (1000 - 300) + 300);
    setTimeout(() => {
      sliceDamageEffect = false
    }, 10);

    spSide1.style.opacity = '0.5'
    setTimeout(() => {
      spSide1.style.opacity = '1'
    }, 100);
    let sliceInterval
    let sliceCooldown = sideSuperPowers[0].cooldown
    let sliceCooldownEl = sideSuperPowers[0].cooldownEl
    sliceInterval = setInterval(() => {
        if(sliceCooldown>0){
          spSide1.style.opacity = '0.5'
        }
        if (sliceCooldown < 10) {
          sliceCooldownEl.style.left = '10px';
        }else if (sliceCooldown === 1) {
          sliceCooldownEl.style.left = '';
        }else if (sliceCooldown <= 0 ){
          sliceCooldownEl.style.left = '5px';
        }
      sliceCooldown--
      sliceCooldownEl.textContent = sliceCooldown

      if(sliceCooldown <= 0) {
        sliceMode = false
        clearInterval(sliceInterval)
        sliceCooldown = 5
        spSide1.style.opacity = '1'
        sliceCooldownEl.textContent = ''

      }
    }, 1000);
  }
}