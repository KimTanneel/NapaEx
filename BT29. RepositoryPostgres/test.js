function logger(){
    let a ="helelo"
    function logger2(){
        let a = "Helloo"
        function logger3(){
            console.log(a)
        }
        logger3()
    }
    logger2()
}
logger();