<template>
    <footer class="footer-element">
        <div class="links-container">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </button>    
    </div>
        <div class="locations-container"> 
            <router-link to="/locations">
                <button class="location" @click="SendToSection('Manchester')">
                    <h2>Manchester Location</h2>
                        <p>
                            42 Rosemary Avenue<br>
                            Manchester, M8 4AB<br>
                            United Kingdom
                        </p>
                </button>
            </router-link>
            <router-link to="/locations">

                <button class="location" @click="SendToSection('London')">
                    <h2>London Location</h2>
                    <p>
                        15 Thames Street<br>
                        London, SW1A 1AA<br>
                        United Kingdom
                    </p>
                </button>
            </router-link>
            <router-link to="/locations">
                <button class="location" @click="SendToSection('Birmingham')">
                    <h2>Birmingham Location</h2>
                    <p>
                        78 Oakwood Lane<br>
                        Birmingham, B13 8EF<br>
                        United Kingdom
                    </p>
                </button>
            </router-link>
            <router-link to="/locations">
                <button class="location" @click="SendToSection('Edinburgh')">
                    <h2>Edinburgh Location</h2>
                    <p>
                        29 Highland Road<br>
                        Edinburgh, EH1 2DG<br>
                        United Kingdom
                    </p>
                </button>
            </router-link>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {}
    },
    methods:{
        SendToSection(location:string)
        {
            this.$router.push('/locations');
            this.$nextTick(() => {
            const section = document.getElementById(location) as HTMLElement;
            if (section) {
                section.scrollIntoView({behavior:'smooth'})
            }
        });
        }
    }
})
</script>

<style scoped>
.footer-element{
    z-index: 4;
    position: relative;
    margin-top: 20px;
    height: 240px;
    width: 100%;
    background-color: var(--color-b);
    border: 2px solid var(--color-a);
    outline: 2px solid var(--color-b);
    display: flex;
    flex-direction: row;
    align-items: end;
}
.links-container{
    margin-left: 15px;
    width: 20%;
    height: 64px;
    display: flex;
    flex-direction: row;
    gap: 15px;
}
.locations-container{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color:var(--color-a);
    justify-content: space-evenly;
    align-items: center;
}
.location{
    padding: 10px;
    transition: transform 0.5s ease;
    color:var(--background-color)
}
.location:hover{
    cursor: pointer;
    transition: transform 0.5s ease;
    transform: scale(1.05);
}
.location > h2{
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 2px double  var(--color-a);
    text-align: center;
    font-size: 1.5rem;
}
.location > p{
    text-align: center;
    padding-top: 20px;
    font-size: 1.25rem;
}
@media (max-width:768px) {
    .footer-element{
    height: 200px;
    }
    .locations-container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
    }
    .location > h2{
        font-size: 0.75rem;
        border:none;
        padding: none;
    }
    .location > p{
        width: 0px;
        font-size: 0px;
    }
}
</style>