function saveToken(token) {
    localStorage.setItem("token", token);
}

function getToken() {
    return localStorage.getItem("token");
}

function removeToken() {
    localStorage.removeItem("token");
}

function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function removeUser() {
    localStorage.removeItem("user");
}

function isLoggedIn() {
    return getToken() !== null;
}

function logout() {
    removeToken();
    removeUser();
    window.location.href = "../index.html";
}

function redirectByRole(role) {
    switch (role) {
        case "admin":
            window.location.href = "../admin/dashboard.html";
            break;

        case "borrower":
            window.location.href = "../user/dashboardUser.html";
            break;
        case "investor":
            window.location.href = "../investor/dashboard.html";
            break;

        default:
            window.location.href = "../index.html";
    }
}
