class Drop {
  constructor({x,y,randomNumber}) {
    this.x = x
    this.y = y
    this.randomNumber = randomNumber
    this.radius = 10
    this.randomAmo
    this.displayedTakeText = false; 
  }

  update() {
    this.draw()
    this.take()
    this.destroyDrop()
  }

  draw() {
    if(this.randomNumber === 1){
      this.randomAmo = 'brown' // Minigun ammo
    } else if (this.randomNumber === 2){
      this.randomAmo = 'green' // HP
    } else if (this.randomNumber === 3){
      this.randomAmo = 'blue' // Mana
    } else if (this.randomNumber === 4){
      this.randomAmo = 'grey' // - grenade
    } else if (this.randomNumber === 5){
      this.randomAmo = 'violet' // Mana Stash Bottle
    } else if (this.randomNumber === 6){
      this.randomAmo = 'pink' // Health Stash Bottle
    } else if (this.randomNumber === 7){
      this.randomAmo = 'black' // turret
    } 
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.randomAmo
    ctx.fill();
    ctx.closePath();
  }

  take() {
          // Collision with drop
          if (player.x + player.radius * 2 >= this.x - this.radius &&
            player.x - player.radius * 2 <= this.x + this.radius &&
            player.y + player.radius * 2 >= this.y - this.radius &&
            player.y - player.radius * 2 <= this.y + this.radius) {
         // Clear displayedTakeText for all drops before checking the current one
    //    if (dropArray.some((drop) => drop.displayedTakeText)) {
    //     return;
    // }

    // Clear displayedTakeText for all drops before checking the current one
    dropArray.forEach((drop) => {
        drop.displayedTakeText = false;
    });

    // Set displayedTakeText to true only for the current drop
    this.displayedTakeText = true;
    
            if(this.displayedTakeText){
            ctx.save();
            ctx.font = '900 15px Orbitron ';
            ctx.fillStyle = 'white';
            const takeKey = `${options.takeKey.toUpperCase()}`;
            const takeText = 'Take';
    
            const textX = this.x;
            const textY = this.y - this.radius * 2;
            ctx.fillText(takeKey, textX, textY);
            ctx.fillText(takeText, textX + 15, textY);
            ctx.restore();
    }

            ableTakeDrop = true
            if(takeDropAutomaticallyON) {
             takeDropButtonPressed = true
            }
            if(takeDropButtonPressed){
              if (this.randomNumber === 1) {
                miniGunAmmoAmount = 1
                miniGunBulletsStorage = 200
                  if(minigunWeaponChosen){
                    reloadWeaponFunction()
                  }
              } else if (this.randomNumber === 2) {
                health += 25;
                dropHPRegeneration()
              } else if (this.randomNumber === 3) {
                mana += 25;
                dropManaRegeneration()
              } else if (this.randomNumber === 4) {
                armor += 25;
              } else if (this.randomNumber === 5) {
                grenadeAmount += 1;
              } else if (this.randomNumber === 6) {
                if(stashCounter >= stashCapacity) return
                manaStash += 1;
              } else if (this.randomNumber === 7) {
                if(stashCounter >= stashCapacity) return
                healthStash += 1;
              } else if (this.randomNumber === 8) {
                turretAmount += 1
              }
        
              const index = dropArray.indexOf(this);
              if (index !== -1) {
                // Remove the drop at the found index
                dropArray.splice(index, 1);
              }
              ableTakeDrop = false
              
            takeDropButtonPressed = false;
            }
          }
            
  }
  destroyDrop() {
    dropArray.forEach((drop, dropIndex) => {
      let removedBullet = false;
  
      bulletArray.forEach((bullet, bulletIndex) => {
        const distance = Math.hypot(bullet.x - drop.x, bullet.y - drop.y);
  
        if (distance < drop.radius + bullet.width / 2) {
          if (sniperWeaponChosen) return;
          destroyDropAnimation(drop.x,drop.y)
          if (!removedBullet) {
            bulletArray.splice(bulletIndex, 1);
            dropArray.splice(dropIndex, 1);
            removedBullet = true;
          }
        }
      });
    });
  }
  
  }

function checkForDrop(x, y) {
  const randomNumber = Math.floor(Math.random() * 10);
  if(randomNumber <= 9) {
    dropArray.push(new Drop({ x: x, y: y, randomNumber: randomNumber }))
  }
}