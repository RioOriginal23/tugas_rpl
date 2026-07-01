const API = {
    BASE_URL: "http://localhost:3000/api",

    async request(endpoint, method = "GET", data = null) {

        const token = localStorage.getItem("token");

        const options = {
            method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${this.BASE_URL}${endpoint}`, options);

        return await response.json();
    },

    get(endpoint) {
        return this.request(endpoint);
    },

    post(endpoint, data) {
        return this.request(endpoint, "POST", data);
    },

    put(endpoint, data) {
        return this.request(endpoint, "PUT", data);
    },

    delete(endpoint) {
        return this.request(endpoint, "DELETE");
    }
    
};
