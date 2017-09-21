function sortedList() {
    let obj = (() => {
        let arr = [];

        let add = function (element) {
            arr.push(element);
            sortAscending();
            return arr;
        }

        let remove = function (index) {
            if (index < this.length) {
                arr.splice(index, 1);
            }

            return arr;
        }

        let get = function (index) {
            if (index < arr.length) {
                return arr[index];
            }
        }

        let size = function (index) {
            return arr.length;
        }

        let sortAscending = function () {
            return arr.sort((a, b) => a - b);
        }

        return { add, remove, get, size }
    })()

    return obj;
}
