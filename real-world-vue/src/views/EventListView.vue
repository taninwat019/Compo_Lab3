<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventCard2 from '@/components/EventCard2.vue';
import type { EventItem } from '@/type';
import { type Ref, ref } from 'vue';
import EventService from '@/services/EventService'

const events: Ref<Array<EventItem>> = ref([])

EventService.getEvent().then((response) =>{
  events.value = response.data
})
</script>

<template>
  <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </main>
  <main class="events2">
    <EventCard2 v-for="event in events" :key="event.id" :event="event"></EventCard2>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.events2{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
}
</style>