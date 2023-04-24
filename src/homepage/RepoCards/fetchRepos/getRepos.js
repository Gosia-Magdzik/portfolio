//async f. asynchroniczna => return promise
//fetch pobieranie
// Funkcja pobiera z github repositories

export const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/Gosia-Magdzik/repos");

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};
