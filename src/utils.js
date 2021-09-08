export const api = async () => {

    return await fetch(`https://randomuser.me/api/?results=${20}`)
        .then(res => res.json())
        .then(
            (data) => data)
 
}