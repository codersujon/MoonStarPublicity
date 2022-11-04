<template>
    <div class="slider">
        <vueper-slides
            ref="myVueperSlides"
            autoplay
            :pause-on-hover="pauseOnHover"
            @autoplay-pause="internalAutoPlaying = false"
            @autoplay-resume="internalAutoPlaying = true">

            <vueperSlide v-for="(slide) in slides" :key="slide.id" :title="slide.title" :content="slide.content"
                 />

            <!-- <template #pause>
                <i class="icon pause_circle_outline"></i>
            </template> -->
        </vueper-slides>
    </div>

    
</template>

<script>
    import {
        VueperSlides,
        VueperSlide
    } from 'vueperslides';

    export default {
        name: "SliderVue",
        components: {
            VueperSlides,
            VueperSlide,
        },
        data() {
            return {
                pauseOnHover: true,
                autoPlaying: true,
                internalAutoPlaying: true,
                slides: [{
                    id: 'slide-1',
                    title: 'Slide <h1>#1</h1>',
                    content: 'Slide title can be HTML'
                }]
            }
        }
    }
</script>

<style>

</style>