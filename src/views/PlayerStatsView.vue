<template>
  <div class="playerStats">
    <h1>Add players</h1>
    <input v-model="name" placeholder="Player Name">
    <br>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>Goaly</option>
      <option>Striker</option>
      <option>Link</option>
    </select>
  </div>
</template>

<style>
/*@media (min-width: 1024px) {
  .playerStats {
    
  }
}*/
</style>
