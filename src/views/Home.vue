<template>
  <div class="home">
    <Counter :initial="100" ></Counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  name: 'Home',
  components: {
    Counter,
  },
};
</script>
