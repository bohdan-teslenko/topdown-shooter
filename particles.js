

function playerSpawnParticlesAnimation() {
  const numberOfParticles = Math.floor(Math.random() * (150 - 1) + 1);
  for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.floor(Math.random() * (6 - 1) + 1);
      const randomX = Math.random() - 0.5;
      const randomY = Math.random() - 0.5;
      const speed =  Math.floor(Math.random() * (6 - 1) + 1);
      const hue = Math.floor(Math.random() * 360);
      playerSpawnParticlesArray.push({ x: player.x, y: player.y, radius: radius, randomX: randomX, randomY: randomY ,speed:speed , hue:hue});
  }
  let particleInterval = setInterval(() => {
      playerSpawnParticlesArray.forEach((particle, index) => {
          if (particle.y < 0 ||
              particle.y > gameHeight || 
              particle.x < 0 || 
              particle.x > gameWidth ) {
              playerSpawnParticlesArray.splice(index, 1);
          }
      });
      if (playerSpawnParticlesArray.length === 0) {
          clearInterval(particleInterval);
      }
  }, 600);
}

function enemyKilledParticlesAnimation(x, y) {
  const numberOfParticles = Math.floor(Math.random() * (150 - 1) + 1);
  for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.floor(Math.random() * (6 - 1) + 1);
      const randomX = Math.random() - 0.5;
      const randomY = Math.random() - 0.5;
      const speed =  Math.floor(Math.random() * (6 - 1) + 1);
      enemyKilledParticlesArray.push({ x: x, y: y, radius: radius, randomX: randomX, randomY: randomY ,speed:speed});
  }
  let particleInterval = setInterval(() => {
      enemyKilledParticlesArray.forEach((particle, index) => {
          particle.radius -= 0.5; // Adjust the decrement value as needed
          if (particle.radius <= 0) {
              enemyKilledParticlesArray.splice(index, 1);
          }
      });
      if (enemyKilledParticlesArray.length === 0) {
          clearInterval(particleInterval);
      }
  }, 600);
}


function destroyDropAnimation(x, y) {
  
  const numberOfParticles = Math.floor(Math.random() * (50 - 1) + 1);
  for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.floor(Math.random() * (4 - 1) + 1);
      const randomX = Math.random() - 0.5;
      const randomY = Math.random() - 0.5;
      const speed = Math.floor(Math.random() * (3 - 1) + 1);
      destroyDropParticlesArray.push({ x: x, y: y, radius: radius, randomX: randomX, randomY: randomY, speed: speed });
  }
  let particleInterval = setInterval(() => {
      destroyDropParticlesArray.forEach((particle, index) => {
          particle.radius -= 0.1; // Adjust the decrement value as needed
          if (particle.radius <= 0) {
              destroyDropParticlesArray.splice(index, 1);
          }
      });
      if (destroyDropParticlesArray.length === 0) {
          clearInterval(particleInterval);
      }
  }, 150);
}

