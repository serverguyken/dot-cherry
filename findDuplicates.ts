function findDuplicates(arr: Array<any>): any[] {
    //find duplicates in an array
    let map: any = {};
    let duplicates = [];
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            map[arr[i]] = true;
        }
    }
    return duplicates;
};

export default findDuplicates