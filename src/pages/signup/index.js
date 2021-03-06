const signup = (function(){

    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("log in", false, "login");
    const $signupButton= flatButton.render("sign up", true, "signup");
    
    const $logoGame    = logoGame.render();
    const $titleGame   = titleGame.render("welcome");
    const $logoWrapper = logoWrapper.render($logoGame, $titleGame);
    const $signupForm  = signupForm.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $signupForm);

});