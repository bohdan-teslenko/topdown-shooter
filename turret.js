function aimTurret() {
  // Can place only one turret at a time. Then need to wait cooldown.
  if(hoveringCancelSuperPowerBtn)return
  if (turretMode) {
    const mouseDistance = Math.sqrt((mousePositionX - player.x) ** 2 + (mousePositionY - player.y) ** 2);
      if (mouseDistance > player.rangeValue) {
          const angle = Math.atan2(mousePositionY - player.y, mousePositionX - player.x);
          turretX = player.x + player.rangeValue * Math.cos(angle);
          turretY = player.y + player.rangeValue * Math.sin(angle);
          mouseBeyoundSuperPowerRange = true
      } else {
          turretX = mousePositionX;
          turretY = mousePositionY;
          mouseBeyoundSuperPowerRange = false
      }
      ctx.beginPath()
      ctx.arc(turretX, turretY, turretRadius, 0, 2 * Math.PI)
      ctx.fillStyle = 'black'
      ctx.fill()
      ctx.closePath()
  
  } 
}
function drawTurret() {
  
  turretArray.forEach((turret) => {
    if (!turret.timerRunout) {
      ctx.beginPath();
      ctx.arc(turret.x, turret.y, turretRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.closePath();
    }
  });
  

}

function removeTurret() {
  turretArray.forEach((turret, turretIndex) => {
    let turretDurationID = setTimeout(() => {
      if (turret.timerIsRunning) return;
      turret.timerRunout = true;
      clearTimeout(turretDurationID);
      turretCooldown(turretIndex);
      turret.timerIsRunning = true;
    }, turret.duration);
    if(turret.cooldown <= 0) {
      turretArray.splice(turretIndex, 1);
    }
  });
}

function turretCooldown(index) {
  const turret = turretArray[index];
  if(turret) {
    if (turret.cooldownIsRunning) return;

  turret.cooldownIsRunning = true;
  let turretCooldownInterval = setInterval(() => {
    turret.cooldown--;
  
    spSide4Cooldown.textContent = turret.cooldown
    turretAmountEl.style.display = 'none'
    if (turret.cooldown <= 0) {
      turret.timerIsRunning = false
      clearInterval(turretCooldownInterval);
      turretArray.splice(index, 1);
      spSide4.style.opacity = '1';
      spSide4Cooldown.textContent = ''
      turretAmountEl.style.display = 'block'
    }
  }, 1000);
  }
}

let turretBulletArray = [];

function drawTurretBullet() {
  turretBulletArray.forEach((bullet, bulletIndex) => {
    // Draw
    const bulletSpeed = 2;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(bullet.x, bullet.y, bullet.width / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    bullet.x += bullet.velocity.x * bulletSpeed;
    bullet.y += bullet.velocity.y * bulletSpeed;

    // Collision with enemies
    enemyArray.forEach((enemy) => {
      const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);
      if (distance < enemy.radius + bullet.width / 2) {
        enemy.health -= 500;
        turretBulletArray.splice(bulletIndex, 1);
        ctx.font = '40px Poppins';
        ctx.fillStyle = 'white';
        ctx.fillText('-500', enemy.x, enemy.y);
      }
    });

    // Remove bullets that are out of bounds
    if (bullet.x < 0 || bullet.y < 0 || bullet.x > gameWidth || bullet.y > gameHeight) {
      turretBulletArray.splice(bulletIndex, 1);
    }
  });
}

function turretShoot() {
  turretArray.forEach((turret) => {
    let closestEnemy = null;
    let closestDistance = Infinity;

    enemyArray.forEach((enemy) => {
      const directionX = enemy.x - turret.x;
      const directionY = enemy.y - turret.y;
      const distance = Math.sqrt(directionX * directionX + directionY * directionY);

      if (distance < closestDistance) {
        closestEnemy = enemy;
        closestDistance = distance;
      }
    });

    if (closestEnemy) {
      const directionX = closestEnemy.x - turret.x;
      const directionY = closestEnemy.y - turret.y;
      const angle = Math.atan2(directionY, directionX);
      const velocityX = Math.cos(angle);
      const velocityY = Math.sin(angle);

      turretBulletArray.push(new Bullet({
        velocity: { x: velocityX, y: velocityY },
        x: turret.x,
        y: turret.y,
      }));
    }
  });
}

setInterval(() => {
  if (turretArray.length > 0) {
    turretShoot();
  }
}, 1000);