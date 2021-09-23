<template>
  <div :class="selectTheme + '-body'">
    <header :class="selectTheme">
      <h1 :class="selectTheme + '-title'">Selected Theme</h1>
    </header>
    <div class="container">
      <main>
        <div class="select">
          <p @click="checkTheme('light')">
            <router-link to="light" class="link-l" :class="selectTheme + '-title'" id="light"
              >Light Theme</router-link
            >
          </p>
          <p @click="checkTheme('dark')">
            <router-link to="dark" class="link-r" :class="selectTheme + '-title'" id="dark"
              >Dark Theme</router-link
            >
          </p>
        </div>
      </main>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    or: "light",
    selectTheme: ""
  }),
  methods: {
    checkTheme(theme) {
      if (theme === "light") {
        this.selectTheme = "light";
      } else if (theme === "dark") {
        this.selectTheme = "dark";
      }
    }
  }
};
</script>

<style scoped>
header {
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.select {
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}
.link-l,
.link-r {
  text-decoration: none;
  padding: 0 10px;
  cursor: pointer;
  color: darkblue;
}
.link-l {
  border-right: 1px solid black;
}
.link-r {
  border-left: 1px solid black;
}
.link-l:hover,
.link-r:hover {
  color: tomato;
}
.container {
  padding: 0 10%;
}
.light {
  background-color: aliceblue;
}
.light-title {
  color: black;
}
.light-body {
  background-color: whitesmoke;
}
.dark-body {
  background-color: rgb(48, 48, 48);
}
.dark-title {
  color: wheat;
}
.dark {
  background-color: dimgray;
}
</style>
