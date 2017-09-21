let template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

getExtend(template)

function getExtend(template) {
    let newObj = {
        extend: function (template) {

            for (prop in template) {
                if (typeof (template[prop]) === 'function') {
                    Object.getPrototypeOf(newObject)[prop] = template[prop];
                }

                else {
                    newObject[prop] = template[prop];
                }
            }
        }
    };

    return newObj;
}
