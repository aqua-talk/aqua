module.exports = {
    isOwner:function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
       // console.log(request.user)->범인
        var authStatusUI = `
        <a href="/auth/login">login</a> | 
        <a href="/auth/register">Register</a> |
        <a href="/auth/google">Loign with Google</a>`
        

        if (this.isOwner(request, response)) {
            authStatusUI = `${request.user.displayName} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}