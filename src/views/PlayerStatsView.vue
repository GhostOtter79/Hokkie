<template>
  <div class="playerStats">
    <h1>Add players</h1>
    
    <form class="product-form" >
      <div class="form-control">
        <input v-model="playerName" type="text" name="playerName" id="playerName" placeholder="Player Name" value="">
      </div>
      <div class="form-control">
        <input type="text" name="playerSurname" id="playerSurname" placeholder="Player Surname" value="">
      </div>
      <div class="form-control">
          <select v-model="playerPosition">
            <option value="" disabled>Please select a position</option>
            <option value="Goaly">Goaly</option>
            <option value="Striker">Striker</option>
            <option value="Link">Link</option>
          </select>
      </div>
      <div class="form-control">
        <input type="number" name="playerAge" id="playerAge" placeholder="Player Age" value="">
      </div>

      <button class="btn"  v-on:click="greet">Submit</button>
    </form>
  </div>
  <div class="playerStats">
    <h1>View players</h1>
    <p tyle="white-space: post-line;">{{ playerName }}</p>
    <span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>
</template>

<style>
/*@media (min-width: 1024px) {
  .playerStats {
    
  }
}*/
</style>
