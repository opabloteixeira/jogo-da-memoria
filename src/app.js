(function () {
    const {hash} = window.location;
    const paths = [];
    
    paths[""] = login;
    paths["#/signup"] = signup;


    console.log(paths);


    paths[hash]();

})();