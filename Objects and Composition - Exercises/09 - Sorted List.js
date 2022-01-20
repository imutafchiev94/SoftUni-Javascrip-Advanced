function createSortedList() {
    let list = {
        nums: []
    };

    list.add = (num) => {
        let listLength = list.nums.length;
        if (listLength > 0) {
            for (let i = 0; i < listLength; i++) {
                if (list['nums'][i] > num) {
                    list['nums'].splice(i, 0, num);
                    list.size++;
                    break;
                }
            }
            if (listLength == list.nums.length) {
                list.nums.push(num);
                list.size++;
            }
        } else {
            list.nums.push(num);
            list.size++;
        }
    }

    list.remove = (index) => {
        if (index < list.nums.length && index > -1) {
            list.nums.splice(index, 1);
            list.size--;
        }
    }

    list.get = (index) => {
        if (index < list.nums.length && index > -1) {
            return list['nums'][index];
        }
    }

    list.size = list.nums.length;

    return list;
}