String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
};

String.prototype.between = function (left, right){
    var beginIndex = 0;
    var endIndex = 0;
    var l = this.indexOf(left);
    if (l != -1) {
        beginIndex = l + left.length;
    }
    else{
        return '';
    }
    var r = this.indexOf(right, l);
    if (r != -1) {
        endIndex = r;
    }
    else {
        return '';
    }
    //alert(endIndex + ":" + beginIndex);
    var len = endIndex - beginIndex;
    if (len <= 0) {
        return '';
    }
    else {
        return this.substr(beginIndex, len);
    }
};