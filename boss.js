class Boss {
  constructor({ x, y, radius, health, velocity, index }) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.originalBossVelocity = velocity;
    this.health = health;
    this.index = index;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `green`;
    ctx.fill();
    ctx.closePath();
  }
}

function spawnBoss() {
  const bossX = Math.floor(Math.random() * gameWidth);
  const bossY = Math.floor(Math.random() * (gameHeight - 2));

  const randomRadius = Math.random() * (150 - 140) + 140;
  const randomBossVelocity = Math.random() * (4 - 1.5) + 1.5;
  const randomBossHealth = Math.floor(Math.random() * (70 - 20 + 1) + 20);
  let bossHealth = randomBossHealth;
  const bossIndex = bossArray.length;

  if (!gamePaused && !gameOver) {
    bossArray.push(new Boss({
      x: bossX,
      y: bossY,
      radius: randomRadius,
      velocity: randomBossVelocity,
      health: bossHealth,
      index: bossIndex
    }));
  }
  console.log(bossArray)
}
