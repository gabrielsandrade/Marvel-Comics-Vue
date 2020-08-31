<template>
<div>
    <div class="character-list">
        <div class="character-item" v-bind:key="char.id" v-for="char in this.characters">
            <img v-bind:src="char.thumbnail.path + '/portrait_xlarge.' + char.thumbnail.extension" alt="character image" height="225">
            <h1 class="title">{{ char.name }}</h1>
        </div>
    </div>
    <div class="pagination">
        <router-link id="pag-btn" :to="'characters?page=' + preview_page"  v-if="preview_page != 0"> Preview page </router-link>
        <router-link id="pag-btn" :to="'characters?page=' + next_page"  v-if="next_page != 0"> Next page </router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Characters',
    data: function()  {
        return{
            
            characters: [],
            page: this.$route.query,
            next_page: (parseInt(this.page) + 1),
            preview_page: this.page - 1,
        }
    },

    methods: {
        calculate_pages: function() {
            this.next_page = (parseInt(this.page) + 1).toString();
            this.preview_page = (parseInt(this.page) - 1).toString();
            console.log(this.preview_page , this.next_page);
        },
        getCharacter: function() {
            const paginationBtn = document.querySelectorAll('#pag-btn');
            paginationBtn.forEach(button => {
                button.id = "link-disabled";
            })
            this.page = (this.$route.query.page || 1);
            axios
            .get('http://localhost:3333/comics/?page=' + this.page)
            .then(response => {
                this.characters = response.data.results;
              console.log(this.characters);
              this.calculate_pages();
            paginationBtn.forEach(button => {
                button.id = "pag-btn";
            })
              });
        }
    },

    mounted(){
        this.page = (this.$route.query.page || 1);
        console.log(this.page);
        this.getCharacter();
        this.calculate_pages();
    },
    watch: {
        '$route.query.page': function(){
            this.getCharacter();
            this.calculate_pages();
        }
    }
}
</script>

<style scoped>
.character-list {
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 24px;    
    justify-content: center;
    margin-bottom: 20px;
    min-height: 80vh;
}

.character-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 300px;
    max-width: 200px;
    padding: 5px;
    border-radius: 4px;
    transition: box-shadow .2s linear;
    cursor: pointer;
}

.character-item:hover {
    box-shadow: 0 0 2px black;
}

.title {
    height: 80px;
    font-size: 25px;
    text-align: center;
}

.pagination {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.pagination a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: black;
    border-radius: 4px;
    text-decoration: none;
    color: red;
    height: 40px;
    width: 120px;
}

#link-disabled {
    pointer-events: none;
    opacity: .8;
}

img {
    width: 162px;
    margin: 0 auto;
}
</style>