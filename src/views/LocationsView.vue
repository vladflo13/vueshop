<template>
    <div class="locations-container">
        <SectionDividerComponent class="divider" text="Our Locations"></SectionDividerComponent>
        <div class="location" v-for="location in Locations" :key="location.id">
            <section :id="getCity(location.address.city)"></section>
            <div class="image" :style="'background-image:url('+ location.imgSrc +')'"></div>
            <div class="right-section">
                <div class="info-container">
                    <div class="address">
                        <h1>{{ 'Our '+getCity(location.address.city)+' address is:' }}</h1>
                        <h2>{{ location.address.street }}</h2>
                        <h2>{{ location.address.city }}</h2>
                        <h2>{{ location.address.country }}</h2>
                    </div>
                    <div class="schedule">
                        <h1>Our Schedule is: </h1>
                        <div v-for="schedule in location.schedule" :key="schedule.opening">
                            <h2>{{schedule.weekday}}</h2>
                            <h2>{{schedule.opening}}</h2>
                            <h2>{{schedule.closing}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import SectionDividerComponent from '@/components/SectionDividerComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            Locations: [
                {
                    id: 1,
                    imgSrc: require('@/assets/locations/Manchester.jpg'),
                    address: { street: "42 Rosemary Avenue",
                        city: "Manchester, M8 4AB",
                        country: "United Kingdom" },
                    schedule: [
                        {
                            weekday: "Monday to Sunday",
                            opening: "Opening: 6:00 AM",
                            closing: "Closing: 9:00 PM"
                        }
                    ]
                },
                {
                    id: 2,
                    imgSrc: require('@/assets/locations/London.jpg'),
                    address: { street: "15 Thames Street",
                        city: "London, SW1A 1AA",
                        country: "United Kingdom" },
                    schedule: [
                        {
                            weekday: "Monday to Sunday",
                            opening: "Opening: 6:00 AM",
                            closing: "Closing: 9:00 PM"
                        }
                    ],
                },
                {
                    id: 3,
                    imgSrc: require('@/assets/locations/Birmingham.jpg'),
                    address: { street: "78 Oakwood Lane",
                        city: "Birmingham, B13 8EF",
                        country: "United Kingdom" },
                    schedule: [
                        {
                            weekday: "Monday, Wednesday, Friday",
                            opening: "Opening: 8:00 AM",
                            closing: "Closing: 7:00 PM"
                        },
                        {
                            weekday: "Tuesday, Thursday, Saturday",
                            opening: "Opening: 9:00 AM",
                            closing: "Closing: 8:00 PM"
                        }
                    ]
                },
                {
                    id: 3,
                    imgSrc: require('@/assets/locations/Edinburgh.jpg'),
                    address: { street: "29 Highland Road",
                        city: "Edinburgh, EH1 2DG",
                        country: "United Kingdom" },
                    schedule: [
                        {
                            weekday: "Monday to Saturday",
                            opening: "Opening: 7:30 AM",
                            closing: "Closing: 8:30 PM"
                        },
                        {
                            weekday: "Sunday",
                            opening: "Opening: 9:00 AM",
                            closing: "Closing: 5:00 PM"
                        }
                    ],
                },
            ]
        };
    },
    methods: {
        getCity(city: string) {
            let stringBits = city.split(',', 1);
            let cityLoc = stringBits[0];
            return cityLoc;
        }
    },
    components: { SectionDividerComponent }
})
</script>

<style scoped>
.locations-container{
    padding-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px
}
.divider{
  height: 100px;
  margin-top: 25px;
  margin-bottom: 25px;

  animation-name: fade-in-up;
  animation-duration: 0.75s;
}
.location{
    height: 800px;
    width: 100%;
    background-color: var(--primary-color);
    border: 2px solid var(--background-color);
    outline: 2px solid var(--primary-color);
    display: flex;
    flex-direction: row;
}

.image{
    width: 65%;
    background-position: center;
    background-size: cover;
}
.right-section{
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.info-container{
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    border: 4px solid var(--primary-color);
    outline: 4px solid var(--background-color);
    box-shadow: 12px 12px rgba(0,0,0,0.5);
    align-items: center;
    gap:40px
}
.address{
    margin: 5px;

    margin-top: 40px;
    padding: 5px;
    text-align: center;
    border: 4px solid var(--primary-color);
    box-shadow: 8px 8px rgba(0,0,0,0.5);

}
h1{
    font-size: 3rem;
}
h2{
    font-size: 2.25rem;
}
.schedule{
    text-align: center;
    background-color: var(--primary-color);
    color: var(--background-color);
    padding: 10px;
    border: 4px solid var(--background-color);
    outline: 4px solid var(--primary-color);
    box-shadow: 8px 8px rgba(0,0,0,0.5);

}
@keyframes fade-in-up{
  0%{transform: translateY(-20px);   opacity: 0;}
  100%{transform: translateY(0px); opacity: 1;}
}
@media (max-width:768px)
{
    .divider{
        height: 60px;
    }
    .location{
        flex-direction: column;
        height: 1000px;

    };
    .location:nth-child(3),.location:nth-child(4){
        height: 2000px;   
    }
    .image{
        width: 100%;
        height: 50%;
    }
    .right-section{
        width: 100%;
        height: 50%;
    }
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 1.25rem;
    }
}
</style>