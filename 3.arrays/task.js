function compareArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false; // или throw new Error("Аргументы должны быть массивами")
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
    
    return arr1.every((element, index) => element === arr2[index]);
}
function getUsersNamesInAgeRange(users, gender) {
    // 1. Проверка на пустой массив
    if (users.length === 0) {
        return 0;
    }

    // 2. Фильтрация пользователей по полу
    const filteredUsers = users.filter(user => user.gender === gender);

    // 3. Если подходящих пользователей нет, возвращаем 0
    if (filteredUsers.length === 0) {
        return 0;
    }

    // 4. Вычисление среднего возраста через reduce
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return totalAge / filteredUsers.length;
}
