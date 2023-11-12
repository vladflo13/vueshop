<template>
    <div class="testimonies-container">
        <TestimonyComponent :class="{'item':true}" v-for="item in testimonies" :key="item.id" :customer-name="item.clientName" :testimony-body="item.clientTestimony"></TestimonyComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestimonyComponent from './TestimonyComponent.vue';

export default defineComponent({
    data() {
        return {
            isWide:true,
            isTall:false,
            testimonies:[
            {
                id: 1,
                imgSrc: '', 
                clientName: 'John Doe',
                clientTestimony: "The pastries from this bakery are nothing short of extraordinary! Every bite feels like a symphony of flavors dancing on my taste buds. It's a true testament to the skill and passion of the bakers",

            },
            {
                id: 2,
                imgSrc: '',
                clientName: 'Jane Smith',
                clientTestimony: "I stumbled upon this hidden gem, and I'm so glad I did! The aroma of freshly baked goods is irresistible, and the quality is unmatched. My family's new favorite spot for weekend treats!",

            },
            {
                id: 3,
                imgSrc: '',
                clientName: 'Chris Anderson',
                clientTestimony: "The attention to detail in every pastry is evident. From the flaky crusts to the decadent fillings, this bakery has mastered the art of baking. I can't get enough of their delightful creations!",

            },
            {
                id: 4,
                imgSrc: '',
                clientName: 'Robert Carter',
                clientTestimony: "I've never been a morning person, but knowing that this bakery awaits with its scrumptious breakfast pastries makes getting up early worthwhile. The croissants are heavenly, and the coffee is the perfect companion.",

            },
            {
                id: 5,
                imgSrc: '',
                clientName: 'Sophie Turner',
                clientTestimony: "As a self-proclaimed dessert enthusiast, I can confidently say that this bakery has raised the bar. The cakes are not only visually stunning but also incredibly delicious. My celebrations are incomplete without one of their masterpieces.",
            },
            {
                id: 6,
                imgSrc: '',
                clientName: 'David Miller',
                clientTestimony: "What sets this bakery apart is the commitment to using high-quality ingredients. You can taste the freshness in every bite. It's evident that the bakers take pride in delivering top-notch pastries to their customers.",

            },
            {
                id: 7,
                imgSrc: '',
                clientName: 'Emily Walker',
                clientTestimony: "I've been a loyal customer for years, and the consistent quality and friendly service keep me coming back. The variety of pastries ensures there's always something new to try, and I've never been disappointed.",

            },
            {
                id: 8,
                imgSrc: '',
                clientName: 'Oliver Price',
                clientTestimony: "The gluten-free options at this bakery are a game-changer! As someone with dietary restrictions, finding a place that caters to my needs without compromising on taste is a blessing. The almond flour muffins are a personal favorite!",

            },
            {
                id: 9,
                imgSrc: '',
                clientName: 'Emma Thompson',
                clientTestimony: "The ambiance of this bakery is warm and inviting, making it the perfect place to unwind with a sweet treat. Whether I'm catching up with friends or enjoying some alone time, the pastries here always enhance the experience.",
            },
            {
                id: 10,
                imgSrc: '',
                clientName: 'Carlos Rodriguez',
                clientTestimony: "I recently ordered a custom cake for a special occasion, and it exceeded my expectations. The attention to detail, personalized design, and, of course, the delicious taste made it a highlight of the celebration. I highly recommend this bakery for any event!",
            },
            {
            id: 11,
            imgSrc: "",
            clientName: "Sophia Chen",
            clientTestimony: "The artisanal bread selection is unparalleled. Each loaf is a work of art, and the crusty exterior gives way to a soft, flavorful interior. This bakery has turned me into a bread connoisseur!"
        },
        {
            id: 12,
            imgSrc: "",
            clientName: "Jamal Williams",
            clientTestimony: "I love that this bakery caters to diverse tastes. The vegan pastries are a delightful surprise—moist, flavorful, and just as indulgent as their traditional counterparts. It's a haven for everyone with dietary preferences!"
        },
        {
            id: 13,
            imgSrc: "",
            clientName: "Olivia Turner",
            clientTestimony: "The staff's enthusiasm for their craft is contagious. You can feel the passion in every recommendation and the genuine smiles behind the counter. It's more than a bakery; it's a community of bakers who love what they do."
        },
        {
            id: 14,
            imgSrc: "",
            clientName: "Diego Martinez",
            clientTestimony: "I'm a sucker for a good cupcake, and this bakery's selection is mind-blowing. The flavors are inventive, and the frosting is the perfect balance of sweetness. It's impossible to have just one!"
        },
        {
            id: 15,
            imgSrc: "",
            clientName: "Zoe Anderson",
            clientTestimony: "From the moment you walk in, the sweet aroma envelops you. It's like a comforting hug that prepares you for the delightful experience ahead. The pastries are a sensory delight, and the atmosphere is just as inviting."
        },
        {
            id: 16,
            imgSrc: '',
            clientName: "Malik Khan",
            clientTestimony: "The pastry chef's creativity knows no bounds. Every season brings new and exciting treats that reflect the freshness and uniqueness of the ingredients. It's a joy to see and taste the artistry behind each creation."
        },
        {
            id: 17,
            imgSrc: '',
            clientName: "Isabella Russo",
            clientTestimony: "My go-to place for a quick coffee and a treat. The speed of service doesn't compromise the quality—every pastry is a testament to the bakery's commitment to excellence. It's the perfect pitstop in my busy day."
        },
        {
            id: 18,
            imgSrc: '',
            clientName: "Nathan Taylor",
            clientTestimony: "I hosted a small gathering and ordered a selection of pastries. The guests couldn't stop raving about the treats. The bakery's attention to detail in presentation and flavor made the event memorable."
        },
        {
            id: 19,
            imgSrc: '',
            clientName: "Gabriela Morales",
            clientTestimony: "As a loyal customer, I appreciate the consistency in quality. Whether it's a weekday indulgence or a weekend splurge, I can always count on the same exceptional taste. It's the mark of a truly great bakery."
        },
        {
            id: 20,
            imgSrc: "",
            clientName: "Elijah Bennett",
            clientTestimony: "The croissants are a revelation! Flaky, buttery layers that practically melt in your mouth. It's the kind of pastry that transports you to a Parisian café. A true gem in the world of bakeries!"
        }             
            ]
        };
    },
    components: { TestimonyComponent }
})
</script>

<style scoped>
.testimonies-container{
    display: grid;
    height: 100vh;
    width: 200vw;
    background-color: var(--background-color);
    grid-template-rows: 1fr 1fr; 
    padding-top: 60px;
    padding-bottom: 60px;
    grid-template-columns: 360px;
    gap: 10px;
}
.item{
    height: 100%;
}
.item:nth-child(odd)
{
    grid-row: 1 / 2;
}
.item:nth-child(even)
{
    grid-row: 2 / 3;
}
</style>