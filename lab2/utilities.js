module.exports = {
    deepEquality(obj1, obj2){
        if(typeof obj1 !== "object" || typeof obj2 !== "object")
        {
            throw "Unexpect input type!";
        }
        let flag = true;
        for (let i in obj1)
        {
            if (obj1[i] !== obj2[i])
            {
                flag = false;
                break;
            }
        }
        return flag;
    },
    uniqueElements(arr){
        let isArr = Object.prototype.toString.call(arr) == '[object Array]';
        if(!isArr)
        {
            throw "Unexpect input type!";
        }
        let map = new Map();
        let count = 0;
        for (let i = 0; i < arr.length; i++)
        {
            if (!map.has(arr[i]))
            {
                count++;
                map.set(arr[i], count);
            }
        }
        return map.size;
    },
    countOfEachCharacterInString(str){
        if(typeof str !== "string")
        {
            throw "Unexpect input type!";
        }
        let map = new Map();
        for (let i = 0; i < str.length; i++)
        {
            if (!map.has(str[i]))
            {
                map.set(str[i], 1);
            }
            else
            {
                let count = map.get(str[i]) + 1;
                map.delete(str[i]);
                map.set(str[i], count);
            }
        }
        return map;
    }

}