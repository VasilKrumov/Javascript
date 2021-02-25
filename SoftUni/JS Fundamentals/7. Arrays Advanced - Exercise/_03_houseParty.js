function houseParty(arr) {
    const list = []

    read(arr)

    printList(list)

    function read(arr) {
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i] // name is going || name is not going
            str = str.split(' ')
            const name = str[0]
            const status = str[2] // going || not

            switch (status) {
                case 'going!':
                    addToTheList(name)
                    break
                case 'not':
                    removeFromTheList(name)
                    break
            }
        }
    }

    function addToTheList(name) {
        if (list.includes(name)) {
            console.log(`${name} is already in the list!`)
        } else {
            list.push(name)
        }
    }

    function removeFromTheList(name) {
        if (list.includes(name)) {
            delete list[list.indexOf(name)]
        } else {
            console.log(`${name} is not in the list!`)
        }
    }

    function printList(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== undefined) {
                console.log(list[i])
            }
        }
    }
}
