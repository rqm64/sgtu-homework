(function() {
    const DEVICE_OPTIONS = [
        { label: 'web', value: 'web' },
        { label: 'ipad', value: 'ipad' },
        { label: 'iphone', value: 'iphone' },
    ];

    class DeviceContainer {
        constructor(id) {
            this.id = id;
        }

        setDevice(value) {
            const element = document.getElementById(this.id);
            element.className = value;
        }
    }

    class App {
        constructor() {
            this.deviceContainer = new DeviceContainer('device-container');
        }

        handleChangeTask = (value) => {
            this.deviceContainer.setDevice(value);
        };

        render() {
            new AppComponents.Select('device-select', DEVICE_OPTIONS, this.handleChangeTask).render();
            this.deviceContainer.setDevice('web');
        }
    }

    new App().render();

})();


