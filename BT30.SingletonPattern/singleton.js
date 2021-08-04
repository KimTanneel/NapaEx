
const singleton = function() {
    let instance
    function initInstance(){
        instance = "getInit Instance"
        return instance
    }
    function getInstance(){
        if(!instance){
            console.log("Cant see Instance...")
            return initInstance()
        }
        else{
            console.log("instance Already have")
            return instance
        }
    }
    return getInstance
}
    

const mySingleton = singleton()
console.log(mySingleton())
console.log(mySingleton())