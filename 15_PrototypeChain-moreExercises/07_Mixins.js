function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        }

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return (this.manufacturer === this.keyboard.manufacturer && this.manufacturer  === this.monitor.manufacturer);
        }

        classToExtend.prototype.isClassy = function () {
            let hasClassyBattery = this.battery.expectedLife >= 3;
            let hasClassyColor = (this.color === 'Silver' || this.color === 'Black');
            let hasClassyWeight = this.weight < 3;

            return (hasClassyBattery && hasClassyColor && hasClassyWeight);
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

