<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">电影</router-link>
            </li>
            <li>
                <router-link to="/cinema">影院</router-link>
               
            </li>
            <li>
                <router-link to="/my">我的</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'fixNav',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        position: fixed;
        bottom: 0;
        display:flex;
        width:100%;
        justify-content:center;
        line-height: 30px;

    }
    .router-link-exact-active.router-link-active {
        color: #ff6633;
    }
    ul li {
        flex:1;
        text-align: center;
    }
</style>
