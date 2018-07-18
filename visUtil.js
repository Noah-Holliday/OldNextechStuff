Object.prototype.sortBy = function(key) {
    this.sort(function(a, b) {
        return a[key] - b[key];
    });
    return this;
}

Object.prototype.sortStringsBy = function(key) {
    this.sort(function(a, b) {
        return a[key].localeCompare(b[key]);
    });
    return this;
}

Object.prototype.filterBy = function (key, value) {
    var out = this.filter(function(a) {
        if (a[key] === value) return true;
        else return false;
    });
    return out;
}

Object.prototype.searchBy = function (key, value) {
    var out = this.filter(function(a) {
        if (a[key].includes(value)) return true;
        else return false;
    });
    return out;
}

Object.prototype.stats = function(key) {
    arr = this.map(function(a) {
        return Number(a[key]);
    });
    arr.sort();
    console.log(arr);
    if (arr.length % 2 === 0) mode = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    else mode = arr[floor(arr.length / 2)];
    var mn = min(arr);
    var mx = max(arr);
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mn) mn = arr[i];
        if (arr[i] > mx) mx = arr[i];
        sum = sum + arr[i];
    }
    var mean = sum / arr.length;
    return {
        n: arr.length,
        mean: mean,
        mode: mode,
        min: mn,
        max: mx
    };
}