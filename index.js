function NamedOne(first, last){
    this.firstName = first;
    this.lastName = last;
}

NamedOne.prototype = {
    get fullName(){
        return ${this.firstName} ${this.lastName};
    },
    set fullName(fn){
        var name = fn.split(' ');
        if(name.length == 2){
            this.firstName = name[0];
            this.lastName  = name[1];
        }
    }
}
