// // Nav Bar functions
// navbarFullScreen.addEventListener('click', toggleFullscreen)
// // Full Screen
// function toggleFullscreen() {
//   if (document.fullscreenElement) {
//     document.exitFullscreen()
//   } else {
//     game.requestFullscreen().catch((err) => {
//       console.error(`Error attempting to enable fullscreen: ${err.message}`)
//     })
//   }
// }

// Health
function updateHealth() {
  getCurrentTime()
  // Smooth animation of decreasing HP.
  if(health >= 99) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health}%, rgba(84, 39, 29) ${health}%)`
  } else if (health >= 98) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health-2}%, rgba(84, 39, 29) ${health}%)`
  } else if (health >= 97) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health-4}%, rgba(84, 39, 29) ${health}%)`
  } else if (health >= 96) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health-6}%, rgba(84, 39, 29) ${health}%)`
  } else if (health >= 95) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health-8}%, rgba(84, 39, 29) ${health}%)`
  } else if (health <= 1) {
    healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health -2}%, rgba(84, 39, 29) ${health}%)`
  } else {
  healthBarContainer.style.background = `linear-gradient(to right, rgba(255, 1, 1, 1) ${health- 10}%, rgba(84, 39, 29) ${health}%)`
  }
  
  healthBarHeath.textContent = health.toFixed(1)

  // Upload health Stash
  healthStashEl.textContent = healthStash

  // health max is 100 points and min is 0
  if (health >= 100) {
    health = 100
    healthBarHeath.textContent = health.toFixed(0) 
  }

  // Also do the same for  Mana
  if(mana >= 99) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else if (mana >= 98) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana-2}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else if (mana >= 97) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana-4}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else if (mana >= 96) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana-6}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else if (mana >= 95) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana-8}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else if (mana <= 1) {
    manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana -2}%, rgba(255, 1, 1, 0) ${mana}%)`
  } else {
  manaBar.style.background = `linear-gradient(to right, rgb(49, 78, 158) ${mana- 10}%, rgba(255, 1, 1, 0) ${mana}%)`
  }

  manaBar.textContent = mana.toFixed(0)
  if (mana >= 100) {
    mana = 100
  }
  if (mana <= 0) {
    mana = 0
  }
  // Upload mana Stash

  // Max capacity of stash is 10 items
  stashCounter = manaStash + healthStash
  manaStashEl.textContent = manaStash
  manaStashCapacity.textContent = `${stashCounter}/${stashCapacity}`
  healthStashCapacity.textContent = `${stashCounter}/${stashCapacity}`

  armorBar.textContent = armor.toFixed(0)
  if (armor >= 100) {
    armor = 100
  }
  if (armor <= 0) {
    armor = 0
  }

  // Upload 
  wallAmountEl.textContent = wallAmount
  grenadeAmountEl.textContent = grenadeAmount
  turretAmountEl.textContent = turretAmount
  energyDrinkAmountEl.textContent = energyDrinkAmount

  // Update score
  
  healthBarScore.textContent = score
}