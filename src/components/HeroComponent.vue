<template>
    <div class="hero-container">
        <div class="carousel-wrapper">
            <CarouselComponent @section-changed="ChangeSection"></CarouselComponent>
        </div>
        <div class="call-to-action">
            <div v-for="section in Sections" :key="section.id">
                <Transition name="fade">
                    <div class="section" v-if="section.id===currentSection">
                        <h1>{{ section.title }}</h1>
                        <h2>{{ section.subtitle }}</h2>
                        <h3>{{ section.paragraph }}</h3>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarouselComponent from './CarouselComponent.vue';

interface section{
    id:number,
    title: string,
    subtitle: string,
    paragraph:string,
}

export default defineComponent({
    data() {
        return {
            Sections: [
                {
                    id:1,
                    title: 'Indulge in Heavenly Delights',
                    subtitle: 'Explore our Delectable Bakery Creations',
                    paragraph: "At our bakery, we craft each confection with a blend of passion and precision. From our signature artisanal bread to our luscious pastries, every bite embodies a symphony of flavors. Join us on a delectable journey where each baked good is a celebration of taste and tradition. Don't miss out—treat yourself to a divine experience with our freshly baked delights today.",
                },
                {
                    id:2,
                    title: 'Customize Your Sweet Moments',
                    subtitle: 'Create Memorable Occasions with Our Bespoke Treats',
                    paragraph: 'Your special moments deserve the perfect touch, and our bakery is here to transform your celebrations into unforgettable experiences. From personalized cakes to tailored dessert platters, we cater to your unique preferences. Let us sweeten your events with our carefully crafted delicacies. Reach out to us for bespoke orders and infuse sweetness into your every occasion.',
                },
                {
                    id:3,
                    title: 'Join Our Loyalty Program',
                    subtitle: 'Enjoy Rewards and Exclusive Offers',
                    paragraph: 'Become a part of our family and relish exclusive benefits through our loyalty program. Earn rewards with every purchase and unlock member-only perks. From special discounts to sneak peeks of new products, our loyal customers are at the heart of everything we do. Sign up now to enjoy the sweet rewards of being a valued member of our bakery community.',
                },
                {
                    id:4,
                    title: 'Experience Baking Masterclasses',
                    subtitle: 'Unleash Your Inner Pastry Chef',
                    paragraph: "Ever wanted to master the art of baking? Join our hands-on masterclasses led by our experienced bakers. Learn the secrets behind perfect doughs, precise decorations, and the science of creating mouthwatering desserts. Whether you're a beginner or an enthusiast, these classes will elevate your baking skills to new heights. Dive into the world of baking with us and turn your kitchen into a haven of delectable creations.",
                }
            ] as section[],
            currentSection:1,
        };
    },
    methods:{
        ChangeSection(id: number){
            this.currentSection=id;
        }
    },
    components: { CarouselComponent }
})
</script>

<style scoped>
.hero-container{
    height: 80vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.carousel-wrapper{
    position: relative;
    width: 100%;
}
.call-to-action{
    position:absolute; 
    z-index: 2;
    bottom: 0px;
    width: 100%;
    height: 33%;
    background-color: rgba(0,0,0,0.5);
    color: var(--color-a);
}
.section > *{
    margin-bottom: 10px;
}
.section > *:hover{
    color: color-mix(in lch, var(--color-a) 100%, var(--color-b) 100%);
}
.section > h1{
    margin-left: 50px;
}
.section > h2{
    margin-left: 150px;
}
.section > h3{
    margin-left: 250px;
}
.fade-enter-from{
    transform:translateX(-100%);
    opacity: 0;
    transition: all 0.75s ease;
}
.fade-enter-to{
    transform:translateX(0%);
    opacity: 1;
    transition: all 0.75s ease;

}
@media (max-height: 768px)
{
    .section{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .section > h1{
        font-size:1.75rem;
        margin-left: 10px;

    }
    .section > h2{
        font-size:1.5rem;
        margin-left: 20px;
    }
    .section > h3{
        font-size: 0rem;
        margin-left: 30px;

    }
}
</style>