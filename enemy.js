let updateHealthAnimation = false
class Enemy {
  constructor({radius, x, y, velocity, health, index,fired}) {
    this.radius = radius
    this.x = x
    this.y = y
    this.velocity = velocity
    this.originalEnemyVelocity = velocity
    this.health = health
    this.maxHealth = this.health
    this.index = index
    this.shotShotSHOTApplied = false
    this.currentHealthWidth = this.currentHealthWidth
    this.barWidth = 70;
    this.barHeight = 8;
    this.fired = fired
    // Color
    this.hue = Math.floor(Math.random() * 360);
  }
  drawShadow() {
    const maxShadowRadius = this.radius * 1;
    const numShadows = 4;
  
    const angle = Math.atan2(player.y - this.y, player.x - this.x);
  
    for (let i = 0; i < numShadows; i++) {
      const sizeReduction = 0.25; // 10% smaller
      const distanceBehind = 0.3; // 10% behind
      const shadowRadius = maxShadowRadius * (1 - sizeReduction * i);
      const offsetX = Math.cos(angle) * (distanceBehind * this.radius + shadowRadius);
      const offsetY = Math.sin(angle) * (distanceBehind * this.radius + shadowRadius);
  
      // Draw shadows with calculated offsets and decreasing size
      this.drawSingleShadow(this.x - offsetX, this.y - offsetY, shadowRadius, angle, 0.3 + 0.1 * i);
    }
  }

  drawSingleShadow(x, y, radius, angle, opacity) {
    if(freezeMode){
      ctx.beginPath();
      ctx.arc(x, y, radius, angle, angle + 2 * Math.PI);
      ctx.fillStyle = `hsla(${this.hue}, 50%, 50%, ${opacity})`;
      ctx.fill();
      ctx.closePath();
    }
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = `hsl(${this.hue}, 50%, 50%)`;
    ctx.fill()
    ctx.closePath()
    
  }
  
  drawHealthBar() {
    // Black transparet bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(this.x - this.barWidth / 2, this.y - this.radius - 15, this.barWidth, this.barHeight);
    
    
    // Orange bar trasition damage
    if (updateEnemyHealthArray.length > 0) {
    updateEnemyHealthArray.forEach((enemy) => {
      if(updateEnemyHealthArray.length>0) {
        updateEnemyHealthFunction()
      }
      if(enemy.health <= 0) return
      const oneHPWidth = enemy.barWidth / enemy.maxHealth;
      let orangeWidth = enemy.orangeDamage * oneHPWidth;
      ctx.fillStyle = 'orange';
      ctx.fillRect(enemy.x - enemy.barWidth / 2 + enemy.currentHealthWidth, enemy.y - enemy.radius - 15, orangeWidth, enemy.barHeight);
      
     
    });
    }
  // Red bar
    if (displayEnemyHealth) {
      // Draw red health bar
      const oneHPWidth = this.barWidth / this.maxHealth;
      const currentHealth = this.health;
      this.currentHealthWidth = currentHealth * oneHPWidth;
      ctx.fillStyle = '#8b0203';
      ctx.fillRect(this.x - this.barWidth / 2, this.y - this.radius - 15, this.currentHealthWidth, this.barHeight);
  
      // Update orange health bar
    }

  }

  // drawCross() {
  //   // console.log(this.x,this.y,crossWidth, crossHeight,crossImage)
  //   enemyArray.forEach (enemy => {
  //     if (enemy.health <= 0) {
  //       const crossImage = new Image();
  //       crossImage.src = 'scope.png';
  //       const crossHeight = 50;
  //       const crossWidth = 50;
  //       ctx.drawImage(crossImage, enemy.x, enemy.y, crossWidth, crossHeight);
        
  //       }
  //   })
   
  // }

  drawSquare() {
    const squareWidth = 90;
    const squareHeight = 60;
    
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent fill
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x - this.radius * 2.6, this.y - this.radius * 2, squareWidth, squareHeight);
    ctx.fill(); 
    
    ctx.closePath();
  }

  drawAttackingText() {
    ctx.save();
    ctx.font = '900 20px Orbitron';
    ctx.fillStyle = 'orange';
    const attackingText = 'Attacking';

    const textX = this.x - ctx.measureText(attackingText).width / 2;
    const textY = this.y - this.radius * 2 - 25; // Adjust the vertical offset as needed

    ctx.fillText(attackingText, textX, textY);
    ctx.restore();
  }

  
  update() {
    this.draw()
    if(displayEnemyHpON){
      this.drawHealthBar()
    }
    this.drawShadow()
    this.drawAttackingText()
    // this.drawCross()
    this.drawSquare()
    // Slow Motion
    if(musicPlayerOpened ) {
      this.velocity = this.velocity / 5
    }
    // Slows down the enemies
    if(freezeMode) {
      this.velocity = this.velocity / 3
    }
    // Enemies running to the random sides    
    if(fearMode) {
      this.velocity = -this.velocity
      
    }

    // Illusion
    enemyIllusionArray.forEach((illusion) => {
      if(illusion.reactsOrNot < 0.5) return // some can see illustions can attack and kill them other don't react but still get illustion damage.
      if(illusion.enemy === this) {
        this.velocity = 0
      }
    })


      // Make enemies move towards Player.
      const angle = Math.atan2(player.y - this.y, player.x - this.x);
      this.x += this.velocity * Math.cos(angle);
      this.y += this.velocity * Math.sin(angle)

  


    // draw bullets
    enemyBulletArray.forEach((bullet) => {
      bullet.update()
    })
    
  }


}

class EnemyBullet {
    constructor({x,y, velocity,illusion,illusionIndex}) {
      this.x = x // Shoot from the enemy position
      this.y = y // Shoot from the enemy position
      this.bulletSpeed = 1
      this.width = 2
      this.height = 5
      this.velocity = {
        x: velocity.x,
        y: velocity.y
      }
      this.ammo = 0
      this.illusion = illusion
      this.illusionIndex = illusionIndex
      this.ricocheted = false
      this.enemyInsideShield = false
    }
  
    update() {
      this.draw()
      this.moveBullet()
      this.checkCollistion()
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

    moveBullet() {
      this.x += this.velocity.x * this.bulletSpeed
      this.y += this.velocity.y * this.bulletSpeed
    }

    checkCollistion() {

    enemyBulletArray.forEach((bullet, bulletIndex) => {
      if (illusionMode) {
        enemyIllusionArray.forEach((illusion) => {
          const distance = Math.hypot(bullet.x - illusion.x, bullet.y - illusion.y);
          if (distance < illusion.radius + bullet.width / 2) {
            let damage = Math.floor(Math.random() * (700 - 300) + 300)
            illusion.health -= damage;
            enemyBulletArray.splice(bulletIndex, 1);
            ctx.font = '40px Poppins';
            ctx.fillStyle = 'white';
            ctx.fillText(damage, illusion.x, illusion.y);
          }

          if(illusion.health <= 0) {
            const index = enemyIllusionArray.indexOf(illusion);
            if (index !== -1) {
              enemyIllusionArray.splice(index, 1);
            }
          } 
        });
      } else {
        const distanceToPlayer = Math.hypot(bullet.x - player.x, bullet.y - player.y);
        
        if (distanceToPlayer < player.radius + bullet.width / 2) {
          health -= 1;
          enemyBulletArray.splice(bulletIndex, 1);
        } else if (bullet.x < 0 || bullet.y < 0 || bullet.x > gameWidth || bullet.y > gameHeight) {
          enemyBulletArray.splice(bulletIndex, 1);
        }
      }
    });
    }

    
}
let enemyBulletArray = []


class EnemyIllusion {
  constructor({radius, x, y, velocity, health,hue, enemy,reactsOrNot}) {
    this.radius = radius
    this.x = x
    this.initialX = x
    this.y = y
    this.initialY = y
    this.velocity = velocity
    this.health = health
    this.enemy = enemy
    this.hue = hue
    this.reactsOrNot = reactsOrNot
  }

  update() {
    this.draw()
    this.positionIllusion()
    this.shoot()
    this.remove()
    
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `hsl(${this.hue}, 50%, 35%)`;
    ctx.fill();
    ctx.closePath();

  }
  
  positionIllusion() {
    
    const dx = this.enemy.x - this.x;
    const dy = this.enemy.y - this.y;
    const distanceBetween = Math.sqrt(dx * dx + dy * dy);
    if (distanceBetween < 50) {
      this.x += 1;
      this.y += 1; 

    }
  }

  remove() {
    if(!enemyArray.includes(this.enemy)) {
      const index = enemyIllusionArray.indexOf(this);
      if (index !== -1) {
        enemyIllusionArray.splice(index, 1);
      }
    }
  }

  shoot() {
    enemyIllusionBulletArray.forEach((bullet) => {
      bullet.draw()
      bullet.move()
    })
  }
}

function createEnemyIllusion() {
  enemyArray.forEach((enemy) => {
    const createIllusionOrNot = Math.random(); // Generates a random number between 0 and 1
    const enemyReactsOrNot = Math.random();
    if (createIllusionOrNot < 0.3) return; // if result of random is less than 0.3, don't create illusion

    if (enemy.x > 0 || enemy.x < gameWidth || enemy.y > 0 || enemy.y < gameHeight) {
      enemyIllusionArray.push(new EnemyIllusion({
        x: enemy.x,
        y: enemy.y,
        radius: enemy.radius,
        velocity: enemy.velocity,
        health: enemy.health,
        hue: enemy.hue,
        enemy: enemy,
        reactsOrNot:enemyReactsOrNot
      }));
    }
  });
}

class EnemyIllusionBullet {
  constructor({x,y, velocity,illusion}) {
    this.x = x
    this.y = y
    this.bulletSpeed = 1
    this.width = 1
    this.height = 1
    this.illusion = illusion
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }
    this.bulletColor = 'white' 
  }
  draw() {
    
    ctx.beginPath();
    ctx.fillStyle = this.bulletColor;
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    
  }
  move() {
    this.x += this.velocity.x * this.bulletSpeed
    this.y += this.velocity.y * this.bulletSpeed

    this.checkCollistion()
  }
  checkCollistion() {
    enemyArray.forEach((enemy) => {
        enemyIllusionBulletArray.forEach((bullet,bulletIndex)=> {
          
        const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y)
        if (distance < enemy.radius + bullet.width / 2) {
          let damage = Math.floor(Math.random() * (350 - 100) + 100)
          enemy.health -= damage
          enemyIllusionBulletArray.splice(bulletIndex, 1)

          ctx.font = '40px Poppins';
          ctx.fillStyle = 'black';
          ctx.fillText(damage, enemy.x, enemy.y);
        }
        if (bullet.x < 0 || bullet.y < 0 || bullet.x > gameWidth || bullet.y > gameHeight) {
          enemyIllusionBulletArray.splice(bulletIndex, 1);
        }
      })
    });
  }

}

function enemyIllusionShoot() {
  enemyIllusionArray.forEach((illusion,illusionIndex) => {
    const enemy = illusion.enemy;

    const directionX = enemy.x - illusion.x;
    const directionY = enemy.y - illusion.y;
    const angle = Math.atan2(directionY, directionX);
    const velocityX = Math.cos(angle);
    const velocityY = Math.sin(angle);
    
      enemyIllusionBulletArray.push(new EnemyIllusionBullet({
        velocity: { x: velocityX, y: velocityY },
        x: illusion.x,
        y: illusion.y,
        illusionIndex:illusionIndex
      }));
    
  });
}




  function enemyShoot() {
    enemyArray.forEach((enemy) => {
      if(illusionMode) {
        enemyIllusionArray.forEach((illusion,illusionIndex) => {
          
        if(illusion.reactsOrNot < 0.5) return
        if(illusion.enemy === enemy) {
            const directionX = illusion.x - enemy.x;
            const directionY = illusion.y - enemy.y;
            const angle = Math.atan2(directionY, directionX);
            const velocityX = Math.cos(angle);
            const velocityY = Math.sin(angle);
  
            enemyBulletArray.push(new EnemyBullet({
              velocity: { x: velocityX, y: velocityY},
              x:enemy.x,
              y:enemy.y,
              illusion: illusion,
              illusionIndex: illusionIndex
            }));

        }

        
   

        
      })
    } 

    enemyArray.forEach((enemy) => {
      enemy.fired = true
    })

        // Enemies shoot
        const directionX = player.x - enemy.x;
        const directionY = player.y - enemy.y;
        const angle = Math.atan2(directionY, directionX);
        const velocityX = Math.cos(angle);
        const velocityY = Math.sin(angle);
        
        enemyBulletArray.push(new EnemyBullet({
          velocity: { x: velocityX, y: velocityY},
          x:enemy.x,
          y:enemy.y
      }));
  })
    
  }

  setInterval(() => {
    
  enemyShoot()

}, 1000);


let updateEnemyHealthArray = []
function updateEnemyHealthFunction() {
  if(!displayEnemyHpON) return
setTimeout(() => {
  updateEnemyHealthArray.forEach((enemy) => {
    enemy.orangeDamage = 0
    updateEnemyHealthArray = []
  })
}, 300);
}

// Spawn enemies function
let selectedEnemyHealth
let selectedEnemyMinVelocity
let selectedEnemyMaxVelocity
let selectedEnemyNumber
let selectedEnemySpawnRate
function spawnEnemies() {

  difficultyLevels.forEach((level) => {
    if (selectedDifficulty === level.name) {
      selectedEnemyHealth = level.health;
      selectedEnemyMinVelocity = level.minVelocity;
      selectedEnemyMaxVelocity = level.maxVelocity;
      selectedEnemyNumber = 5;
      selectedEnemySpawnRate = level.spawnRate;
    }
  });


  let intervalId = setInterval(() => {
    // Chose random side where to spawn from
    const randomSide = Math.floor(Math.random() * (5 - 1) + 1)
    let randomX
    let randomY
    switch(randomSide) {
      case 1: // Top side
        randomX = Math.floor(Math.random() * gameWidth) 
        randomY = Math.floor(Math.random() * -500)
          break
      case 2: // Bottom side
        randomX = Math.floor(Math.random() * gameWidth) 
        randomY = Math.floor(Math.random() * gameHeight + gameHeight + 200)
          break
      case 3: // Left side
        randomX = Math.floor(Math.random() * -200) 
        randomY = Math.floor(Math.random() * gameHeight)
          break
      case 4: // Right side
        randomX = Math.floor(Math.random() * gameWidth + gameWidth + 200) 
        randomY = Math.floor(Math.random() * gameHeight)
          break
    }
    const randomRadius = Math.random() * (20 - 15) + 15

    // Difficulty
    const randomVelocity = Math.random() * (selectedEnemyMaxVelocity - selectedEnemyMinVelocity) + selectedEnemyMinVelocity
    const randomEnemyHealth = Math.floor(Math.random() * (selectedEnemyHealth - 1000) + 1000)
    let enemyHealth = randomEnemyHealth
    const enemyIndex = enemyArray.length-1
    if(!gamePaused && !gameOver && !inMainMenu) {
    enemyArray.push(new Enemy({
      x: randomX,
      y: randomY,
      radius: randomRadius,
      velocity: randomVelocity,
      health: enemyHealth,
      index: enemyIndex,
      fired:false
    }))
    }

    if(enemyArray.length > selectedEnemyNumber) {
      clearInterval(intervalId)
    }
  }, selectedEnemySpawnRate)  // Pase enemies spawn with
}

