document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Email dan Password wajib diisi!");
            return;
        }

        try {
            const result = await API.post("/login", {
                email,
                password
            });

            if (!result.success) {
                alert(result.message);
                return;
            }

            saveToken(result.token);
            saveUser(result.user);

            redirectByRole(result.user.role);

        } catch (err) {
            console.error(err);
            alert("Server Error");
        }
    });
});
