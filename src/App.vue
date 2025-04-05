<script setup></script>

<template>
    <nav class="nav">
        <RouterLink class="links" to="/">Home</RouterLink>
        <RouterLink class="links" to="/register">Register</RouterLink>
        <RouterLink class="links" to="/reset-password"
            >Reset Password</RouterLink
        >
    </nav>

    <div class="body">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.nav {
    background-color: aqua;
    padding: 5px;
    margin-bottom: 10px;
}

.links {
    margin-left: 5px;
    margin-right: 5px;
    text-transform: uppercase;
    text-decoration: none;
}

.body {
    padding: 15px;
}
</style>
