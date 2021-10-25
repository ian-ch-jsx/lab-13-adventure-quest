
export function generateUser(formData){
    return {
        completed:{},
        gold: 0,
        hp: 15,
        name: formData.get('name'),
        class: formData.get('class')
    };
}
