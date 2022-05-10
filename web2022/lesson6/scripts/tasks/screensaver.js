const Screensaver = (() => {
    const SCREENSAVER_ID = 'screensaver';
    
    class ScreensaverContainer {
        constructor() {
            this._isOpened = false;
        }

        _showScreensaver = () => {
            const screensaver = document.getElementById(SCREENSAVER_ID);

            if (this._isOpened) {
                screensaver.style.visibility = 'hidden';
                screensaver.style.opacity = '0';
            } else {
                screensaver.style.visibility = 'visible';
                screensaver.style.opacity = '1';
            }

            this._isOpened = !this._isOpened;
        }

    
        create = () => {
            const container = document.createElement('div');

            const button = document.createElement('button');
            button.className = 'button';
            button.innerText = 'Показать';
            button.onclick = this._showScreensaver;

            const screensaver = document.createElement('div');
            screensaver.id = SCREENSAVER_ID;
            screensaver.style.transition = 'opacity 0.7s ease-out'
            screensaver.style.background = 'linear-gradient(-45deg, #fb7ba2, #fce043)';
            screensaver.style.animation = 'gradient 15s ease infinite';
            screensaver.style.backgroundSize = '400% 400%';
            screensaver.style.visibility = 'hidden';
            screensaver.style.position = 'fixed';
            screensaver.style.inset = '0';
            screensaver.style.opacity = '0';
            screensaver.style.display = 'flex';
            screensaver.style.justifyContent = 'center';
            screensaver.style.alignItems = 'center';

            screensaver.onclick = this._showScreensaver;

            const infoBlock = document.createElement('div');
            infoBlock.style.display = 'flex';
            infoBlock.style.flexDirection = 'column';
            infoBlock.style.alignItems = 'center';
            infoBlock.style.color = 'white';
            infoBlock.style.fontSize = '24px';
            infoBlock.style.fontWeight = '700';

            const userBlock = document.createElement('div');
            userBlock.innerText = sessionStorage.getItem('login');

            const dateBlock = document.createElement('div');
            dateBlock.innerText = new Date().toLocaleDateString();
    
            infoBlock.appendChild(userBlock);
            infoBlock.appendChild(dateBlock);

            screensaver.appendChild(infoBlock);
            container.appendChild(button);
            container.appendChild(screensaver);


            return container;
        }
    }

    return ScreensaverContainer;
})();
