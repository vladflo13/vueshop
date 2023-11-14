<template>
    <div class="search-view">
        <h1>Browse our products</h1>
        <div class="search-bar-container">
            <svg v-if="!inputActive" width="64px" height="64px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
            <input v-model="searchInput" @input="inputChanged" @blur="inputIsInactive" id="search-input" placeholder="Search..." @click="inputIsActive">
        </div>
        <div class="product-search-container">
            <div class="tag-container">
                <button @click="FilterByTag(tag)" @blur="ResetProducts" class="tag" v-for="tag in TagList" :key="tag.tagName">{{ tag.tagName }}</button>
            </div>
            <div class="product-container">
                <ProductComponent v-for="product in FilteredProducts" :key="product.id" class="item"  :imgObject="product"></ProductComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import FlourishComponent from '@/components/FlourishComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import {orderProduct, productDTO, productTag, productTagDTO } from '@/interfaces';
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            inputActive: false,
            searchInput: '',
            ProductsDtos: [] as productDTO[],
            Products: [] as orderProduct[],
            FilteredProducts:[] as orderProduct[],
            ExampleTags:[
                {tagName:'Bread'},
                {tagName:'Tart'},
                {tagName:'Sweet'},
                {tagName:'Cookie'},
                {tagName:'Crunchy'},
                {tagName:'Quiche'},
            ],
            ProductTags: [] as productTagDTO[],
            TagList:[] as productTag[]
        };
    },
    methods: {
        inputIsActive() {
            this.inputActive = true;
        },
        inputIsInactive() {
            if(this.searchInput==='')    
                this.inputActive = false;
        },
        inputChanged(){
            if(this.searchInput!=''){
                this.FilteredProducts = [];
                let term = this.searchInput.toLowerCase();
                for (let i = 0; i < this.Products.length; i++)
                    if(this.Products[i].text?.toLowerCase().includes(term)||this.Products[i].title.toLowerCase().includes(term))
                        this.FilteredProducts.push(this.Products[i]);
            }
            else
                this.FilteredProducts = this.Products;
        },
        async fetchProductList() {
            const apiLocation = 'https://localhost:7018/api/Product';
            var Products;
            try {
                const response = await fetch(apiLocation);
                if (response.ok) {
                    Products = response.json();
                }
                else
                    console.error('Failed to fetch Products');
            }
            catch (error) {
                console.error('Error fetching data', error);
            }
            return Products;
        },
        async fetchProductTagList(){
            const apiLocation = 'https://localhost:7018/api/ProductTag';
            var ProductTags;
            try{
                const response = await fetch(apiLocation);
                if(response.ok){
                    ProductTags = response.json();
                } 
                else
                    console.error('Failed to fetch ProductTags');
            }
            catch(error){
                console.error('Error fetching data',error);
            }
            return ProductTags;
        },
        AssignTagList(productTags:productTagDTO[]){
            for (let product of productTags)
            {
                let isInTagList = false;
                let i =0;
                for (let tag of this.TagList)
                {
                    if(tag.tagId == product.tagId)
                    {                        
                        this.TagList[i].productId.push(product.productId)
                        isInTagList = true;
                    }
                    i++;
                }
                if(!isInTagList)
                    {
                        let tag:productTag ={
                            productId:[],
                            tagId:product.tagId,
                            tagName:product.tagName,
                        };
                        tag.productId.push(product.productId);
                        this.TagList.push(tag);
                    }
            }
            this.TagList =this.TagList.sort((a,b)=> b.productId.length - a.productId.length)
        },
        FilterByTag(tag: productTag) {
            this.FilteredProducts = [],
            tag.productId.forEach(product=>{
                let newProduct = this.Products.find(id=> id.id===product)
                if(newProduct)
                    this.FilteredProducts.push(newProduct);
            })
        },
        ResetProducts(){
            this.FilteredProducts = this.Products;
        }
    },
    async created() {
        try {
            this.ProductsDtos = await this.fetchProductList();
            for (let i = 0; i < this.ProductsDtos.length; i++) {
                let product: orderProduct = {
                    id: this.ProductsDtos[i].productId,
                    title: this.ProductsDtos[i].name,
                    text: this.ProductsDtos[i].description,
                    src: require('@/assets/productImgSrc/' + this.ProductsDtos[i].imgSrc),
                    price: this.ProductsDtos[i].price,
                    numberProducts: 1,
                };
                this.Products.push(product);
            }
            this.FilteredProducts = this.Products
        }
        catch {
            console.error('Failed to get Products');
        }
        try{
            this.ProductTags = await this.fetchProductTagList();
            this.AssignTagList(this.ProductTags);
        }
        catch{
            console.error('Failed to get ProductTags');
        }
    },
    
    components: { ProductComponent }
})
</script>

<style scoped>
.search-view{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px
}
h1{
    font-size: 3rem;
    border: 4px solid var(--primary-color);
    padding-left: 40px;
    padding-right: 40px;
    margin: 30px;
    box-shadow: 5px 5px rgba(0,0,0,0.5);
}
.search-bar-container{
    position: relative;
    width: 40%;
    min-width: 300px;
    height: 64px;
}
svg {
    position:absolute;
    fill:transparent;
}
path
{
    stroke:var(--color-b);
}
input{
    height: 100%;
    width: 100%;
    margin: 2px solid var(--primary-color);

    outline: 2px solid var(--primary-color);
}
#search-input::placeholder{
    position: absolute;
    left: 64px;
    top:calc(32px - 1rem);
    font-size:2rem;
    text-align: center;
    color: var(--color-b);
}
#search-input:focus::placeholder{
    font-size: 0px;
}
#search-input{
    font-size: 2rem;
}
.product-search-container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
}
.tag-container{
    width: 40%;
    height: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3,1fr);
    padding: 10px;
}
.tag{
    width: 100%;
    height: 50px;
    border-radius: 20px;
    background-color: var(--primary-color);
    color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    box-shadow: 5px 5px rgba(0,0,0,0.4);
}
.tag:focus{
    background-color: var(--background-color);
    color: var(--primary-color);
    border: 4px solid var(--primary-color);
}
.product-container{
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding-bottom: 600px;
}
.item{
    height: 400px;
}
@media (max-width:768px) {
    .product-search-container{
        flex-direction: column;
    }
    .product-container{
        grid-template-columns: 1fr;
        width: 100%;
    }
    .tag-container{
        width: 100%;
    }
    .tag{
        font-size: 1.75rem;
    }
}
</style>