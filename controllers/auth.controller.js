function AuthController(){
    function IsAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }
    return {IsAuthorized};
}

module.exports = AuthController();