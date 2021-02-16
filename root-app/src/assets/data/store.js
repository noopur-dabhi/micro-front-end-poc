window.store = {};

window.store.character = {
    name: '',
    image: '',
    description: '',
    setCharacter(character) {
        window.store.character.name = character.name;
        window.store.character.image = character.image;
        window.store.character.description = character.description;
        window.dispatchEvent(new Event('characterChanged'));
    }
};

console.log('*****window', window);
