(function getStormWatcher() {
    let counter = 0;

    class Record {
        constructor( temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = counter;
            counter++;
        }

        toString() {
            let result = "";
            result += `Reading ID: ${this.id}` + '\n';
            result += `Temperature: ${this.temperature}*C` + '\n';
            result += `Relative Humidity: ${this.humidity}%` + '\n';
            result += `Pressure: ${this.pressure}hpa` + '\n';
            result += `Wind Speed: ${this.windSpeed}m/s` + '\n';

            let stormyTemperature = this.temperature < 20;
            let stormyPressure = this.pressure < 700 || this.pressure > 900;
            let stormyWindSpeed = this.windSpeed > 25;

            if(stormyTemperature && stormyPressure && stormyWindSpeed) {
                result+= 'Weather: Stormy';
            }
            else {
                result+= 'Weather: Not stormy';
            }

            return result;
        }
    }

    return Record;
})();