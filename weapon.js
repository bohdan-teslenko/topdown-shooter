const weaponSections = document.querySelectorAll('.weapon-section');
let hoveringWeaponSection = false

let displayWeaponStatsTimeout
class Weapon {
  constructor({ name, index, section, magazineSize, reloadSpeed, reloadTime, weaponWeight, spread, range,statsFireRate,statsReload,statsAccuracy,statsRange,statsWeight,statsDamage }) {
    this.name = name;
    this.index = index;
    this.section = section;
    this.magazineSize = magazineSize;
    this.reloadSpeed = reloadSpeed;
    this.reloadTime = reloadTime;
    this.weaponWeight = weaponWeight
    this.spread = spread;
    this.range = range;
    this.statsFireRate = statsFireRate
    this.statsReload = statsReload
    this.statsAccuracy = statsAccuracy
    this.statsRange = statsRange
    this.statsWeight = statsWeight
    this.statsDamage = statsDamage
  }

  update() {
    this.chose();
    this.addImage()
    this.minigun()
  }

  minigun() {
    minigunStorageEl.textContent = miniGunBulletsStorage
    if(miniGunBulletsStorage <= 0) {
      miniGunAmmoAmount = 0
    }
    if(miniGunAmmoAmount <= 0) {
      minigunStorageEl.style.display = 'none'
      minigunSection.style.backgroundColor = 'rgb(255,0,0,0.5)'
      minigunSection.style.pointerEvents = 'none';
    }else {
      minigunStorageEl.style.display = 'block'
      minigunSection.style.backgroundColor = ''
      minigunSection.style.pointerEvents = '';
    }
  }
  chose() {
    if (inWeaponWheel) {
      weaponStatsContainter.style.display = 'block'
      weaponSections.forEach((section) => {
        hoveringWeaponSection = true
        section.addEventListener('mouseover', () => {
          const miniGunSect = section.innerHTML.trim().toLowerCase().includes('minigun')
          if(miniGunAmmoAmount <= 0 && miniGunSect){
            hoveringWeaponSection = false
            return
          } 
          if(miniGunSect) {
            player.ammo = miniGunBulletsStorage
          }
          punchWeaponChosen = false
          if (section === this.section) {
            chosenWeapon = this.name;
            player.reloadSpeed = this.reloadSpeed;
            player.originalReloadSpeed = this.reloadSpeed; // Set the original reload speed for the player
            player.originalReloadTime = this.reloadTime; // Set the original reload speed for the player
            player.reloadTime = this.reloadTime;
            player.spread = this.spread;
            player.spreadWhenMoving = this.spread + 0.1
            player.range = this.range;
            player.weaponWeight = this.weaponWeight;
            if(section !== miniGunSect) {
              player.ammo = this.magazineSize;
            }

            // Stats
            statsAmmo.textContent = this.magazineSize
            statsFireRate.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsFireRate}%, rgba(255, 255, 255,0.2) ${this.statsFireRate}%)`
            statsReload.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsReload}%, rgba(255, 255, 255,0.2) ${this.statsReload}%)`
            statsAccuracy.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsAccuracy}%, rgba(255, 255, 255,0.2) ${this.statsAccuracy}%)`
            statsRange.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsRange}%, rgba(255, 255, 255,0.2) ${this.statsRange}%)`
            statsWeight.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsWeight}%, rgba(255, 255, 255,0.2) ${this.statsWeight}%)`
            statsDamage.style.background = `linear-gradient(to right, rgba(255, 255, 255,0.7) ${this.statsDamage}%, rgba(255, 255, 255,0.2) ${this.statsDamage}%)`
            displayWeaponStatsTimeout = setTimeout(() => {
              if(!inWeaponWheel) return
              if(!hoveringWeaponSection) return
              weaponStatsContainter.style.opacity = '1'
              weaponStatsContainter.style.transform = 'scale(1)'
            }, 700);
          }
        });

        section.addEventListener ('mouseout', () => {
          hoveringWeaponSection = false
          clearTimeout(displayWeaponStatsTimeout)
          weaponStatsContainter.style.opacity = '0'
          weaponStatsContainter.style.transform = 'scale(0.9)'
        })
      });
    
      automaticWeaponChosen = false
      shotgunWeaponChosen = false
      minigunWeaponChosen = false
      sniperWeaponChosen = false
     if(punchWeaponChosen) return
      if(chosenWeapon === 'Automatic'){
        automaticWeaponChosen = true
      } else if (chosenWeapon === 'Shot') {
        shotgunWeaponChosen = true
      } else if (chosenWeapon === 'Minigun') {
        minigunWeaponChosen = true
      } else if (chosenWeapon === 'Sniper') {
        sniperWeaponChosen = true
      }
      
    }
  }

  addImage() {
    let weaponImg;
    let weaponImgSize
    if (automaticWeaponChosen) {
      weaponImg = 'automatic.png';
      weaponImgSize = '110px'
    } else if (shotgunWeaponChosen) {
      weaponImg = 'shotgun.png';
      weaponImgSize = '49px'
    } else if (minigunWeaponChosen) {
      weaponImg = 'minigun-flipped.png';
      weaponImgSize = '72px'
    } else if (sniperWeaponChosen) {
      weaponImg = 'sniper.png';
      weaponImgSize = '65px'
    }

    const weaponImgDiv = document.getElementById('weapon-img');
    const weaponImage = document.createElement('img');
    weaponImage.setAttribute('src', `${weaponImg}`);
    weaponImgDiv.innerHTML = '';
    weaponImgDiv.appendChild(weaponImage);
    weaponImage.style.height = `${weaponImgSize}`
  }

}
const weaponArray = [];

function createWeapon({ name, index, magazineSize, reloadSpeed, reloadTime, weaponWeight, spread, range ,statsFireRate,statsReload,statsAccuracy,statsWeight,statsRange,statsDamage}) {
  let section;
  if (name.toLowerCase() === 'punch') {
    section = document.getElementById('punch');
  } else {
    // For other weapons, find the section based on the name
    weaponSections.forEach((sec) => {
      if (sec.innerHTML.toLowerCase().includes(name.toLowerCase())) {
        section = sec;
      }
    });
  }

  const newWeapon = new Weapon({
    name,
    index,
    section,
    magazineSize,
    reloadSpeed,
    reloadTime,
    weaponWeight,
    spread,
    range,
    statsFireRate,
    statsReload,
    statsAccuracy,
    statsWeight,
    statsRange,
    statsDamage
  });
  weaponArray[index - 1] = newWeapon;
}

createWeapon({
  name:'Automatic',
  index: 1,
  magazineSize: 30,
  reloadSpeed: 150,
  reloadTime: 2000,
  weaponWeight: 1.75,
  spread: 0.05,
  range: 0,
  statsDamage:40,
  statsFireRate:70,
  statsReload:60,
  statsAccuracy:80,
  statsRange:70,
  statsWeight:37

})
createWeapon({
  name: 'Shot',
  index: 2,
  magazineSize: 6,
  reloadSpeed: 600,
  reloadTime: 1550,
  weaponWeight: 1.5,
  statsDamage:61,
  statsFireRate:34,
  statsReload:70,
  statsAccuracy:47,
  statsRange:19,
  statsWeight:30
})
createWeapon({
  name: 'Minigun',
  index: 3,
  magazineSize: 200,
  reloadSpeed: 40,
  reloadTime: 7000,
  spread:0.3,
  weaponWeight: 3.5,
  statsDamage:22,
  statsFireRate:96,
  statsReload:5,
  statsAccuracy:22,
  statsRange:57,
  statsWeight:92
})
createWeapon({
  name: "Sniper",
  index: 4,
  reloadSpeed: 800,
  reloadTime: 2500,
  magazineSize: 10,
  spread: 0,
  weaponWeight: 2.25,
  statsDamage:82,
  statsFireRate:25,
  statsReload:33,
  statsAccuracy:97,
  statsRange:98,
  statsWeight:52
})