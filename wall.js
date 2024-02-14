class Wall {
  constructor({x,y,placed}) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 10
    this.duration = 40
    this.durationCounter = this.duration
    this.cooldown = 10
    this.mana = 5
    this.placed = placed
    this.rotation = 1
    this.rangeValue = this.rangeValue
  }

  draw() {
    if(this.placed === true){
        // ctx.beginPath();
        // ctx.fillStyle = 'black';
        // ctx.fillRect(this.x - this.width/2, this.y, this.width, this.height);
        // ctx.closePath();

        ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = 'black';
        ctx.fillRect(-this.width / 2, 0, this.width, this.height);
        ctx.restore();
      }
     
  }
  aiming() {
    if (hoveringCancelSuperPowerBtn) return;

    const mouseDistance = Math.sqrt((mousePositionX - player.x) ** 2 + (mousePositionY - player.y) ** 2);
    if (mouseDistance > this.rangeValue) {
        const angle = Math.atan2(mousePositionY - player.y, mousePositionX - player.x);
        this.x = player.x + this.rangeValue * Math.cos(angle);
        this.y = player.y + this.rangeValue * Math.sin(angle);
        mouseBeyoundSuperPowerRange = true
    } else {
        this.x = mousePositionX;
        this.y = mousePositionY;
        mouseBeyoundSuperPowerRange = false
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = 'black';
    ctx.fillRect(-this.width / 2, 0, this.width, this.height);
    ctx.restore();

}
  remove() {
    if(this.placed === this.placed){
    let wallInterval
    if(this.durationCounter === this.duration){
      wallInterval = setInterval(() => {
        this.durationCounter --
        if(this.durationCounter <= 0) {
          
          const index = wallsArray.indexOf(this);
          if (index !== -1) {
            wallsArray.splice(index, 1);
            wallAmount++
            // Add wall back 
          }
          clearInterval(wallInterval)
        }
      }, 1000);
    }
    }
  }

  checkCollisionWithEnemy(enemy) {
    if (
      this.x - this.width*0.5<=   enemy.x + enemy.radius &&
      this.x + this.width*0.5>= enemy.x - enemy.radius &&
      this.y - this.height*0.5 <= enemy.y + enemy.radius &&
      this.y + this.height*0.5 >= enemy.y - enemy.radius

      // enemy.x + enemy.radius*0.5 >= player.x - player.radius &&
      // enemy.x - enemy.radius*0.5 <= player.x + player.radius &&
      // enemy.y + enemy.radius*0.5 >= player.y - player.radius &&
      // enemy.y - enemy.radius*0.5 <= player.y + player.radius
    ) {
     enemy.velocity = 0
    } else {
      enemy.velocity = enemy.originalEnemyVelocity
    }
  }
  
}

