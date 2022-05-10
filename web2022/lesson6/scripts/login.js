const _login = (() => {
    const STORAGE_KEY = 'login';

    return {
        getUser: () => sessionStorage.getItem(STORAGE_KEY),
        setUser: (userName) => sessionStorage.setItem(STORAGE_KEY, userName),
    }
})();

const UserLogin = (() => {
    const LOGIN_PAGE_ID = 'login-page';

    class UserLoginBlock {
        render = () => {
            const user = _login.getUser();

            const header = document.getElementsByTagName('header');
            header[0].appendChild(document.createTextNode(`Добро пожаловать, ${user}`));
        }
    }

    class LoginPage {
        constructor(id) {
            this._containerId = id;
            this._userName = '';
        }

        _handleLogin = () => {
            if (this._userName) {
                _login.setUser(this._userName);
                document.getElementById(LOGIN_PAGE_ID).remove();
                new UserLoginBlock().render();
            }
        }

        _handleChangeUserName = (event) => {
            this._userName = event.target.value;
        }

        render = () => {
            const container = document.createElement('div');
            container.style.zIndex = 1;
            container.id = LOGIN_PAGE_ID;

            container.style.position = 'absolute';
            container.style.inset = '0';
            container.style.background = 'white';
            container.addEventListener('input', this._handleChangeUserName);

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введите имя';
            input.className = 'full-width';

            const button = document.createElement('button');
            button.innerText = 'Войти';
            button.className = 'button';
            button.onclick = this._handleLogin;

            container.appendChild(_factory.createRow(
                {size: 4, element: input},
                {size: 6, element: button},
            ));

            document.getElementById(this._containerId).appendChild(container);
        }
    }

    class LoginContainer {
        constructor(id) {
            this._id = id;
        }

        render = () => {
            if (_login.getUser()) {
                new UserLoginBlock().render();
            } else {
                new LoginPage(this._id).render();
            }
        }

    }

    return LoginContainer;
})();

