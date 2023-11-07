<template>
    <div class="inner-shadow">
        <ul>
            <li v-for="link in navbarLinks" :key="link">
                <RouterLink :to="link.to" :class="($route.path == link.to) ? 'active' : ''">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "User Navbar",
    data() {
        return {
            navbarLinks: [
                {to: '/profile', name: 'Мой профиль'},
                {to: '/feed', name: 'Лента'},
                {to: '/messenger', name: 'Сообщения'},
                {to: '/friends', name: 'Друзья'},
                {to: '/communities', name: 'Сообщества'},
                {to: '/saved', name: 'Сохраненное'},
                {to: '/settings', name: 'Настройки'},
            ]
        }
    }
}
</script>

<style scoped>
.inner-shadow {
    box-shadow: inset 0 0 16px 0 rgba(0,0,0,.05);
    border-radius: 16px;
    background-color: #fff;
    padding:16px;
    position: sticky;
}
a {
    text-decoration: none;
    color:#000;
    padding:8px;
    display: inline-block;
    font-weight: 500;
    color:#777;
    font-family: 'Montserrat', sans-serif;
}
a.active {
    color: #000;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
li {

}
</style>