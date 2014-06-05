if (!Array.prototype.unset) {
    Array.prototype.unset = function (value) {
        if (this.indexOf(value) !== -1) {
            this.splice(this.indexOf(value), 1);
        }
    };
}

if (!Array.prototype.clear){
    Array.prototype.clear = function(){
        this.length = 0;
    }
}