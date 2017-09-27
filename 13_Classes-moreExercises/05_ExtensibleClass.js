(function () {
    let id = 0;

    return class Extensible {

        get id() {
            return id++;
        }

        extend(template) {
            let allProps = Array.from(Object.keys(template));

            for (let prop of allProps) {
                if (typeof template[prop] === "function") {
                    Object.getPrototypeOf(this)[prop] = template[prop]
                }

                this[prop] = template[prop];
            }

            return this;
        }
    }
})()