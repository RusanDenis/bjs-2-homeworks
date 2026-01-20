function compareArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
    
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
    }
   
    const filteredUsers = users.filter(user => user.gender === gender);    
    if (filteredUsers.length === 0) {
        return 0;
    }
    
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return totalAge / filteredUsers.length;
}
