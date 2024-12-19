const shoppingList = [
    { name: 'Star Platinum', image: 'star-platinum.jpeg' },
    { name: 'Silver Chariot', image: 'silver-chariot.jpg' },
    { name: "Magician's Red", image: "magician's-red.jpg" },
    { name: 'Hierophant Green', image: 'hierophant-green.jpg' }
];

function loadShoppingList() {
    const listElement = document.getElementById('shopping-list');
    listElement.innerHTML = ''; // Limpa a lista

    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}">${item.name}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove';
        removeButton.onclick = () => {
            shoppingList.splice(index, 1); // Remove o item
            loadShoppingList(); // Atualiza a lista
        };

        li.appendChild(removeButton);
        listElement.appendChild(li);
    });
}

document.getElementById('add-item-form').onsubmit = function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const itemName = document.getElementById('item-name').value;
    const itemImage = document.getElementById('item-image').value;

    // Adiciona o novo item à lista
    shoppingList.push({ name: itemName, image: itemImage });

    // Limpa os campos do formulário
    document.getElementById('item-name').value = '';
    document.getElementById('item-image').value = '';

    loadShoppingList(); // Atualiza a lista
};

// Carrega a lista ao iniciar
loadShoppingList();
