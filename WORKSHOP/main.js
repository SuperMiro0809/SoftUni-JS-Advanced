(function game() {
    const gameStartEl = document.getElementById('game-start');
    const gameScoreEl = document.getElementById('game-score');
    const gameAreaEl = document.getElementById('game-area');
    const gameOverEl = document.getElementById('game-over');
    const wizardEl = document.getElementById('wizard');
    const pressedKeys = new Set();

    const config = {
        speed: 2,
        wizardMovingMultiplier: 4
    }
    const utils = {
        pxToNumber (val) {
            return val.replace('px', '');
        },
        NumberToPx (val) {
            return `${val}px`
        }
    }
    const wizardCordinates = {
        wizard: wizardEl,
        set x(newX) {
            if(newX < 0) {
                newX = gameAreaEl.offsetLeft;
            }else if(wizardCordinates.x - wizardEl.offsetWidth >= gameAreaEl.offsetWidth) {
            
            }
            this.wizard.style.left = utils.NumberToPx(newX)
        },
        get x() {
            return utils.pxToNumber(this.wizard.style.left);
        },
        set y(newY) {
            if(newY < 0) {
                newY = gameAreaEl.offsetLeft;
            }
            this.wizard.style.top = utils.NumberToPx(newY)
        },
        get y() {
            return utils.pxToNumber(this.wizard.style.top);
        }
    }
    const gameplay = {
        loopId: null,
    }

    function init() {
        wizardCordinates.x = 200;
        wizardCordinates.y = 200;
        // wizard.style.left = '200px';  //x
        // wizard.style.top = '200px';   //y
        wizardEl.classList.remove('hidden');

        gameLoop()
    }

    const pressedKeyActionMap = {
        ArrowUp() {
            wizardCordinates.y -=  config.speed * wizardMovingMultiplier;
        },
        ArrowDown() {
            wizardCordinates.y +=  config.speed * wizardMovingMultiplier;
        },
        ArrowLeft() {
            wizardCordinates.y -=  config.speed * wizardMovingMultiplier;
        },
        ArrowRight() {
            wizardCordinates.y +=  config.speed * wizardMovingMultiplier;
        },
        Space() {
            wizardEl.classList.add('wizard-fire');
        }
    }

    function processPressedKeys() {
        pressedKeys.forEach(pressedKey => {
            const handler = pressedKeyActionMap[pressedKeys];
        });
    }

    function applyGravity() {
        const isInAir = wizardCordinates.y !== gameAreaEl.offsetHeight;
        if(isInAir) {

        }
    }

    function gameLoop() {
        gameplay.loopId = window.requestAnimationFrame(gameLoop);
    }

    gameStartEl.addEventListener('click', function gameStartHandler() {
        gameStartEl.classList.add('hidden');
        init();
    })

    document.addEventListener('keyup', function keyupHandler(e) {
        pressedKeys.remove(e.code);

    })

    document.addEventListener('keydown', function keydownHandler(e) {
        pressedKeys.delete(e.code);
    })

}());