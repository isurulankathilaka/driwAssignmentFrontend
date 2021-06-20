<template>
  <div >
    <div id="inner-div">
          <h1>Product Price Calculator</h1>
      <table id="linksTable">
        <tr>
          <td><router-link to="/" exact>Price List</router-link></td>
          <td>
            <router-link to="/calculator">Price Calculator</router-link>
          </td>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}
#inner-div {
  width: 100%;
  height: 50%;
    padding: 20px;
    text-align: center;
}
#linksTable th {
  border: 1px solid #ddd;
  padding: 8px;
    padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
#linksTable td {
  border: 1px solid #ddd;
  padding-inline: 225pt;
}
#linksTable tr:nth-child(even) {
  background-color: #f2f2f2;
}
body {
  font-family: Helvetica, sans-serif;
}
</style>
