class Bullet {
  constructor({x = player.x,y = player.y,velocity, bulletSpeed = 10,shotShotSHOT = false,ricocheted}) {
    this.x = x // Shoot from the player position
    this.y = y // Shoot from the player position
    this.bulletSpeed = bulletSpeed
    this.acceleration = 1.5
    this.width = 3
    this.height = 5
    this.shotShotSHOT = shotShotSHOT
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }
    this.ricocheted = ricocheted
    this.ammo = ammo
    this.bulletColor = 'white' 
    this.tracerLength = 5
    this.tracerColor = 'rgba(255, 0, 0, 0.8)'
  }

  draw() {
    if(blastMode) {
      this.bulletColor = 'yellow'
    } 
    if(powerShotMode){
      this.width = 10
      this.bulletColor = 'orange'
    }
    if(this.shotShotSHOT) {
      this.bulletColor = 'blue'
      this.radius = this.radius*1.3
    }
    if(shotgunWeaponChosen) {
      this.width = 5
      this.bulletColor = 'black'
    }
    
    ctx.beginPath();
    ctx.fillStyle = this.bulletColor;
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();


  }
  
  drawTracer() {
    // Draw the bullet tracer
    if(this.shotShotSHOT) {
      this.tracerColor = 'rgba(0, 255, 0, 0.5)'
    }
    if(shotgunWeaponChosen){
      this.tracerLength = 3
    }
    ctx.beginPath();
    ctx.strokeStyle = this.tracerColor;
    ctx.lineWidth = 7;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - this.velocity.x * this.tracerLength,
      this.y - this.velocity.y * this.tracerLength
    );
    ctx.stroke();
    ctx.closePath();
    if(matrixMode){
    this.tracerColor = 'rgba(255, 0, 125, 0.5)'
       // Draw the bullet tracer
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.lineWidth = 10;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - this.velocity.x * this.tracerLength*3,
      this.y - this.velocity.y * this.tracerLength*3
    );
    ctx.stroke();
    ctx.closePath();
    }

  }
  update() {
    this.draw()
    this.drawTracer()
    if(musicPlayerOpened){
      this.bulletSpeed = this.bulletSpeed/5
    }
    // Prevent abuse of slowmotion
    if(bulletArray.length >= bulletsCounter + 3) {
      toggleMusicWindow()
    }

    // Speed of the bullet different based on the weapon.
    if(minigunWeaponChosen) {
      this.acceleration = 1

    }
    if(sniperWeaponChosen) {
      this.acceleration = 4
    }
    if(matrixMode) {
      this.bulletSpeed = 1
      this.acceleration = 0.5
    }
    // For shield ricochet
    if(shieldMode) {
      const bulletDistance = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
      if(bulletDistance>=player.shieldRadius) {
        this.ricocheted = true
      }
    }
    if(this.ricocheted) {
      this.x -= this.velocity.x * this.bulletSpeed
      this.y -= this.velocity.y * this.bulletSpeed
      let distance = Math.hypot(this.x - player.x, this.y - player.y)
      if (distance < player.radius + this.width / 2) {
        if(!sniperWeaponChosen){
          bulletArray.splice(this.index, 1);
        }
        let damage 
        if(automaticWeaponChosen) {
          damage = Math.floor((Math.random() * (32 - 24) + 24))
        } else if (shotgunWeaponChosen) {
          damage = Math.floor((Math.random() * (26 - 20) + 20))
        } else if (minigunWeaponChosen) {
          damage = Math.floor((Math.random() * (22 - 15) + 15))
        } else if (sniperWeaponChosen) {
          damage = Math.floor((Math.random() * (55 - 40) + 40))
        }
        health -= damage;
        ctx.font = '40px Poppins';
        ctx.fillStyle = 'white';
        ctx.fillText(damage, player.x, player.y);
      }   
    } else { // usual bullet code
      this.bulletSpeed += this.acceleration
      this.x += this.velocity.x * this.bulletSpeed
      this.y += this.velocity.y * this.bulletSpeed
    }
    // Remove bullets if they go over the board
    if (
      this.x < 0 || this.x > gameWidth ||
      this.y < 0 || this.y > gameHeight
    ) {
      bulletArray.splice(bulletArray.indexOf(this), 1)
    }

  }


}

class Grenade {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.grenadeColor = 'orange'
    this.grenadeRadius = 200
    this.explosionRadius = 60;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.grenadeColor;
    ctx.fill();
    ctx.closePath();
    
    setTimeout(() => {
      this.grenadeColor = 'transparent'
    }, 2000);

    this.shake()
    
    grenadeExplosionArray = grenadeExplosionArray.filter((explPiece) => explPiece.radius > 0);
    if (grenadeExplosionArray.length > 0) {
      grenadeExplosionArray.forEach((explPiece) => {
        ctx.beginPath();
        ctx.arc(explPiece.x, explPiece.y, explPiece.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        explPiece.radius -= 0.08
        explPiece.x -= 10* explPiece.randomX;
        explPiece.y -= 10 * explPiece.randomY;
        
      });

      grenadeExplosionArray.forEach((expl, explIndex) => {
        enemyArray.forEach((enemy, enemyIndex) => {
          const distance = Math.hypot(expl.x - enemy.x, expl.y - enemy.y);
          if (distance < enemy.radius + expl.radius) {
            const grenadeDamage = Math.floor(Math.random() * (100 - 50) + 50);
            enemy.health -= grenadeDamage
          }
        });
        // Player get greande damage
        let playerDistance = Math.hypot(expl.x - player.x, expl.y - player.y);
        if (playerDistance < player.radius + expl.radius) {
          health -= 2
        }
      });
    }
  }

//   javascript
// Copy code
shake() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.grenadeRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = `rgba(0, 133, 133, ${0.05})`;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();

  enemyArray.forEach((enemy, enemyIndex) => {
    const enemyToGrenadeDistance = Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2);

    if (enemyToGrenadeDistance <= this.grenadeRadius) {
        // if (bulletAngle >= startAngle && bulletAngle <= endAngle) {
        //     const shieldCenterAngle = Math.atan2(this.y - mousePositionY, this.x - mousePositionX);
        //     const ricochetAngle = 2 * shieldCenterAngle - bulletAngle; // Reflect angle

        //     const newVelocityX = Math.cos(ricochetAngle);
        //     const newVelocityY = Math.sin(ricochetAngle);
        //     bullet.velocity.x = newVelocityX * bullet.bulletSpeed*3;
        //     bullet.velocity.y = newVelocityY * bullet.bulletSpeed*3;
        //     bullet.ricocheted = true
        // }
        enemy.x += Math.floor(Math.random() * (1 - 0) + 0)
        enemy.y += Math.floor(Math.random() * (1 - 0) + 0)
    }
  })
    

  }
}

let grenadeExplosionArray = [];

function grenadeExplosion({ x, y }) {
  const explosionPieces = Math.floor(Math.random() * (90 - 30) + 30);
  for (let i = 0; i < explosionPieces; i++) {
    const radius = Math.floor(Math.random() * (5 - 3) + 3);
    const randomX = Math.random() - 0.5;
    const randomY = Math.random() - 0.5;
    grenadeExplosionArray.push({ x: x, y: y, radius: radius, randomX: randomX, randomY: randomY });
  }
}