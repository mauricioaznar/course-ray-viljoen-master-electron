let items = document.getElementById('items')

//track items in storage


//persist storage




module.exports = {
    addItem: function (item, isNew = false) {
        let itemNode = document.createElement('div')

        itemNode.setAttribute('class', 'read-item')

        itemNode.innerHTML = `<img  src="${item.screenshot}" alt="not found"/><h2>${item.title}</h2>`

        items.appendChild(itemNode)

        if (isNew) {
            this.storage.push(item)

            this.save()
        }
    },
    storage: JSON.parse(localStorage.getItem('readit-items')) || [],
    save: function () {
        localStorage.setItem('readit-items', JSON.stringify(this.storage))
    },
}

module.exports.storage.forEach(item => {
    module.exports.addItem(item, false)
})