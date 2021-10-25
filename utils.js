export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function generateUser(formData){
    return {
        completed:{},
        gold: 0,
        hp: 15,
        name: formData.get('name'),
        class: formData.get('class')
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}
