<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/characters">Characters</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
ul {
    text-align: center;
    list-style: none;
    background-color: rgba(0, 0, 0, .95);
    display: flex;
    justify-content: space-around;
}
li {
    display: inline-flex;
    flex-direction: column;
    height: 40px;
    justify-content: center;
    transition: background-color .5s linear;
}

li a {
    color: aliceblue;
    text-decoration: none;
}

li:hover {
    background-color: #f0f0f0;
}
li:hover > a{
    color: black;

}   
</style>