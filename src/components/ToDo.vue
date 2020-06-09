<template>
  <ul class="tasks">
    <li class="task" v-for="(item, index) in get_todos" :key="index">
		{{ get_todos.todo }}
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
//   data() {
// 	return {
// 		todos: [
// 		{ text: 'Learn JavaScript' },
// 		{ text: 'Learn Vue' },
// 		{ text: 'Build something awesome' }
// 		]
// 	}
//   },

  computed: {
        ...mapGetters([
            "get_todos",
		]),
  }
}
</script>

<style>
.tasks {
	padding: 0;
}
.task {
	display: inline-block;
	width: 100%;
}
</style>