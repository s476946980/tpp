<template>
    <section>
    	<!-- 热门城市 -->
        <div class="film-nav">
        	<v-city></v-city>
        </div>
        <p>正在热映</p>
        <p>即将热映</p>
    </section>
</template>

<script>
	// 引入组件
	import city from "@/components/city/city"
export default {
  name: 'film',
  components:{
  	"v-city":city
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.film-nav,section {
		display: flex;
	}
	.film-nav,p {
		flex: 1;
		justify-content: center;
	}
</style>
