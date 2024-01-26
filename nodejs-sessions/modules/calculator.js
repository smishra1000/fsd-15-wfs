exports.sum = function(a,b){
    return a+b
}

exports.subtract = function(a,b){
    return a-b
}

exports.emailVerification = function(email){
    if(email.includes('@')){
        return true;
    }else{
        return false;
    }
}

// nodejs v8 engine, libuv library