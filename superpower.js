
function superPowerDescription() {
  superPowers.forEach((sp) => {
    // Top
    const topManaElement = document.getElementById(`top${sp.key}Mana`);
    if (topManaElement) {
      const topManaValue = sp.top.mana;
      topManaElement.textContent = `${topManaValue}`;
      sp.top.manaEl = topManaElement
    }
    const topCooldownElement = document.getElementById(`top${sp.key}Cooldown`);
    if (topCooldownElement) {
      const topCooldownValue = sp.top.cooldown;
      topCooldownElement.textContent = `${topCooldownValue}`;
      topCooldownElement.style.opacity = '0'
      sp.top.cooldownEl = topCooldownElement
    }

    const topKeyElement = document.getElementById(`top${sp.key}Key`);
    if (topKeyElement) {
      sp.top.keyEl = topKeyElement
    }

    const topDescriptionContainer = document.getElementById(`top${sp.key}`);
    if (topDescriptionContainer) {
      const topNameElement = topDescriptionContainer.querySelector('.super-power__name');
      const topDescriptionTextElement = topDescriptionContainer.querySelector('.super-power__description-text');
      const topAdditionalElement1 = topDescriptionContainer.querySelector('#additional1');
      const topAdditionalElement2 = topDescriptionContainer.querySelector('#additional2');
      const topDurationElement = topDescriptionContainer.querySelector('.stats-duration__value');
      const topCooldownElement = topDescriptionContainer.querySelector('.stats-cooldown__value');
      const topManaElement = topDescriptionContainer.querySelector('.stats-mana__value');

      if (topNameElement) {
        topNameElement.textContent = sp.top.name;
      }
      if (topDescriptionTextElement) {
        topDescriptionTextElement.textContent = sp.top.description;
      }
      if (topAdditionalElement1 || topAdditionalElement2) {
        topAdditionalElement1.textContent = sp.top.additional1;
        topAdditionalElement2.textContent = sp.top.additional2;
      }
      if (topDurationElement) {
     
        const duration = sp.top.duration;
        if (duration > 99) {
          topDurationElement.textContent = (duration / 1000).toFixed(1) + 's';
        } else {
          topDurationElement.textContent = duration + 's'
        }

      }
      if (topCooldownElement && sp.top.cooldown) {
        const cooldown = sp.top.cooldown;
        if (cooldown > 99) {
          topCooldownElement.textContent = (cooldown / 1000).toFixed(1) + 's';
        } else {
          topCooldownElement.textContent = cooldown + 's'
        }

      }
      if (topManaElement) {
        topManaElement.textContent = sp.top.mana;
      }
    }
// Top

// Bottom
    const bottomManaElement = document.getElementById(`bottom${sp.key}Mana`);
    if (bottomManaElement) {
      const bottomManaValue = sp.bottom.mana;
      bottomManaElement.textContent = `${bottomManaValue}`;
      sp.bottom.manaEl = bottomManaElement
    }
    const bottomCooldownElement = document.getElementById(`bottom${sp.key}Cooldown`);
    if (bottomCooldownElement) {
      const bottomCooldownValue = sp.bottom.cooldown;
      bottomCooldownElement.textContent = `${bottomCooldownValue}`;
      bottomCooldownElement.style.opacity = '0'
      sp.bottom.cooldownEl = bottomCooldownElement
    }
    
    const bottomKeyElement = document.getElementById(`bottom${sp.key}Key`);
    if (bottomKeyElement) {
      sp.bottom.keyEl = bottomKeyElement
    }

    const bottomDescriptionContainer = document.getElementById(`bottom${sp.key}`);
    if (bottomDescriptionContainer) {
      const bottomNameElement = bottomDescriptionContainer.querySelector('.super-power__name');
      const bottomDescriptionTextElement = bottomDescriptionContainer.querySelector('.super-power__description-text');
      const bottomAdditionalElement1 = bottomDescriptionContainer.querySelector('#additional1');
      const bottomAdditionalElement2 = bottomDescriptionContainer.querySelector('#additional2');
      const bottomDurationElement = bottomDescriptionContainer.querySelector('.stats-duration__value');
      const bottomCooldownElement = bottomDescriptionContainer.querySelector('.stats-cooldown__value');
      const bottomManaElement = bottomDescriptionContainer.querySelector('.stats-mana__value');

      if (bottomNameElement) {
        bottomNameElement.textContent = sp.bottom.name;
      }
      if (bottomDescriptionTextElement) {
        bottomDescriptionTextElement.textContent = sp.bottom.description;
      }
      if (bottomAdditionalElement1 || bottomAdditionalElement2) {
        bottomAdditionalElement1.textContent = sp.bottom.additional1;
        bottomAdditionalElement2.textContent = sp.bottom.additional2;
      }
      if (bottomDurationElement) {

        const duration = sp.bottom.duration;
        if (duration > 99) {
          bottomDurationElement.textContent = (duration / 1000).toFixed(1) + 's';
        } else {
          bottomDurationElement.textContent = duration 
        }
      }
      if (bottomCooldownElement && sp.bottom.cooldown) {

        const cooldown = sp.bottom.cooldown;
        if (cooldown > 99) {
          bottomCooldownElement.textContent = (cooldown / 1000).toFixed(1) + 's';
        } else {
          bottomCooldownElement.textContent = cooldown + 's'
        }
      }
      const bottom6Mana = document.getElementById ('bottom6Mana')
      const statsManaValueBottom6 = document.querySelector ('.stats-mana__value--bottom6')
      if(sniperWeaponChosen){
        bottom6Mana.textContent = '65'
        statsManaValueBottom6.textContent = '65'
      } else {
        bottom6Mana.textContent = '35'
        statsManaValueBottom6.textContent = '35'
      }
      if (bottomManaElement) {
        bottomManaElement.textContent = sp.bottom.mana;
      }

      if(!automaticWeaponChosen) {
        spBottom4.style.backgroundColor = 'black'
        const bottom4Description = document.getElementById('bottom4Description')
        bottom4Description.textContent = 'Disabled. Availible only for automatic weapon. '
        bottom4Description.style.fontSize = '0.9rem'
      } 
      else {
        spBottom4.style.backgroundColor = ''
        bottom4Description.textContent = 'Unleashes an intense burst of bullets, overwhelming adversaries with a relentless onslaught.'
        bottom4Description.style.fontSize = ''
      }

      if(shotgunWeaponChosen) {
        spBottom2.style.backgroundColor = 'black'
        const bottom2Description = document.getElementById('bottom2Description')
        bottom2Description.textContent = 'Disabled. Is not availible for shotgun weapon. '
        bottom2Description.style.fontSize = '0.9rem'
      } 
      else {
        spBottom2.style.backgroundColor = ''
        bottom2Description.textContent = 'Every bullet that lands on the enemy launches 3 bullets from landed bullet position that can hit enemies behind creating more bullets...'
        bottom2Description.style.fontSize = ''
      }
      
    }
  // Bottom
  });

  sideSuperPowers.forEach((power, index) => {
    
    const sideDescriptionContainer = document.getElementById(`side${index + 1}`);

    if (sideDescriptionContainer) {
      // Select elements within the description container
      const sideNameElement = sideDescriptionContainer.querySelector('.super-power__name');
      const sideDescriptionTextElement = sideDescriptionContainer.querySelector('.super-power__description-text');
      const sideAdditionalContainer = sideDescriptionContainer.querySelector('.super-power__additional');
      const sideAdditionalElement1 = sideAdditionalContainer.querySelector('#additional1');
      const sideAdditionalElement2 = sideAdditionalContainer.querySelector('#additional2');
      const sideDurationElement = sideDescriptionContainer.querySelector('.stats-duration__value');
      const sideCooldownElement = sideDescriptionContainer.querySelector('.stats-cooldown__value');

      // Update elements with side power data
      if (sideNameElement) {
        sideNameElement.textContent = power.name;
      }
      if (sideDescriptionTextElement) {
        sideDescriptionTextElement.textContent = power.description || '';
      }
      if (sideAdditionalElement1) {
        sideAdditionalElement1.textContent = power.additional1 || '';
      }
      if (sideAdditionalElement2) {
        sideAdditionalElement2.textContent = power.additional2 || '';
      }
      if (sideDurationElement) {
        sideDurationElement.textContent = power.duration 

        const duration = power.duration;
        if (duration > 99) {
          sideDurationElement.textContent = (duration / 1000).toFixed(1) + 's';
        } else {
          sideDurationElement.textContent = duration 
        }
      }
      if (sideCooldownElement) {
        const cooldown = power.cooldown;
        if (cooldown > 99) {
          sideCooldownElement.textContent = (cooldown / 1000).toFixed(1) + 's' 
        } else {
          sideCooldownElement.textContent = cooldown
          if(sideCooldownElement.textContent === undefined) {
            sideCooldownElement.textContent = ''
          }
        }
        
      }
    }
    
  });

}

function getSuperPowerKey(event) {
  // SuperPower keys do not respond if in Weapon Wheel.
  if(inWeaponWheel) return
  // Don't execute further if key is not a number.
  superPowerKey = parseInt(event.key);
  if (isNaN(superPowerKey) ) {
    return;
  }
  superPowerKey = event.key

  const selectedSuperPower = superPowers.find(sp => sp.key === superPowerKey);
  
  switch (selectedSuperPower.key) {
    case '1':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        let firstBullet = bulletArray[0]
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
        if (!firstBullet) return
          if (mana >= spBottom.mana) {
            mana -= spBottom.mana;
            superPowerArray.push(spBottom);
          }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana) {
          mana -= spTop.mana
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '2':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (shotgunWeaponChosen) return
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
          if (mana >= spBottom.mana) {
            mana -= spBottom.mana;
            superPowerArray.push(spBottom);
          }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana ) {
          mana -= spTop.mana
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '3':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
        if (mana >= spBottom.mana) {
          mana -= spBottom.mana;
          superPowerArray.push(spBottom)
        }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana) {
          mana -= spTop.mana
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '4':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (!automaticWeapon) return // Blast is availible only for automatic weapon.
        if (spBottom.currentCooldown !== spBottom.cooldown) return  
        if (spBottom.isExecuting === true) return;
        if (mana >= spBottom.mana &&
             automaticWeaponChosen) {
              mana -= spBottom.mana;
            superPowerArray.push(spBottom);
          }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana) {
          mana -= spTop.mana
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '5':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
          if (mana >= spBottom.mana) {
            mana -= spBottom.mana;
            superPowerArray.push(spBottom);
        }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana) {
          mana -= spTop.mana;
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '6':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
        if(sniperWeaponChosen) {
          spBottom.mana = 65
          if(mana < spBottom.mana) return
        }
          if (mana >= spBottom.mana) {
            mana -= spBottom.mana;
            superPowerArray.push(spBottom);
        }else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana ) {
          mana -= spTop.mana;
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      break;
    case '7':
      if (!altPressed) {
        const spBottom = selectedSuperPower.bottom
        if (spBottom.currentCooldown !== spBottom.cooldown) return
        if (spBottom.isExecuting === true) return;
          if (mana >= spBottom.mana) {
            mana -= spBottom.mana;
            superPowerArray.push(spBottom);
        } else {noManaNotificationDisplay()}
      } else {
        const spTop = selectedSuperPower.top
        if (checkpointArray.length < 10) return
        if (spTop.currentCooldown !== spTop.cooldown) return
        if(spTop.isExecuting === true) return
        if (mana >= spTop.mana ) {
          mana -= spTop.mana;
          superPowerArray.push(spTop);
        }else {noManaNotificationDisplay()}
      }
      
      break;
  }

  function noManaNotificationDisplay() {
      noManaNotification = true;
      explamationMark.style.display = 'block'
      manaTimeoutId = setTimeout(() => {
        noManaNotification = false;
        explamationMark.style.display = 'none'
      }, 400);
    
  }

  
  superPowerArray.forEach(activateSuperPower);
}
document.addEventListener('keydown', getSuperPowerKey);

// Activate Super Power 1
function activateSuperPower(superPower) {

  if (superPowerArray.includes(superPower)) {
    if(superPower.isExecuting) return
    superPower.isExecuting = true
    superPower.place.style.opacity = '0.5';
    switch (superPower.name) {
      case 'Bullet Teleport':
        bulletTeleportMode = true;
            const index = superPowerArray.indexOf(superPower);
            if (index !== -1) {              
              setTimeout(() => {
                superPower.place.style.opacity = '1'
                setCooldown(superPower)
              }, 300);
              superPowerArray.splice(index, 1);
            }
          break;

      case 'Heal':
      let healCounter = 0;
        
        let healInterval = setInterval(() => {
          if (health < 50) {
            health += 5;
          } else if (health < 70) {
            health += 3;
          } else if (health < 90) {
            health += 1.5;
          } else {
            health += 0.75;
          }
          if (healCounter >= superPower.duration*2 || health >= 100) {
            clearInterval(healInterval);
            removeFromArray()
            setCooldown(superPower)
          }
          healCounter++;
        }, 500);
        break;
      case 'shot Shot SHOT':
          shotShotSHOT = true;
          shotShotSHOTSuperPower()
          setTimeout(() => {
            shotShotSHOT = false;
            removeFromArray()
            setCooldown(superPower)
          }, superPower.duration);
      break;
      case 'Vampirism':
        vampirismMode = true;
        setTimeout(() => {
          vampirismMode = false;
          removeFromArray()
          setCooldown(superPower)
        }, superPower.duration);
        break;

      case 'Rage':
        rageMode = true
        setTimeout(() => {
          rageMode = false
          removeFromArray()
          setCooldown(superPower)
        }, superPower.duration);
        break;

      case 'Matrix':
        matrixMode = true;
        matrixAnimationOpacity = 0
        matrixModeCounter = superPower.duration
        let matrixInterval = setInterval(() => {
          matrixModeCounter -= 500
          if(matrixModeCounter <= 0 ){
            matrixMode = false;
            removeFromArray()
            setCooldown(superPower)
            clearInterval(matrixInterval)
          }
        }, 500);
        break;

      case 'Blast':
        blastMode = true;
        setTimeout(() => {
          blastMode = false;
          removeFromArray()
            setCooldown(superPower)
        }, superPower.duration);
        break;

      case 'Freeze':
        freezeMode = true
        setTimeout(() => {
          freezeMode = false
          removeFromArray()
          setCooldown(superPower)
        }, superPower.duration);
        break;

      case 'Power Shot':
        powerShotCount = 0;
        powerShotMode = true;
        powerShotAmount = superPower.amount;
        if (powerShotCount === 0) {
          shieldMode = false;
          removeFromArray()
            setCooldown(superPower)
        
        }
        break;

      case 'Fear':
        fearMode = true
        setTimeout(() => {
          fearMode = false
          removeFromArray()
          setCooldown(superPower)
        }, superPower.duration);
        break;

        case 'Thunder':
          thunderMode = true
          thunderSuperPower();
          setTimeout(() => {
            gameOver = true
            setCooldown(superPower)
            thunderMode = false
          }, 500);
            superPowerArray.splice(superPowerArray.indexOf(superPower) , 1);
          break;
        case 'Illusion':
          illusionMode = true
          createEnemyIllusion()
            setInterval(() => {
              enemyIllusionShoot()
            }, 1000);
          setTimeout(() => {
            removeFromArray()
            setCooldown(superPower)
            illusionMode = false
            enemyIllusionArray = []
          }, superPower.duration)
          break;
          case 'Rewind Time':
          rewindTimeAnimation = true
          setTimeout(() => {
            bulletTeleportAnimation()
            rewindTimeMode = true
              setTimeout(() => {
                rewindTimeMode = false
                rewindTimeAnimation = false
                removeFromArray()
                setCooldown(superPower)
              }, superPower.duration);
          }, 500);
            break;
      case 'Shield':
        shieldMode = true;
        setTimeout(() => {
          shieldMode = false;
          removeFromArray()
            setCooldown(superPower)
        }, superPower.duration);
        break;

    }
    
    // If any superpower pressed while in slow motion stop slow motion and close music player.
    if (musicPlayerOpened) {
      toggleMusicWindow();
    }

    function setCooldown(superPower) {
      // make tined animation
      let tint;
      spAll.forEach((sp) => {
        if(sp === superPower.place ){
          tint = sp.querySelector('.tint');
        }
      });
      superPower.cooldownEl.style.opacity = '1';
      superPower.cooldownEl.style.textShadow = '1px 1px 2px rgba(255, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.8)';
      superPower.cooldownEl.textContent = superPower.currentCooldown;
      superPower.cooldownEl.style.transition = '0.3s';
      superPower.manaEl.style.transition = '0.3s';
      superPower.keyEl.style.transition = '0.3s';
      superPower.manaEl.style.opacity = '0';
      superPower.keyEl.style.opacity = '0';
      tint.style.opacity ='1'
      // Clear any existing interval associated with the current superpower
      clearInterval(superPower.interval);
    
      superPower.interval = setInterval(() => {
        superPower.currentCooldown--;
        superPower.cooldownEl.textContent = superPower.currentCooldown;
        

        if (superPower.currentCooldown < 10) {
          superPower.cooldownEl.style.left = '10px';
        }
    
        if (superPower.currentCooldown === 1) {
          superPower.manaEl.style.opacity = '1';
          superPower.keyEl.style.opacity = '1';
          superPower.cooldownEl.style.opacity = '0';
          superPower.cooldownEl.style.left = '';
        }
    
        if (superPower.currentCooldown <= 0) {
          clearInterval(superPower.interval);
          superPower.isExecuting = false;
          superPower.currentCooldown = superPower.cooldown;
          superPower.cooldownEl.style.left = '5px';
          tint.style.opacity = '0'
        }
        // Animation timer
        tint.style.backgroundColor = `rgba(0, 0, 0, ${superPower.currentCooldown / superPower.cooldown})`;
      }, 1000);
    }
    function removeFromArray() {
      superPower.place.style.opacity = '1';
      const index = superPowerArray.indexOf(superPower);
      if (index !== -1) {
        superPowerArray.splice(index, 1);
      }

    }
  }
  
}