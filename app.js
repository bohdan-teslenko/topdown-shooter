const body = document.body
const timerElement = document.querySelector ('.timer')
const menuContainer = document.querySelector ('.menu-container')
const mainMenu = document.querySelector ('.main-menu')
const mainMenuItems = document.querySelectorAll ('.main-menu__item')
const mainMenuPlay = document.getElementById ('main-menu__play')
const mainMenuOptions = document.getElementById ('main-menu__options')
const mainMenuContinue = document.getElementById ('main-menu__continue')
const difficultyLevelItem = document.querySelectorAll ('.difficulty-level__item')
const currentDifficulty = document.getElementById ('currentDifficulty')
const pausedKilled = document.querySelector ('.paused__killed')
const pausedScore = document.querySelector ('.paused__score')
const pausedHealth = document.querySelector ('.paused__health')
const pausedBestResult = document.querySelector ('.paused__best-result')
const continueButton = document.getElementById ('continue')
const newGameButton = document.getElementById ('new-game')
const optionsButton = document.getElementById ('options')
const menuButton = document.getElementById ('menu')
const tryAgainButton = document.getElementById ('try-again')
const reviveButton = document.getElementById ('revive')
const mainMenuButton = document.getElementById ('to-main-menu')
const menuListItems = document.querySelectorAll ('.menu-list__item')

const musicPlayer = document.querySelector ('.music-player')
const musicPlayerClose = document.querySelector ('.music-nav__close')
const musicFirstWindow = document.querySelector ('.player__first')
const currentSongContainer = document.querySelector ('.current-song__container')
const musicSecondWindow = document.querySelector ('.player__second')
const musicReturnBack = document.querySelector ('.music__return-back')
const musicPlayerTime = document.querySelector ('.music-nav__time')

const navbar = document.querySelector ('.nav-bar')
const navbarElements = document.querySelectorAll ('.nav-bar__element')
const navbarMusic = document.querySelector('.nav-bar__music')
const navbarColor = document.querySelector ('.nav-bar__color')
const navbarFullScreen = document.querySelector ('.nav-bar__full-screen')
const navbarPause = document.querySelector ('.nav-bar__pause')
const navbarMusicNotification = document.querySelector ('.music-notification__container')
const navbarMusicNotificationContent = document.querySelector ('.music-notification__content')

const healthBarContainer = document.querySelector ('.health-bar__container')
const healthBarScore = document.querySelector ('.score')
const killedScore = document.querySelector ('.killed-amount')
const healthBarHeath = document.querySelector ('.health')
const manaBar = document.querySelector ('.mana-bar')
const armorBar = document.querySelector ('.armor-bar')
const manaStashEl = document.querySelector ('.mana-stash__amount')
const healthStashEl = document.querySelector ('.health-stash__amount')
const manaStashContainer = document.querySelector('.mana-stash__description-container')
const healthStashContainer = document.querySelector('.health-stash__description-container')
const manaStashCapacity = document.querySelector ('.mana-stash-capacity')
const healthStashCapacity = document.querySelector ('.health-stash-capacity')
const ammoElement = document.getElementById("ammo")
const explamationMark = document.querySelector ('.exclamation-mark__icon')

const weaponStatsContainter = document.querySelector ('.weapon-stats__container')
const statsAmmo = document.getElementById ('statsAmmo')
const statsDamage = document.getElementById ('statsDamage')
const statsFireRate = document.getElementById ('statsFireRate')
const statsReload = document.getElementById ('statsReload')
const statsAccuracy = document.getElementById ('statsAccuracy')
const statsRange = document.getElementById ('statsRange')
const statsWeight = document.getElementById ('statsWeight')
const weaponName = document.getElementById ('weapon-name')
const weaponSectionContainer = document.querySelector ('.weapon-section__container')
const automaticWeapon = document.getElementById ('automatic')
const shotgunWeapon = document.getElementById ('shotgun')
const minigunWeapon = document.getElementById ('minigun')
const minigunStorageEl = document.getElementById ('minigunStorage')
const sniperWeapon = document.getElementById ('sniper')
const punchWeapon = document.getElementById ('punch')
const arcenalAmmoImg = document.querySelector('.arcenal-item__ammo-img')
const minigunSection = document.getElementById ('minigunSection')

const blurBackground = document.querySelector ('.blur-background')
const tintBackground = document.querySelector ('.tint-background')
const navDisplay = document.querySelector ('.nav-bar')
const killedDisplay = document.querySelector ('.killed')
const healthDisplay = document.querySelector ('.health-bar__circle')
const timerDisplay = document.querySelector ('.timer-bar')
const superPowerNumbersDisplay = document.querySelector ('.super-power__numbers')
const superPowerKeysDisplay = document.querySelector ('.super-power__keys')
const arcenalDisplay = document.querySelector ('.arcenal-bar')
const countdown = document.querySelector ('.countdown')
const gameOverWindow = document.querySelector ('.game-over__window')
const optionsWindow = document.querySelector ('.options-container')
const optionsContainer = document.querySelector ('.options-container')
const optionsChoiceContainer = document.querySelectorAll ('.options__choice-container')
const optionsCloseButton = document.querySelector ('.options-close')
const optionsResetButton = document.querySelector ('.options-reset')
const optionsItems = document.querySelectorAll ('.options__item')
const enemyHealthKeyEl = document.getElementById ('enemyHealthKey')
const weaponWheelKeyEl = document.getElementById ('weaponWheelKey')
const sliceKeyEl = document.getElementById ('sliceKey')
const wallKeyEl = document.getElementById ('wallKey')
const grenadeKeyEl = document.getElementById ('grenadeKey')
const turretKeyEl = document.getElementById ('turretKey')
const energyDrinkKeyEl = document.getElementById ('energyDrinkKey')
const takeKeyEl = document.getElementById ('takeKey')
const reloadKeyEl = document.getElementById ('reloadKey')
const musicPlayerKeyEl = document.getElementById ('musicPlayerKey')
const punchKeyEl = document.getElementById ('punchKey')
const optionsKeys = document.querySelectorAll ('.options__key')

const noStaminaNotification = document.querySelector ('.no-stamina-img')
const staminaBar = document.querySelector ('.stamina-bar')
const cancelSuperPower = document.querySelector ('.cancel-superpower')
const spDescriptionContainer = document.querySelectorAll ('.super-power__description-container')
const spManaAll = document.querySelectorAll ('.super-power__mana')
const spAll = document.querySelectorAll ('.super-power')
const spTop1 = document.getElementById ('top1')
const spTop2 = document.getElementById ('top2')
const spTop3 = document.getElementById ('top3')
const spTop4 = document.getElementById ('top4')
const spTop5 = document.getElementById ('top5')
const spTop6 = document.getElementById ('top6')
const spTop7 = document.getElementById ('top7')
const spBottom1 = document.getElementById ('bottom1')
const spBottom2 = document.getElementById ('bottom2')
const spBottom3 = document.getElementById ('bottom3')
const spBottom4 = document.getElementById ('bottom4')
const spBottom5 = document.getElementById ('bottom5')
const spBottom6 = document.getElementById ('bottom6')
const spBottom7 = document.getElementById ('bottom7')
const spSide1 = document.getElementById ('side1')
const spSide2 = document.getElementById ('side2')
const spSide3 = document.getElementById ('side3')
const spSide4 = document.getElementById ('side4')
const spSide5 = document.getElementById ('side5')
const spSide1Key = document.getElementById ('side1key')
const spSide2Key = document.getElementById ('side2key')
const spSide3Key = document.getElementById ('side3key')
const spSide4Key = document.getElementById ('side4key')
const spSide5Key = document.getElementById ('side5key')
const spSide1Cooldown = document.getElementById ('side1Cooldown')
const spSide4Cooldown = document.getElementById ('side4Cooldown')
const spSide5Cooldown = document.getElementById ('side5Cooldown')
const sliceAmountEl = document.querySelector ('.slice-amount')
const wallAmountEl = document.querySelector ('.wall-amount')
const grenadeAmountEl = document.querySelector ('.grenade-amount')
const turretAmountEl = document.querySelector ('.turret-amount')
const energyDrinkAmountEl = document.querySelector ('.energy-drink-amount')
// const spSide5 = document.getElementById ('side5')
const game = document.querySelector('.game')
const ctx = game.getContext('2d')
game.height = window.innerHeight
game.width = window.innerWidth
let gameWidth = game.width
let gameHeight = game.height
let rect = game.getBoundingClientRect();
document.addEventListener('mousemove', (event) => {
  // Update mouse position
  mousePositionX = event.clientX - rect.left;
  mousePositionY = event.clientY - rect.top;
  
});

gameOverWindow.style.opacity = '0';
gameOverWindow.style.visibility = 'hidden';

// Data
let hoveringNavbar = false
let hoveringMusicPlayer = false
let hoveringManaStash = false;
let hoveringHealthStash = false;
let hoveringSuperpowerBar = false
let hoveringCancelSuperPowerBtn = false
let hoveringDescriptionContainer = false
let sliceSuperpowerHovered = false
let wallSuperpowerHovered = false
let grenadeSuperpowerHovered = false
let turretSuperpowerHovered = false
cancelSuperPower.style.visibility = 'hidden'
cancelSuperPower.addEventListener('mouseover', ()=> { 
  cancelSuperPower.style.transform = 'scale(0.9)'
  hoveringCancelSuperPowerBtn = true
})
cancelSuperPower.addEventListener('mouseout', ()=> { 
  cancelSuperPower.style.transform = 'scale(1)'
  cancelSuperPower.style.transition = '0.5s'
  hoveringCancelSuperPowerBtn = false
})

cancelSuperPower.addEventListener ('mousedown', () => {
  hideCancelSuperPowerBtn()
  aimingWall = false
  aimingGrenade = false
  turretMode = false
  wallSuperpowerHovered = false
  grenadeSuperpowerHovered = false
  turretSuperpowerHovered = false
})

let frames = 0
let staminaBarWidth = window.getComputedStyle(staminaBar).width // 380
let stamina = parseFloat(staminaBarWidth)
let maxStamina = parseFloat(staminaBarWidth);
let energyDrinkAmount = 1
let energyDrinkIsWorking = false
let energyDrinkDuration
let energyDrinkInterval
let score = 0
let countingScore
let killed = 0
let killedAnimation = false
let health = 100
let stashCapacity = 10
let healthStash = 1
let mana = 100
let manaStash = 1
let stashCounter
let stashHealthUsed = false
let stashManaUsed = false
let regenerationRate = 1000
let armor = 0
let ammo = 30
let miniGunAmmoAmount = 0
let miniGunBulletsStorage = 0
let reloadSpeedIncrease = 0
let reloadSpeed = 150 // Shooting speed
let reloadTime = 2000 // Time takes to reload the weapon
let originalReloadSpeed = reloadSpeed
let originalReloadTime = reloadTime
let isReloading = false
let damage
let weaponWeight = 2
let spreadIncrease
let spread = 0.05
let range
let altPressed = false
let pressedKeys = []
let mousePositionX;
let mousePositionY;
let mouseX
let mouseY
let mouseIsPressed = false
let gameOver = false
let gamePaused = false
let inMainMenu = false
let inOptionsWindow = false
let inWeaponWheel = false
let canOpenMusicPlayerWindow = true
let musicPlayerOpened = false
let bulletsCounter // for music Player slowmotion
let reloadCounter // for music Player
let noManaNotification = false
let justRevived = false
// Bars
let barsArray = [];
barsArray.push(
  navDisplay,
  healthDisplay, 
  superPowerNumbersDisplay,
  superPowerKeysDisplay,
  arcenalDisplay,
);
// Options
let musicOn = false
let showDamageON = false
let displayEnemyHpON = false
let bloodSplashOn = false
let takeDropAutomaticallyON = false
const options = {
  enemyHealthKey: 'Control',
  weaponWheelKey: 'f',
  punchKey: 'q',
  sliceKey: 'z',
  wallKey: 'x',
  grenadeKey: 'c',
  turretKey: 'v',
  energyDrinkKey: 'b',
  takeKey: 'e',
  reloadKey: 'r',
  musicPlayerKey: 'm'
}
function defaultOptions() {
  const options = {
    enemyHealthKey: 'Control',
    weaponWheelKey: 'f',
    punchKey: 'q',
    sliceKey: 'z',
    wallKey: 'x',
    grenadeKey: 'c',
    turretKey: 'v',
    energyDrinkKey: 'b',
    takeKey: 'e',
    reloadKey: 'r',
    musicPlayerKey: 'm',
    setting1: {chosen:'On'}, // Music
    setting2: {chosen:'On'}, // Display Damage
    setting3: {chosen:'Off'}, // Show enemy health
    setting4: {chosen:'On'}, // Blood splash effect
    setting4: {chosen:'Off'} // Take drop automatically
  }
  enemyHealthKeyEl.textContent = options.enemyHealthKey
  weaponWheelKeyEl.textContent = options.weaponWheelKey
  punchKeyEl.textContent = options.punchKey
  sliceKeyEl.textContent = options.sliceKey
  wallKeyEl.textContent = options.wallKey
  grenadeKeyEl.textContent = options.grenadeKey
  turretKeyEl.textContent = options.turretKey
  energyDrinkKeyEl.textContent = options.turretKey
  takeKeyEl.textContent = options.takeKey
  reloadKeyEl.textContent = options.reloadKey
  musicPlayerKeyEl.textContent = options.musicPlayerKey

  spSide1Key.textContent = options.sliceKey
  spSide2Key.textContent = options.wallKey
  spSide3Key.textContent = options.grenadeKey
  spSide4Key.textContent = options.turretKey
  spSide5Key.textContent = options.energyDrinkKey
}
defaultOptions()

function updateOptions() {
  optionsKeys.forEach((option) => {
    option.classList.remove ('clickedOptionKey')
  })
  options.enemyHealthKey = enemyHealthKeyEl.textContent 
  options.weaponWheelKey = weaponWheelKeyEl.textContent 
  options.sliceKey = sliceKeyEl.textContent 
  options.wallKey = wallKeyEl.textContent 
  options.grenadeKey = grenadeKeyEl.textContent 
  options.turretKey = turretKeyEl.textContent 
  options.takeKey = takeKeyEl.textContent 
  options.reloadKey = reloadKeyEl.textContent 
  options.musicPlayerKey = musicPlayerKeyEl.textContent
  options.punchKey = punchKeyEl.textContent

  spSide1Key.textContent = options.sliceKey
  spSide2Key.textContent = options.wallKey
  spSide3Key.textContent = options.grenadeKey
  spSide4Key.textContent = options.turretKey
}

// Difficulty 
const difficultyLevels = [
  {
    name: 'Easy',
    minVelocity: 0.1,
    maxVelocity: 1.5,
    health: 3000,
    number: 100,
    spawnRate: 1000, // ms
  },
  {
    name: 'Medium',
    minVelocity: 0.5,
    maxVelocity: 2.2,
    health: 4000,
    number: 150,
    spawnRate: 750, // ms
  },
  {
    name: 'Hard',
    minVelocity: 0.75,
    maxVelocity: 2.75,
    health: 7500,
    number: 200,
    spawnRate: Math.floor(Math.random() * (700 - 400) + 400), // ms
  },
];
let defaultDifficulty = 'Easy'
let selectedDifficulty = defaultDifficulty

difficultyLevelItem.forEach((level) => {

  level.addEventListener('click', () => {
    difficultyLevelItem.forEach((item) => {
      item.classList.remove('difficulty-level--selected');
    });

    level.classList.add('difficulty-level--selected');

    if (level.classList.contains('difficulty-level--selected')) {
      selectedDifficulty = level.textContent;

    }
  });

});

function updateDifficulty() {
  currentDifficulty.textContent = selectedDifficulty;
}

let mouseBeyoundSuperPowerRange = false
let superPowerKey = ''
let superPowerArray = []
let rageMode = false
let freezeMode = false
let fearMode = false
let shieldMode = false
let turretMode = false
let summonMode = false
let vampirismMode = false
let vampirismRegenerationAnimation = false
let powerShotMode = false
let powerShotAmount = 0
let powerShotCount = 0
let blastMode = false
let thunderMode = false
let matrixMode = false
let matrixModeCounter
let matrixAnimationOpacity
let manipulateMatrixOpacity = true;
let bulletTeleportMode = false
let sliceMode = false
let shotShotSHOT = false
let illusionMode = false
let enemyIllusionArray = []
let enemyIllusionBulletArray = []
let shotShotSHOTArray = []
let rewindTimeMode = false
let rewindTimeAnimation = false
let checkpointArray = []
let saveCheckpointsInterval
// Stamina 
let staminaPercentage
const onePercentOfStamina = maxStamina / 100;
let stopStaminaRegeneration = false
let staminaRegenerationSpeed = 1
let staminaRegenerationAcceleration = 0.1
let miniGunCounter = 0;
let miniGunCounterIsWorking = false
let miniGunIsFiring = false;
let miniGunInterval;
let staminaRegenerationTimeout = false
let shotGunStaminaTimeout = false
// Particles 
let destroyDropParticlesArray = []
let playerSpawnParticlesArray = []
let enemyKilledParticlesArray = []
// Background 
let bloodOpac = 0.15;
let pulseAnimation = false;
let pulseAnimationIsExecuting = false
let vampirismAnimationTimeout;
let vampirismAnimationIsWorking = false;
// Bullet
let bulletArray = []
let grenadeArray = []
let isFired = false;
let longControlledFire = false
let isMoving = false
let reloadRequired = false
// Grenade
let aimingGrenade = false
let grenadeAmount = 3
let grenadeX
let grenadeY
// Weapon
let chosenWeapon = 'Automatic' // default weapon is automatic
let quickPunch = false
let punchWeaponChosen = false
let automaticWeaponChosen = true
let shotgunWeaponChosen = false
let minigunWeaponChosen = false
let sniperWeaponChosen = false
function choseDefaultWeapon() {
  const defaultWeapon = weaponArray[0]
  chosenWeapon = defaultWeapon.name;
  player.ammo = defaultWeapon.magazineSize;
  player.reloadSpeed = defaultWeapon.reloadSpeed;
  player.originalReloadSpeed = defaultWeapon.reloadSpeed; // Set the original reload speed for the player
  player.originalReloadTime = defaultWeapon.reloadTime; // Set the original reload speed for the player
  player.reloadTime = defaultWeapon.reloadTime;
  player.spread = defaultWeapon.spread;
  player.spreadWhenMoving = defaultWeapon.spread + 0.1
  player.range = defaultWeapon.range;
  player.weaponWeight = defaultWeapon.weaponWeight;
}
// Punch
let punchArray = []
let punchedEnemies = []
let executingPunch = false
// Enemy
let enemyArray = []
let displayEnemyHealth = false
// Slice 
let sliceExplosionArray = []
let sliceCooldown = 5
let sliceDamageEffect = false
let sliceDamage = 0
// Turret
let turretAmount = 2
let turretX
let turretY
let turretArray = []
const turretRadius = 20;
// Walls 
let wallsArray = []
let aimingWall = false
let wallAmount = 5
const wallDuration = 4 * 10000 // 40s in ms
// Boss
let bossArray = []
// Drop
let dropArray = []
let ableTakeDrop = false
let takeDropButtonPressed = false
let dropManaRegenerationIsWorking = false
let dropHPRegenerationIsWorking = false
// Scope 
let aimOnTheEnemy = false
const sideSuperPowers = [
  {
      key: 'z',
      name: 'Slice',
      cooldown: sliceCooldown,
      currentCooldown: sliceCooldown,
      cooldownEl:spSide1Cooldown,
      place: spSide1,
      description: 'Make a swift leap forward towards the side mouse coursor is facing to. If the jump made precisely on the enemy it can cause some damage.'
    
  },
  {
      key: 'x',
      name: 'Wall',
      duration: wallDuration,
      place: spSide2,
      description: `Build a wall enemies can't break through. When on the stage of building press the same key (${  options.wallKey}) consecutively to rotate the angle of the wall. After wall's lasting effect run out it returns back to stash.`
  },
  {
      key: 'c',
      name: 'Grenade',
      duration: '-',
      cooldown: '-',
      place: spSide3,
      description: 'Throw a grenade in the mouse direction.Press and keep for aiming.'
    
  },
  {
      key: 'v',
      name: 'Turret',
      duration: 10 * 1000,
      cooldown: 60,
      cooldownEl:spSide4Cooldown,
      place: spSide4,
      description: 'Deploy a powerful turret that automatically targets and fires at nearby enemies.'
  },
  {
      key: 'b',
      name: 'Energy Drink',
      duration: 7 * 1000,
      cooldown: 90,
      cooldownEl:spSide5Cooldown,
      place: spSide5,
      description: 'For the duration of energy drink any activity consumes only 50% of stamina.'
  }

]

spDescriptionContainer.forEach((container) => {
  container.addEventListener('mouseover', () => {
    hoveringDescriptionContainer = true
  });
  container.addEventListener('mouseout', () => {
    hoveringDescriptionContainer = false
  });
})
// Superpower bar
spAll.forEach((sp) => {
  let spKey = sp.querySelector('.super-power__key').textContent;
  if(sp.innerHTML.includes('side')){
      sp.addEventListener('mouseover' ,() => {
      hoveringSuperpowerBar = true
      if(aimingGrenade || aimingWall || turretMode) return
      if(spKey === options.sliceKey) {
        sliceSuperpowerHovered = true
      } else if (spKey === options.wallKey) {
        wallSuperpowerHovered = true
      } else if (spKey === options.grenadeKey) {
        grenadeSuperpowerHovered = true
      } else if (spKey === options.turretKey) {
        turretSuperpowerHovered = true
      }
    })
    sp.addEventListener('mouseout', ()=> {
      hoveringSuperpowerBar = false
      if(spKey === options.sliceKey) {
        sliceSuperpowerHovered = false
      } else if (spKey === options.wallKey) {
        if(aimingWall) return
        wallSuperpowerHovered = false
      } else if (spKey === options.grenadeKey) {
        if(aimingGrenade) return
        grenadeSuperpowerHovered = false
      } else if (spKey === options.turretKey) {
        if(turretMode) return
        turretSuperpowerHovered = false
      }
    })
  }

  sp.addEventListener('click', () => {
    if(hoveringDescriptionContainer) return
    if (spKey) {
      keyText = spKey.trim();
    
      if (keyText.length > 0) {
        if (sp.innerHTML.includes('top')) {
          altPressed = true;
        }
        if(keyText === `${options.sliceKey}` || keyText === `${options.grenadeKey}`) return

        document.dispatchEvent(new KeyboardEvent('keydown', { key: keyText }));
      }
    }
    altPressed = false
  });

});
// SuperPowers
const superPowers = [
  {
    key: '1',
    bottom: {
      name: 'Bullet Teleport',
      duration:'-',
      cooldown: 45,
      currentCooldown: 45,
      isExecuting:false,
      mana: 15,
      place: spBottom1,
      description: 'Teleport to the location of the first(furthest in distance) shot.'
    },
    top: {
      name: 'Heal',
      duration: 5,
      cooldown: 60,
      currentCooldown: 60,
      isExecuting:false,
      mana: 15,
      place: spTop1, 
      description: 'Generates healing pulses at regular intervals, restoring health proportionally to your current health percentage. The lower the health, the more significant the regeneration.'
    }
  },
  {
    key: '2',
    bottom: {
      name: 'shot Shot SHOT',
      duration: 5000,
      cooldown: 60,
      currentCooldown: 60,
      mana: 70,
      isExecuting:false,
      place: spBottom2,
      description: 'Every bullet that lands on the enemy launches 3 bullets from landed bullet position that can hit enemies behind creating more bullets...'
    },
    top: {
      name: 'Vampirism',
      duration: 8.5 * 1000,
      cooldown: 40,
      currentCooldown: 40,
      isExecuting:false,
      mana: 15,
      place: spTop2,
      description: 'When activated restores HP as shots land on enemies.',
      additional1: 'For a hit:  +1hp',
      additional2: 'For a kill: +5hp '
    }
  },
  {
    key: '3',
    bottom: {
      name: 'Rage',
      duration: 3 * 1000,
      cooldown: 40,
      currentCooldown: 40,
      isExecuting:false,
      mana: 20,
      place: spBottom3,
      description: 'Drastically increases moving and firing speed for a short period of time.'
    },
    top: {
      name: 'Matrix',
      duration: 6 * 1000,
      cooldown: 50,
      currentCooldown: 50,
      isExecuting:false,
      mana: 30,
      place: spTop3,
      description: 'Slows down all fired bullets for the ability duration. Can be used for coming up with tactics and combining with other abilities.'
    }
  },
  {
    key: '4',
    bottom: {
      name: 'Blast',
      duration: 3 * 1000,
      cooldown: 45,
      currentCooldown: 45,
      isExecuting:false,
      mana: 20,
      place: spBottom4,
      description: 'Unleashes an intense burst of bullets, overwhelming adversaries with a relentless onslaught.'
    },
    top: {
      name: 'Freeze',
      duration: 3 * 1000,
      cooldown: 30,
      currentCooldown: 30,
      isExecuting:false,
      mana: 20,
      place: spTop4,
      description: 'Enemies lose half of their velocity for the short period of time.'
    }
  },
  {
    key: '5',
    bottom: {
      name: 'Power Shot',
      amount: Math.floor(Math.random() * 5) + 1,
      cooldown: 70,
      duration: '-' ,
      currentCooldown: 70,
      isExecuting:false,
      mana: 20,
      place: spBottom5,
      description: 'Unleash an exceptional force capable of eliminating any generic enemy just with one shot. Randomly picks number of shots. Possible amount:',
      additional1: 'Minimum shots: 1',
      additional2: 'Maximum shots: 5'
      
    },
    top: {
      name: 'Fear',
      duration: 2 * 1000,
      cooldown: 40,
      currentCooldown: 40,
      isExecuting:false,
      mana: 15,
      place: spTop5,
      description: 'Enemies run away in fear.'
    }
  },
  {
    key: '6',
    bottom: {
      name: 'Thunder',
      amount: 1,
      duration: '-',
      cooldown: 60,
      currentCooldown: 60,
      isExecuting:false,
      mana: 35,
      place: spBottom6,
      description: 'Unleash the awe-inspiring might of Thunder, a superpower that transforms the battlefield into a canvas of electrifying chaos. As the ominous hum of energy engulfs you, Thunder mode activates, summoning a tempest of bullets to dance in a mesmerizing circular pattern. Each bullet, propelled with precision, weaves through the air like bolts of lightning, rendering adversaries powerless in the face of your electrical onslaught.'
    },
    top: {
      name: 'Shield',
      duration: 40 * 1000,
      cooldown: 40,
      currentCooldown: 40,
      isExecuting:false,
      mana: 20,
      place: spTop6,
      description: 'Generating a magic shield around you that ricochets bullets.'
    }
  },
  {
    key: '7',
    bottom: {
      name: 'Illusion',
      duration: 10 * 1000,
      cooldown: 60,
      currentCooldown: 60,
      isExecuting: false,
      mana: 40,
      place: spBottom7,
      description: 'For enemies on the screen in random order creates illustions that distact enemies and make them hit also they have enemy hp and hit half of the enemy damage.'
    },
    top: {
      name: 'Rewind Time',
      duration: 5,
      cooldown: 70,
      currentCooldown: 70,
      isExecuting:false,
      mana: 40,
      place: spTop7,
      description: 'Rewind time back returning player to the position he was 5 seconds earlier. Also returns exact HP, armor and stamina from that time. '
    }
  }
]

// Toggle settings
function updateToggleSettings() {
  optionsItems.forEach((item, index) => {
    const optionTitle = item.querySelector('.options__item-title');
    const optionsChoiceContainer = item.querySelector('.options__choice-container');

    if (optionsChoiceContainer) {
      const optionsChoices = optionsChoiceContainer.querySelectorAll('.options__choice');
      const choices = {};
      optionsChoices.forEach((choice) => {

        if(choice.classList.contains('options__choice--chosen')){
          choices[`chosen`] = choice.textContent.trim();
        }
      });

      options[`setting${index + 1}`] = { title: optionTitle, ...choices };

    }
  });

  // Check conditions is setting ON / OFF
  musicOn = options.setting1 && options.setting1.chosen === 'On' ? true : false;
  showDamageON = options.setting2 && options.setting2.chosen === 'On' ? true : false;
  displayEnemyHpON = options.setting3 && options.setting3.chosen === 'On' ? true : false;
  bloodSplashOn = options.setting4 && options.setting4.chosen === 'On' ? true : false;
  takeDropAutomaticallyON = options.setting5 && options.setting5.chosen === 'On' ? true : false;
   if(displayEnemyHpON){
    displayEnemyHealth = true
  } else {
    displayEnemyHealth = false
  }
}
updateToggleSettings()

optionsChoiceContainer.forEach ((container) => {
  const oChoices = container.querySelectorAll ('.options__choice')

  oChoices.forEach((choice) => {
    choice.addEventListener ('click' , (event) => {
      oChoices.forEach ((choice) => {
        choice.classList.remove ('options__choice--chosen')
      })
      event.target.classList.add ('options__choice--chosen')

      updateToggleSettings()
    })

  })
})

optionsKeys.forEach((option) => {
  
  option.addEventListener ('click', () => {
    optionsKeys.forEach((option) => {
      option.classList.remove ('clickedOptionKey')
    })

    option.classList.add('clickedOptionKey')

    document.addEventListener('keydown', bindNewKey)

    function bindNewKey(event) {
      const newKey = event.key

      if(option.classList.contains('clickedOptionKey')){
        option.textContent = newKey
      }
      document.removeEventListener('keydown',bindNewKey)
      option.classList.remove('clickedOptionKey')
    }
  
  })

})

// Prevent default key 
window.addEventListener('keydown', function (e) {
  const preventDefaultKeys = ['Alt', 'Control', 'Shift', 'Tab', 'Meta'];
  if (preventDefaultKeys.includes(e.code)) {
    e.preventDefault();
  }
});



// Prevent Right Click 
document.addEventListener('contextmenu', utiliseStash);
function utiliseStash(event) {
  event.preventDefault();

  if (event.button === 2) {
    
    if (hoveringManaStash) {
      if (mana < 100 && manaStash > 0) {
        manaStash--;
        let counter = 0
        let manaStashIntervalId = setInterval(() => {
          mana += 1;
          counter++
          stashManaUsed = true
          if(counter === 25 || mana === 100) {
            clearInterval(manaStashIntervalId)
            stashManaUsed = false
          }
        }, 100);
      }
    }
    if(hoveringHealthStash){
      if (health < 100 && healthStash > 0) {
        healthStash--;
        let counter = 0
        stashHealthUsed = true
        let healthStashIntervalId = setInterval(() => {
          health += 1;
          counter++
          
          if(counter === 25 || health === 100) {
            clearInterval(healthStashIntervalId)
            stashHealthUsed = false
          }
        }, 150);
      }
    }
  }
}

let stashHoverDelay = 700; // 0.7 seconds
let stashHoverTimeoutID;
manaStashEl.addEventListener('mouseover', () => {
  hoveringManaStash = true;
  // Avoid description always popping when user hover for brief moment when want to use the stash item.
  stashHoverTimeoutID = setTimeout(() => {
    manaStashContainer.style.opacity = '1';
    manaStashContainer.style.visibility = 'visible';
  }, stashHoverDelay);
});
manaStashEl.addEventListener('mouseout', () => {
  hoveringManaStash = false;
  clearTimeout(stashHoverTimeoutID);
  manaStashContainer.style.opacity = '0';
  manaStashContainer.style.visibility = 'hidden';
});
healthStashEl.addEventListener('mouseover', () => {
  hoveringHealthStash = true;
  stashHoverTimeoutID = setTimeout(() => {
    healthStashContainer.style.opacity = '1'
    healthStashContainer.style.visibility = 'visible'
  }, stashHoverDelay);
});
healthStashEl.addEventListener('mouseout', () => {
  hoveringHealthStash = false;
  clearTimeout(stashHoverTimeoutID);
  healthStashContainer.style.opacity = '0'
  healthStashContainer.style.visibility = 'hidden'
});
// Remove from the stash on pressing left mouse 
manaStashEl.addEventListener('click', ()=> {
  if(manaStash <= 0) return
  manaStash -= 1
  dropArray.push(new Drop({ x: player.x, y: player.y, randomNumber: 5 }))
})
healthStashEl.addEventListener('click', ()=> {
  if(healthStash <= 0) return
  healthStash -= 1
  dropArray.push(new Drop({ x: player.x, y: player.y, randomNumber: 6 }))
})

// Main menu
const mainMenuComputed = window.getComputedStyle(mainMenu);

  if (mainMenuComputed.opacity === '1') {
    inMainMenu = true
    hideBars();
  }

function hideMainMenu() {
  if(inMainMenu) {
    inMainMenu = false
    mainMenu.style.opacity = '0'
    mainMenu.style.transform = 'scale(0)'
    if(mainMenuPlay.textContent.trim() === 'Play') {
      setTimeout(() => {
        displayBars()
        setTimer()
      }, 1500);
    } else if (mainMenuPlay.textContent.trim() === 'New Game') {
      createNewGame()
    }
    
  }
}
mainMenuPlay.addEventListener ('click', hideMainMenu)
mainMenuOptions.addEventListener ('click', displayOptionsWindow)

mainMenuItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    mainMenuItems.forEach((otherItem) => {
      otherItem.classList.remove('main-menu__item--chosen');
    });

    item.classList.add('main-menu__item--chosen');
  });

});

function returnToMainMenu() {
    inMainMenu = true
    mainMenu.style.opacity = '1'
    mainMenu.style.transform = 'scale(1)'
    if(!gameOver) {
      if(killed >= 3) {
        mainMenuContinue.style.display = 'block'
        mainMenuPlay.textContent = 'New Game'
      } else {
        mainMenuContinue.style.display = 'none'
        mainMenuPlay.textContent = 'Play'
      }
    }
  
}

mainMenuButton.addEventListener('click' , returnToMainMenu)
mainMenuContinue.addEventListener ('click', () => {
  mainMenu.style.opacity = '0'
  mainMenu.style.transform = 'scale(0)'
  inMainMenu = false
})
menuButton.addEventListener ('click', returnToMainMenu)
// Timer
let timerIntervalId;
let timerIsRunning = false;
let timerStartTime = 0;
let timerElapsedTime = 0;
let timerMins = 0;
let timerSecs = 0;
function setTimer() {
  if(inMainMenu) return

  if (!timerIsRunning) {
    timerIsRunning = true;
    timerStartTime = Date.now() - timerElapsedTime;
    timerIntervalId = setInterval(renderTimer, 1000);

    function renderTimer() {
      timerElapsedTime = Date.now() - timerStartTime;
      timerSecs = Math.floor((timerElapsedTime / 1000) % 60);
      timerMins = Math.floor((timerElapsedTime / (1000 * 60)) % 60);
      const formattedSecs = timerSecs < 10 ? `0${timerSecs}` : timerSecs;
      timerElement.textContent = `${timerMins}:${formattedSecs}`;
    }
  }
}
setTimer()

// Regeneration
let regenerationIntervalId;
function regeneration(regenerationRate = 1000) {
    regenerationIntervalId = setInterval(() => {
      if (health < 100) {
        health += 1;
      } 
      if (mana < 100) {
        mana += 1;
      }
    }, regenerationRate);
  
}
regeneration()
function regulateStamina() {
  
  let staminaHueMax = 178;
  let staminaHueDecrease = Math.max(0, (100 - staminaPercentage) * 1.1);
  if(staminaPercentage<100){
    staminaBar.style.background = `linear-gradient(to right, rgb(197, ${staminaHueMax - staminaHueDecrease}, 39) ${stamina}px, rgb(255, 255, 255,0.7) ${0}px)`;
  } 
  
  staminaPercentage = (stamina / maxStamina) * 100;
  if(player.isMoving){
    if(stopStaminaRegeneration) return
    staminaRegenerationAcceleration = 0;
    if(energyDrinkIsWorking) {
      stamina -= 0.1
    }else {
      stamina -= 0.5
    }
  }
  if(minigunWeaponChosen) {
    if(miniGunCounterIsWorking) {
      stopStaminaRegeneration = true
    } else {
      stopStaminaRegeneration = false
    }
  }
  if(stopStaminaRegeneration){
    staminaRegenerationAcceleration = 0;
  }
  // Samina regeneration
  if(staminaPercentage<100) {
    if(!player.isMoving && !stopStaminaRegeneration) {
      if((staminaRegenerationSpeed * staminaRegenerationAcceleration) <= 2.5) {//max regeneration speed after acceleration
        staminaRegenerationAcceleration+=0.02;
      }
      stamina += staminaRegenerationSpeed * staminaRegenerationAcceleration;
      // Accelerate stamina regeneration every second
    }
  }

  let miniGunSpinningTimeIncrease
  const staminaPercent = Math.floor(staminaPercentage)
  if(staminaPercent < 100){
    if(automaticWeaponChosen){
      spreadIncrease = (100 - staminaPercent) * 0.0015; // max spread is 0.2 when stamina is 0
      reloadSpeedIncrease = (100 - staminaPercent) * 1;
    } else if (minigunWeaponChosen){
      spreadIncrease = (100 - staminaPercent) * 0.0010;
      reloadSpeedIncrease = (70 - staminaPercent) * 0.8;
      if(!miniGunIsFiring){
        miniGunSpinningTimeIncrease = (100 - staminaPercent) * 5; // also spinning minigun time depends on stamina 
        miniGunSpinningTime = Math.floor(Math.random() * (1300 - 800) + 800) + miniGunSpinningTimeIncrease
      }
    } else if (sniperWeaponChosen){
      spreadIncrease = (100 - staminaPercent) * 0.0007;
      reloadSpeedIncrease = (100 - staminaPercent) * 3;
    } else if (shotgunWeaponChosen){
      reloadSpeedIncrease = (100 - staminaPercent) * 4;
    }
    spread += spreadIncrease
  }

  noStaminaNotificationFunction()
  noStaminaNotification.style.opacity = noStaminaOpacity
  
  
}

let noStaminaOpacity = 0
let noStaminaAnimationIsExecuting = false
function noStaminaNotificationFunction() {
  let goingUpInterval
  let goingDownInterval
  if(noStaminaAnimationIsExecuting) return
    noStaminaOpacity = 0
    if(staminaPercentage<30) { // No mana notification appears if less then 30 percent stamina left.
    noStaminaAnimationIsExecuting = true
    goingUpInterval = setInterval(() => {
    noStaminaOpacity += 0.015;
    if (noStaminaOpacity >= 0.5) {
      clearInterval(goingUpInterval);
        goingDownInterval = setInterval(() => {
          noStaminaOpacity -= 0.012;
            if (noStaminaOpacity <= 0) {
              clearInterval(goingDownInterval);   
              noStaminaAnimationIsExecuting = false
            }
        },30);
    }
  }, 30);
} 
}

// Music player
let reloadCounterInterval
function toggleMusicWindow() {
  if (!canOpenMusicPlayerWindow) return

  musicPlayer.classList.toggle('music-player--opened');

  const musicPlayerOpenedCondition = musicPlayer.classList.contains('music-player--opened');

  if(musicPlayerOpenedCondition){
    
  // Blur the background slightly 
    killedDisplay.style.display = 'none'
    blurBackground.style.backdropFilter = 'blur(1px)'
    blurBackground.style.opacity = '1'
    blurBackground.style.transform = 'scale(1)'
    tintBackground.style.opacity = '0.15'

    bulletsCounter = bulletArray.length
    musicPlayerOpened = true

    if(isReloading) {
      clearInterval(reloadCounterInterval)
      isReloading = false
      player.reloadTime = reloadCounter * 5
      document.dispatchEvent(new KeyboardEvent('keydown', { key: options.reloadKey }))
    }
  } else {
    musicPlayerOpened = false
    killedDisplay.style.display = 'block'
    blurBackground.style.opacity = '0'
    blurBackground.style.transform = 'scale(0)'
    tintBackground.style.opacity = '0'
  
    if(isReloading) {
      clearInterval(reloadCounterInterval)
      player.reloadTime = reloadCounter / 5
      reloadCounterInterval = setInterval(() => {
        reloadCounter -= 50
        if(reloadCounter <= 0) {
          clearInterval(reloadCounterInterval)
        }
      }, 50);
      setTimeout(() => {
          ammo = player.ammo
          reloadRequired = false
          isReloading = false
          player.scopeCircumferance = 2
      }, player.reloadTime);
    }
    // Make possible to open music window again only after some time. Prevent abuse of slowmotion.
    canOpenMusicPlayerWindow = false
    setTimeout(() => {
      canOpenMusicPlayerWindow = true
    }, 3000);
  }

  if (musicPlayerOpened) {
    regenerationRate = 5000;
  } else {
    regenerationRate = 1000;
  }
  clearInterval(regenerationIntervalId);
  regeneration(regenerationRate)

}
navbarMusic.addEventListener('click', toggleMusicWindow);
musicPlayer.addEventListener('mouseover',() => { hoveringMusicPlayer = true})
musicPlayer.addEventListener('mouseout',() => { hoveringMusicPlayer = false})
musicPlayerClose.addEventListener('click', toggleMusicWindow)
function showMusicSecondWindow() {
    musicFirstWindow.style.display = 'none'
    currentSongContainer.style.display = 'none'
    musicSecondWindow.style.display = 'block'

    musicReturnBack.addEventListener ('click', () => {
      
      musicFirstWindow.style.display = 'block'
      currentSongContainer.style.display = 'flex'
      musicSecondWindow.style.display = 'none'
    } )


}
currentSongContainer.addEventListener ('click', showMusicSecondWindow)
// Current Time for music player
function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  musicPlayerTime.textContent = formattedTime;
}

function reset() {
  superPowerKey = ''
  superPowerArray = []
  checkpointArray = []
  superPowers.forEach((sp) => {
    sp.currentCooldown = sp.cooldown
  })
  rageMode = false
  freezeMode = false
  fearMode = false
  shieldMode = false
  turretMode = false
  summonMode = false
  vampirismMode = false
  powerShotMode = false
  powerShotAmount = 0
  powerShotCount = 0
  blastMode = false
  thunderMode = false
  matrixMode = false
  bulletTeleportMode = false
  sliceMode = false
  detectedMode = false
  shotShotSHOT = false
  shotShotSHOTArray = []
  // Bullet  bulrray = []
  isFired = false;
  isMoving = false
  reloadRequired = false
  // Grenade
  bulletArray = []
  grenadeArray = []
  aimingGrenade = false
  grenadeAmount = 3
  // Weapon
  chosenWeapon = 'Automatic' // default weapon is automatic
  quickPunch = false
  punchWeaponChosen = false
  automaticWeaponChosen = true
  shotgunWeaponChosen = false
  minigunWeaponChosen = false
  sniperWeaponChosen = false
  // Enemy
  enemyArray = []
  // Turret
  turretAmount = 2
  // Walls 
  wallsArray = []
  aimingWall = false
  wallAmount = 5
  // Boss
  bossArray = []
  // Drop
  dropArray = []
  hoveringNavbar = false
  frames = 0
  score = 0
  killed = 0
  health = 100
  healthStash = 1
  mana = 100
  manaStash = 1
  regenerationRate = 1000
  armor = 100
  ammo = 30
  isReloading = false
  pressedKeys = []
  inOptionsWindow = false
  inWeaponWheel = false
  inMainMenu = false
  musicPlayerOpened = false
  justRevived = false
  player.x = gameWidth/2
  player.y = gameHeight/2
  timerIsRunning = false;
  timerStartTime = 0;
  timerElapsedTime = 0;
  timerMins = 0;
  timerSecs = 0;
  setTimer();
  gamePaused = false
  inMainMenu = false
  blurBackground.style.opacity = 0
  blurBackground.style.transform = 'scale(0)'
  tintBackground.style.opacity = 0

  
}
// Initialisations
// Initialisations
// Initialisations

const background = new Background()
const player = new Player()

if (!gameOver || !gamePaused ) {
  spawnBoss()
  superPowerDescription()
}
choseDefaultWeapon()

function bulletLandedAnimation() {
  bulletLanded.forEach((bullet) => {

    background.bulletLanded(bullet)
  })
}

// var shakingElements = [];

// var startX = player.x;
// var startY = player.y;
// var startAngle = 0;

// function shake (player, magnitude = 16, angular = false) {
//   var tiltAngle = 1;
//   var counter = 1;
//   var numberOfShakes = 15;
//   var magnitudeUnit = magnitude / numberOfShakes;
//   if (shakingElements.indexOf(player) === -1) {
//     shakingElements.push(player);
//     if (angular) {
//       angularShake();
//     } else {
//       upAndDownShake();
//     }
//   }

//   function upAndDownShake() {
//     if (counter < numberOfShakes) {
//       magnitude -= magnitudeUnit;
//       var randomX = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//       var randomY = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

//       player.x += randomX;
//       player.y += randomY;
//       counter += 1;
//     } else {
//       // Reset to the original position
//       player.x = startX;
//       player.y = startY;
//       shakingElements.splice(shakingElements.indexOf(player), 1);
//     }
//   }

//   function angularShake() {
//     if (counter < numberOfShakes) {
//       magnitude -= magnitudeUnit;
//       var angle = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//       player.rotation += angle;

//       counter += 1;
//       tiltAngle *= -1;
//     } else {
//       // Reset to the original rotation
//       player.rotation = startAngle;
//       shakingElements.splice(shakingElements.indexOf(player), 1);
//     }
//   }
// };


// Rewind time superpower
function saveCheckpoints() {
  const checkpoint = {
      x: player.x,
      y: player.y,
      health:health,
      armor:armor,
      stamina: stamina,
  };

  checkpointArray.push(checkpoint);
  
}
function startSavingCheckpoints() {
  saveCheckpointsInterval = setInterval(() => {
    if (checkpointArray.length >= 10) {
      checkpointArray.shift();
  }
    saveCheckpoints()
  }, 500);
}

let killedEnemyArray = []


let zoomLevel = 1; // Initial zoom level
let zoomApplied = false
let animationId
let zoomSpeed = 0

let shakeIntensity = 5; // Adjust the intensity of the shake
let shakeDuration = 10; // Adjust the duration of the shake in frames
let shakeFramesRemaining = 0;

function shakeScreen() {
  if (shakeFramesRemaining > 0) {
    const offsetX = (Math.random() - 0.5) * 2 * shakeIntensity;
    const offsetY = (Math.random() - 0.5) * 2 * shakeIntensity;

    ctx.setTransform(zoomLevel, 0, 0, zoomLevel, offsetX, offsetY);

    shakeFramesRemaining--;
  } else {
    // Reset transformation when the shake is over
    ctx.setTransform(zoomLevel, 0, 0, zoomLevel, 0, 0);
  }
}


function animate() {
  animationId = requestAnimationFrame(animate)
  ctx.clearRect(0, 0, gameWidth, gameHeight)
  // Player
  player.update()
  regulateStamina()
  if(stamina <= 0) {
    stamina = 0
  } else if(stamina>=parseFloat(staminaBarWidth)) {
    stamina = parseFloat(staminaBarWidth)
  }
  if(staminaPercentage <= 0 ) {stopStaminaRegeneration = false}
  player.reloadSpeed = player.reloadSpeed + reloadSpeedIncrease // stamina affects reload speed

  if (zoomApplied) {
    // Adjust the zoom level as needed
    zoomLevel += zoomSpeed;

    // Clamp the zoom level to a certain range if needed
    zoomLevel = Math.min(2, zoomLevel);
    ctx.setTransform(zoomLevel, 0, 0, zoomLevel, 0, 0);
  }
  blackLinesAnimation()

  if (shakeFramesRemaining > 0) {
    shakeScreen();
  }

function startShake() {
  shakeFramesRemaining = shakeDuration;
}


  // Particles animation
  if(enemyKilledParticlesArray.length > 0){
    enemyKilledParticlesArray.forEach ((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI)
      ctx.fillStyle = 'black'
      ctx.fill()
      ctx.closePath()
      // Adjust the movement distance based on the random values
      particle.x -= particle.speed * particle.randomX
      particle.y -= particle.speed * particle.randomY
    })
    
  }

  // shake(player, 20, true); // Custom magnitude and angular shake

  if(playerSpawnParticlesArray.length > 0){
    playerSpawnParticlesArray.forEach ((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI)
      ctx.fillStyle = `hsl(${particle.hue}, 50%, 50%)`;
      ctx.fill()
      ctx.closePath()
      // Adjust the movement distance based on the random values
      particle.x -= particle.speed * particle.randomX
      particle.y -= particle.speed * particle.randomY
    })
    
  }
  // Destroy drop animation
  if (destroyDropParticlesArray.length > 0) {
    destroyDropParticlesArray.forEach((particle) => {
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = randomColor;
        ctx.fill();
        ctx.closePath();

        // Adjust the movement distance based on the random values
        particle.x -= particle.speed * particle.randomX;
        particle.y -= particle.speed * particle.randomY;

        // Add constraints to keep particles within the canvas
        if (particle.x < 0 || particle.x > gameWidth || particle.y < 0 || particle.y > gameHeight) {
            destroyDropParticlesArray.splice(destroyDropParticlesArray.indexOf(particle), 1);
        }
    });
}
  // Walls
  wallsArray.forEach ((wall) => {
    wall.draw()
    if(aimingWall && wall === wallsArray[wallsArray.length - 1]){
     wall.aiming()
    } 
    // wall.remove()
    enemyArray.forEach((enemy) => {
      wall.checkCollisionWithEnemy(enemy)
    })
  })

//   // Shake
  // Turret
    aimTurret()
    drawTurret()
    drawTurretBullet()
  // Background and animations
  background.update()
  background.bloodEffect({health:health})
  
  if(vampirismAnimationIsWorking) {
    healthRegenerationAnimation()
  }
  if (dropHPRegenerationIsWorking) {
    healthRegenerationAnimation()
    console.log('hp')
  }
  if(dropManaRegenerationIsWorking) {
    manaRegenerationAnimation()
    console.log('mana')
  }
  if(musicPlayerOpened) {
    musicPlayerAnimation()
  }
  if(matrixMode){
    matrixGradientAnimation()
  }
  
  if(!vampirismAnimationIsWorking || !dropHPRegenerationIsWorking || !stashHealthUsed ){
    startKilledAnimation()
  }
  if(killedAnimation) {
    killedAnimationFunction()
  }
  if(energyDrinkIsWorking) {
    energyDrinkAnimation()
  }
  // Bullets
  bulletArray.forEach((bullet) => {
    bullet.update()

  })
  
  // Grenade
  if(grenadeAmount > 0 && aimingGrenade) {
    const mouseDistance = Math.sqrt((mousePositionX - player.x) ** 2 + (mousePositionY - player.y) ** 2);
    if (mouseDistance > player.rangeValue) {
        const angle = Math.atan2(mousePositionY - player.y, mousePositionX - player.x);
        grenadeX = player.x + player.rangeValue * Math.cos(angle);
        grenadeY = player.y + player.rangeValue * Math.sin(angle);
        mouseBeyoundSuperPowerRange = true
    } else {
        grenadeX = mousePositionX;
        grenadeY = mousePositionY;
        mouseBeyoundSuperPowerRange = false
    }
          ctx.beginPath();
          ctx.arc(grenadeX, grenadeY, 15, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(0, 255, 0, 0.1)`; // Blue fill color with opacity
          ctx.fill();
          ctx.closePath();
          
          ctx.beginPath();
          ctx.arc(grenadeX, grenadeY, 15, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(0, 255, 0, 0.35)`; // Green border with opacity
          ctx.lineWidth = 8;
          ctx.stroke();
          ctx.closePath();
  }
  grenadeArray.forEach ((grenade) => {
    grenade.draw()
  })
  // No mana
  if(noManaNotification) {
    const exclamationImage = new Image();
    exclamationImage.src = 'exclamation.svg';
    const explamationSize = 30
    ctx.drawImage(exclamationImage, mousePositionX - explamationSize / 2, mousePositionY - explamationSize / 2, explamationSize, explamationSize);

  }
  
  // Weapons 
  weaponArray.forEach((weapon) => {
    weapon.update() 
  })  
  // Drop
  dropArray.forEach((drop) => {
    drop.update()
  });
  // Boss
  bossArray.forEach ((boss) => {
    boss.draw()
  })
  // Enemy Illusion
  enemyIllusionArray.forEach((illusion) => {
    illusion.update()
  })
  // Red exclamtion
  enemyArray.forEach((enemy) => {
    if (enemy.fired) {
      const redExclamationImage = new Image();  // Corrected variable name
      redExclamationImage.src = 'red-exclamation.svg';  // Corrected variable name and image source
      const redExclamationHeight = 50;
      const redExclamationWidth = 50;
      ctx.drawImage(redExclamationImage, enemy.x, enemy.y, redExclamationWidth, redExclamationHeight);
    }
  });
  // Enemies
  enemyArray.forEach((enemy, enemyIndex) => {
    enemy.update()

    punchArray.forEach((punch, punchIndex) => {
      // Check if the enemy has already been hit by this punch
      if (punchedEnemies.includes(enemyIndex))  return;
      if(punchedEnemies.length >= 1) return // Can hit only one enemy at a time
  
      const distance = Math.hypot(punch.punchX - enemy.x, punch.punchY - enemy.y);
      if (distance < enemy.radius + punch.punchDistance / 2) {
        const damage = player.damage;

        enemy.health -= damage;
        score += 100;
        
        punchedEnemies.push(enemyIndex);
        // Draw damage HP
        if (showDamageON) {
          ctx.font = '40px Poppins';
          let damageColor;
  
          if (damage < 1200) {
            damageColor = 'white';
          } else if (damage < 1400) {
            damageColor = 'yellow';
          } else {
            damageColor = 'red';
          }
  
          ctx.fillStyle = damageColor;
          ctx.fillText(damage, enemy.x, enemy.y);
        }

      }
    });
  
    bulletArray.forEach((bullet, bulletIndex) => {
      // Check for collision bullets with enemies
      const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y)
      if (distance < enemy.radius + bullet.width / 2) {
        if(shotShotSHOT){
          if(enemy.shotShotSHOTApplied && bullet.shotShotSHOT === true) return 
          const existingEnemyIndex = shotShotSHOTArray.findIndex(item => item.enemyIndex === enemyIndex);
          if (existingEnemyIndex === -1) {
            shotShotSHOTArray.push({enemyIndex:enemyIndex,x:enemy.x,y:enemy.y,trajectoryX:bullet.velocity.x,trajectoryY:bullet.velocity.y})
          }
            if(!enemy.shotShotSHOTApplied){
              shotShotSHOTSuperPower() 
              enemy.shotShotSHOTApplied = true
            }
        }
        
        // Remove the bullet (if not sniper weapon chosen)
        if(!sniperWeaponChosen){
          bulletArray.splice(bulletIndex, 1)
        }
        // When bullet lands on enemy in slow motion it get out of slowmotion mode and closes music player window.
        if(musicPlayerOpened){
          toggleMusicWindow()
        }
          
          // Range damage reduction 
          const dx = enemy.x - player.x;
          const dy = enemy.y - player.y;
          const rangeDamageReduction = Math.sqrt(dx*dx + dy*dy)

          let damage = player.damage
          if(shotgunWeaponChosen){
            damage = player.damage - Math.floor(rangeDamageReduction)
            if(damage < 200) {
              damage = Math.floor(Math.random() * (200 - 50) + 50)
            }
          } else if (automaticWeaponChosen || minigunWeaponChosen) {
            damage = player.damage - Math.floor(rangeDamageReduction/2)
          } else if (sniperWeaponChosen) {
            damage = player.damage - Math.floor(rangeDamageReduction/3)
          }
          // Update orange bar damage animation
          if (!updateEnemyHealthArray.includes(enemy)) {
            enemy.orangeDamage = damage;
            updateEnemyHealthArray.push(enemy);
          }
          enemy.health -= damage
             score += 100
           //  Draw damage HP
           if(showDamageON){
            ctx.font = '40px Poppins';
            let damageColor
      
            if (damage < 1200) {
              damageColor = 'white';
            } else if (damage < 1400) {
              damageColor = 'yellow';
            } else {
              damageColor = 'red';
            }
            const x = 50;
            const y = 50;
            ctx.fillStyle = damageColor;
            ctx.fillText(damage, enemy.x, enemy.y);
           }
      
        // Draw cross

          if (enemy.health <= 0) {
            const crossImage = new Image();
            crossImage.src = 'cross.svg';
            const crossHeight = 50;
            const crossWidth = 50;
            ctx.drawImage(crossImage, enemy.x, enemy.y, crossWidth, crossHeight);   
        }
        if(powerShotMode) {
          enemy.health = 0
          score += 500
        }

        if (vampirismMode) {
          health += 1;
          vampirismAnimationFunction();
          }
      
        if (vampirismMode && enemy.health <= 0) {
          health += 5;
          vampirismAnimationFunction();
        }
        // Make the enemy slightly push back and slowdown a little bit for short time
        const originalEnemyVelocity = enemy.velocity
        let pushDistance = 3
        if(shotgunWeaponChosen) {
          pushDistance = 1
        }
        bulletArray.forEach((bullet) => {
        if(!bullet.shotShotSHOT){ // if not shoShotSHOT mode applied 
          if (enemy.x <= gameWidth / 2) {
            // Push
            enemy.x -= pushDistance;
            // Slow down
          } else if (enemy.x >= gameWidth / 2) {
            enemy.x += pushDistance;
          }
          if (enemy.y <= gameHeight / 2) {
            enemy.y -= pushDistance;
          } else if (enemy.y >= gameHeight / 2) {
            enemy.y += pushDistance;
          }
        }
      })
        function slowDownAndRegainSpeed() {
          let slowedVelocity = enemy.velocity - 0.2;
          enemy.velocity = slowedVelocity;
          if(enemy.velocity <= 0.2) {
            enemy.velocity = originalEnemyVelocity
          };
        }
        slowDownAndRegainSpeed()
      }
    })
    // When enemy killed
    if(enemy.health <= 0) {
      if(!killedAnimation){
        killedEnemyArray.push(enemy)
      }
      enemyArray.splice(enemyIndex, 1)
      killed++
      killedScore.textContent = killed
      let killedEnemyX = enemy.x
      let killedEnemyY = enemy.y
      checkForDrop(killedEnemyX, killedEnemyY)

      enemyKilledParticlesAnimation(enemy.x,enemy.y)
    }
    
    // Check for loss (collision enemy with player)
    const enemyDamage = 0.4;
    const enemyPlayerDistance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
    
    if (enemyPlayerDistance < enemy.radius + player.radius) {
      // Damage side circle
      const angle = Math.atan2(enemy.y - player.y, enemy.x - player.x);
      const startAngle = angle - 0.25 * Math.PI;
      const endAngle = angle + 0.25 * Math.PI;
      
      const arcGradient = ctx.createRadialGradient(player.x, player.y, 0, player.x, player.y, 150);
      arcGradient.addColorStop(1, 'rgba(255, 0, 0, 0.4)');
      ctx.beginPath();
      ctx.arc(player.x, player.y, 150, startAngle, endAngle);
      ctx.strokeStyle = arcGradient;
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();

      // Damage side circle triange at the center
      const triangleSize = 15; 
      const triangleX = player.x + 168 * Math.cos(angle);
      const triangleY = player.y + 168 * Math.sin(angle);
      ctx.save();
      ctx.translate(triangleX, triangleY); 
      ctx.rotate(angle); // Rotate the context based on the angle
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-triangleSize, triangleSize / 2)
      ctx.lineTo(-triangleSize, -triangleSize / 2)
      ctx.closePath();
      ctx.fillStyle = arcGradient;
      ctx.fill();
      ctx.restore();
    
      // Slice damage
      if(sliceDamageEffect) {
        enemy.health -= sliceDamage
        if(showDamageON){
          ctx.font = '40px Poppins';
          ctx.fillStyle = 'white';
          ctx.fillText(sliceDamage, enemy.x, enemy.y);
         }
    
       }
       else {
        if(rewindTimeAnimation) return
        if(justRevived) return
        if(armor > 0) {
        // armor -= enemyDamage
        } else {
        health -= enemyDamage
        }
      }
      if(health <= 0) {
        gameOver = true
      }
    }

    if (justRevived) {
      if (
        enemy.x + enemy.radius * 0.5 >= player.x - player.revivalShieldRadius &&
        enemy.x - enemy.radius * 0.5 <= player.x + player.revivalShieldRadius &&
        enemy.y + enemy.radius * 0.5 >= player.y - player.revivalShieldRadius &&
        enemy.y - enemy.radius * 0.5 <= player.y + player.revivalShieldRadius
      ) {
        enemy.velocity = 0;
        player.velocity = 0;
      } else {
        enemy.velocity = enemy.originalEnemyVelocity;
        player.velocity = player.originalPlayerVelocity;
      }
    } else {
      // Regular collision
      if (
        enemy.x + enemy.radius * 0.5 >= player.x - player.radius &&
        enemy.x - enemy.radius * 0.5 <= player.x + player.radius &&
        enemy.y + enemy.radius * 0.5 >= player.y - player.radius &&
        enemy.y - enemy.radius * 0.5 <= player.y + player.radius
      ) {
        enemy.velocity = 0;
        player.velocity = 0;
      } else {
        enemy.velocity = enemy.originalEnemyVelocity;
        player.velocity = player.originalPlayerVelocity;
      }
    }
    
  })
  if(health <= 0) {
    gameOver = true
  }
  updateHealth()
  // Paused Menu
  pausedKilled.textContent = killed
  pausedScore.textContent = score
  pausedBestResult.textContent = '10500'

  // Game Over
  if(gameOver) {
    health = 0
    pressedKeys = []
    isMoving = false
    if(musicPlayerOpened) {
      toggleMusicWindow()
    }
    if(inWeaponWheel){
      weaponSectionContainer.style.display = 'none'
      weaponStatsContainter.style.display = 'none'
      hoveringWeaponSection = false
      tintBackground.style.opacity = '0'
    }
    hideCancelSuperPowerBtn()
    aimingWall = false
    if(aimingGrenade) { // If on the moment when player were aiming grenade death occured it throws grenade anyways imitating releasing. 
      setTimeout(() => {
        grenadeExplosion({
          x:grenadeX,
          y:grenadeY}
          )
        grenadeArray.push(new Grenade({
          x:grenadeY,
          y:grenadeY
        }))
      }, 1000);
      grenadeAmount -= 1
    }
    aimingGrenade = false
    turretMode = false
    wallSuperpowerHovered = false
    spSide4.style.opacity = '1';
    grenadeSuperpowerHovered = false
    turretSuperpowerHovered = false
    
    healthBarHeath.textContent = health.toFixed(0)
    clearInterval (timerIntervalId)
    clearInterval (saveCheckpointsInterval)
    setTimeout(() => {
      cancelAnimationFrame(animationId)
      blurBackground.style.backdropFilter = 'blur(2.5px)'
      blurBackground.style.opacity = '1'
      blurBackground.style.transform = 'scale(1)'

      gameOverWindow.style.transition - '0.3s'
      gameOverWindow.style.opacity = '1'
      // gameOverWindow.style.transform = 'scale(1)'
      gameOverWindow.style.visibility = 'visible'
      
      if (!countingScore) { // Corrected '==' to '!='
        countScoreAnimation();
      }
    }, 1500);

    hideBars()
    
  }

  if(justRevived){
    if(gameOverWindow.style.opacity !== 0 ){
      gameOverWindow.style.transition = '0.6s ease-out';
      gameOverWindow.style.opacity = '0';
      // gameOverWindow.style.transform = 'scale(0)';
      gameOverWindow.style.visibility = 'hidden';
      blurBackground.style.opacity = '0'
      blurBackground.style.transform = 'scale(0)'
    }
  }
  // Pause
  if(gamePaused) {
    body.style.cursor = 'default' // add cursor
    cancelAnimationFrame(animationId)
    clearInterval (timerIntervalId)
  } else {
    body.style.cursor = 'none'
  }


}


function countScoreAnimation() {
  let subtractedScore;
  let fullScore = score;
  let subtractedAmount = Math.floor(Math.random() * (400 - 100) + 100)

  if (score > subtractedAmount) {
    subtractedScore = score - subtractedAmount;
    let finalScoreInterval = setInterval(() => {
      countingScore = true;
      pausedScore.textContent = subtractedScore;
      subtractedScore++;
      if (subtractedScore > fullScore) {
        clearInterval(finalScoreInterval);
        pausedScore.textContent = fullScore;
        setTimeout(() => {
          countingScore = false
        }, 2000);
      }
    }, 1);
  }
  
  let subtractedKillAmount = Math.floor(Math.random() * (30 - 20) + 20);
  let subtractedKillScore = killed - subtractedKillAmount;
  let fullKilledScore = killed;

  if (killed >= 30) {
    pausedKilled.textContent = subtractedKillScore;
    const finalKillScoreInterval = setInterval(() => {
      subtractedKillScore++;
      pausedKilled.textContent = subtractedKillScore;
      if (subtractedKillScore > fullKilledScore) {
        clearInterval(finalKillScoreInterval);
        pausedKilled.textContent = fullKilledScore;
      }
    }, 30);
  }
}

function reviveToLife() {
  checkpointArray = []
  health = 100;
  armor = 100
  mana = 100
  displayBars();
  gameOver = false;
  gameOverWindow.style.transition = '0.6s ease-out';
  gameOverWindow.style.opacity = '0';
  // gameOverWindow.style.transform = 'scale(0)';
  gameOverWindow.style.visibility = 'hidden';
  blurBackground.style.opacity = '0'
  blurBackground.style.transform = 'scale(0)'
  setTimeout(() => {
  timerIsRunning = false;
  justRevived = true;
  setTimer();
  cancelAnimationFrame(animationId);
  animate();
  setTimeout(() => {
    justRevived = false;
  }, 5000);
  menuListItems.forEach((item) =>{
    item.style.cursor = 'none'
    setTimeout(() => {
      item.style.cursor = 'pointer'
    }, 1000);
  })
}, 1000);

}
reviveButton.addEventListener('click', reviveToLife);


function pauseTheGame() {
  if(!gamePaused) {
    gamePaused = true
    clearInterval(saveCheckpointsInterval)
    // menuContainer.style.display = 'flex'
    menuContainer.style.transition = '0.8s'
    menuContainer.style.opacity = '1'
    menuContainer.style.transform = 'scale(1)';
    hideBars()
    blurBackground.style.backdropFilter = 'blur(3px)'
    blurBackground.style.opacity = '1'
    blurBackground.style.transform = 'scale(1)'
    tintBackground.style.opacity = '0.15'
  }
  // Can restart game pressing 'Enter' 
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'Enter') {
        restartTheGame();
      }
    });
}

function restartTheGame() {
  displayBars()
  menuContainer.style.transition = '0.5s';
  menuContainer.style.opacity = '0';
  menuContainer.style.transform = 'scale(0)';
  
  blurBackground.style.opacity = '0'
  blurBackground.style.transform = 'scale(0)'
  tintBackground.style.opacity = '0'

  setTimeout(() => {
    // Countdown from 3 to 1 before restarting the game.
    let countDown = 3;
    countdown.textContent = countDown;
    
    const intervalId = setInterval(() => {
      countdown.style.display = 'flex';
      setTimeout(() => {
        countDown -= 1;
      }, 150);
      countdown.style.fontSize = '5rem';
      countdown.textContent = countDown;
  
      const fontSizeInterval = setInterval(() => {
        let fontSize = parseFloat(getComputedStyle(countdown).fontSize);
        countdown.style.fontSize = `${fontSize - 1}px`; // Adjust the decrement value as needed
    
        if (fontSize <= 1) {
          clearInterval(fontSizeInterval);
        }
      }, 10);
  
      if (countDown <= 1) {
        clearInterval(intervalId);
        setTimeout(() => {
          countdown.style.display = 'none';
          gamePaused = false;
          timerIsRunning = false
          setTimer()
          cancelAnimationFrame(animationId);
          animate();
        }, 1000);
      }
    }, 1000);
  }, 150);

}
continueButton.addEventListener ('click', restartTheGame)
function createNewGame() {
    menuContainer.style.transition = '0.5s'
    menuContainer.style.opacity = '0'
    menuContainer.style.transform = 'scale(0)'
  if(gameOver){
    gameOver = false;
    gameOverWindow.style.transition = '0.6s ease-out';
    gameOverWindow.style.opacity = '0';
    gameOverWindow.style.visibility = 'hidden';
    blurBackground.style.opacity = '0'
    blurBackground.style.transform = 'scale(0)'
  }

  displayBars()
  clearInterval(timerIntervalId);
  reset()
  cancelAnimationFrame(animationId);
  animate();

}
newGameButton.addEventListener('click', createNewGame)
tryAgainButton.addEventListener('click', createNewGame)
// Fix if loss

function displayOptionsWindow() {
  if(gamePaused){
    menuContainer.style.opacity = '0'
    menuContainer.style.transform = 'scale(0)'
    inOptionsWindow = true
  }
  if (inMainMenu) {
    optionsContainer.style.backgroundColor = 'black'
    inOptionsWindow = true
  }

  optionsWindow.style.opacity = '1'
  optionsWindow.style.transform = 'scale(1)'
}

function closeOptionsWindow() {
  optionsWindow.style.opacity = '0'
  optionsWindow.style.transform = 'scale(0)'
  updateOptions()

  if(gamePaused) {
    menuContainer.style.opacity = '1'
    menuContainer.style.transform = 'scale(1)'
    inOptionsWindow = false
  }
  if(inMainMenu) {
    optionsContainer.style.backgroundColor = 'rgb(0, 0, 0, 0.8)'
    inOptionsWindow = false
  }
}
optionsButton.addEventListener('click', displayOptionsWindow)
optionsCloseButton.addEventListener ('click', closeOptionsWindow)
optionsResetButton.addEventListener('click', defaultOptions)

function displayBars() {
  navDisplay.style.display = 'flex'
  timerDisplay.style.display = 'flex'
  healthDisplay.style.display = 'flex'
  killedDisplay.style.display = 'block'
  arcenalDisplay.style.display = 'flex'
  superPowerNumbersDisplay.style.display = 'flex'
  superPowerKeysDisplay.style.display = 'flex'
  updateDifficulty()
  spawnEnemies()
  playerSpawnParticlesAnimation()
  startSavingCheckpoints() 
}

function hideBars() {
  navDisplay.style.display = 'none'
  timerDisplay.style.display = 'none'
  healthDisplay.style.display = 'none'
  killedDisplay.style.display = 'none'
  arcenalDisplay.style.display = 'none'
  superPowerNumbersDisplay.style.display = 'none'
  superPowerKeysDisplay.style.display = 'none'

}
navbarPause.addEventListener ('click', pauseTheGame)


navbar.addEventListener ('mouseover', ()=> {
  hoveringNavbar = true
  navbarElements.forEach((element) => {
    element.style.transition = '0.8s'
  })
  navbarFullScreen.style.transform = 'translate(0)'
  navbarColor.style.transform = 'translate(0)'
  navbarMusic.style.transform = 'translate(0)'
  
})
navbar.addEventListener ('mouseout', ()=> {
  hoveringNavbar = false
    navbarFullScreen.style.transform = ''
    navbarColor.style.transform = ''
    navbarMusic.style.transform = ''
})


// If mew song start playing pop notificaiton.
timerDisplay.addEventListener ('mouseover', ()=> {
  navbarMusicNotification.style.width = '200px'
  navbarMusicNotification.style.opacity = '1'
  setTimeout(() => {
  navbarMusicNotificationContent.style.transition = '0.6s'
  navbarMusicNotificationContent.style.opacity = '1'
  navbarMusicNotificationContent.style.transform = 'scale(1)'
  }, 350);
})
// Hide notificaiton.
timerDisplay.addEventListener ('mouseout', ()=> {
  navbarMusicNotificationContent.style.transition = ''
  navbarMusicNotificationContent.style.opacity = ''
  navbarMusicNotificationContent.style.transform = ''

  setTimeout(() => {
    navbarMusicNotification.style.width = ''
    navbarMusicNotification.style.opacity = ''
  }, 150);
})


requestAnimationFrame(animate)
