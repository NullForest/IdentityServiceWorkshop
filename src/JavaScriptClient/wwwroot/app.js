/// <reference path="oidc-client.js" />

function log() {
  document.getElementById("results").innerText = "";

  Array.prototype.forEach.call(arguments, function (msg) {
    if (msg instanceof Error) {
      msg = "Error: " + msg.message;
    } else if (typeof msg !== "string") {
      msg = JSON.stringify(msg, null, 2);
    }
    document.getElementById("results").innerText += msg + "\r\n";
  });
}

document.getElementById("login").addEventListener("click", login, false);
document.getElementById("api").addEventListener("click", api, false);
document.getElementById("logout").addEventListener("click", logout, false);

var config = {
  authority: "",
  client_id: "",
  redirect_uri: "",
  response_type: "",
  scope: "",
  post_logout_redirect_uri: "",
};
var mgr = new Oidc.UserManager(config);

mgr.events.addUserSignedOut(function () {
  log("User signed out of IdentityServer");
});

mgr.getUser().then(function (user) {
  if (user) {
    log("User logged in", user.profile);
  } else {
    log("User not logged in");
  }
});

function login() {
  mgr.signinRedirect();
}

function api() {
  mgr.getUser().then(function (user) {
  });
}

function logout() {
  mgr.signoutRedirect();
}
