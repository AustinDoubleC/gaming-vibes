exports.handler = async (event, context)=>{
    const guides = [
        {title:"Beat all Zelda Bosses like a boss",author:"mario"},
        {title:"Mario Kart Shortcuts you never knew", author:"Luigi"},
        {title:"Ultimate Street Fighter Guide", author:"Chun-Li"}
    ]
    if (context.clientContext.user){
    return{
        statusCode:200,
        body:JSON.stringify(guides)
    }
    }
    /*return{
        statusCode:401,
        body:JSON.stringify({mssg:"ah, ah you must be logged in to see this"})
    }*/
}