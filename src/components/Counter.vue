<template>
    <div>
        <button @click="add">
            +1
        </button>

        <button @click="remove">
            -1
        </button>

        <p v-text="count"></p>
    </div>
</template>

<script>
export default {
  props: {
    initial: Number,
  },

  data() {
    return {
      count: this.initial || 0,
    };
  },

  methods: {
    add() {
      this.count += 1;
    },

    remove() {
      this.count -= 1;
    },
  },
};
</script>
