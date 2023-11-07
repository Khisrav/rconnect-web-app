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
    position: sticky;
}
a {
    text-decoration: none;
    color:#000;
    padding:8px;
    display: block;
    font-weight: 500;
    color:#777;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    transition: all .5s ease 0s;
}
a.active {
    color: #000;
    background-color: #f4f4f4;
}
a:hover {
    background-color: #f9f9f9;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
li {

}
@media (max-width:992px) {
    .inner-shadow {
        display: none;
    }
}
</style>