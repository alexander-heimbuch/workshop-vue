## Scaleable Web Applications with VueJS

---

<img src="https://avatars2.githubusercontent.com/u/7794717?s=460&v=4" width="250" style="border-radius: 125px"/>

#### Alexander Heimbuch
[@zusatzstoff](https://twitter.com/zusatzstoff)  
[alexander.heimbu.ch](https://alexander.heimbu.ch)  
[github.com/alexander-heimbuch](https://github.com/alexander-heimbuch)  

---

## Agenda

1. A Short History of Vue
2. Setup & Requirements
3. Demo Application
4. Back to the Roots
5. Component Management
6. Code Decoupling: Vue Router
7. State Management: Vuex
8. What's Next?

---

# 1 A Short History of Vue

----

<img src="https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_400x400.jpg" />

#### Developed by [Evan You](https://evanyou.me/) in 2014

----

### Core Assets

- Simple & flexible view layer
- Focused on composition and functionality
- 2way databinding
- API is influenced by AngularJS and KnockoutJS

----

### Popular because of

- Easy learning curve
- Elegant programming style & patterns
- Good documentation
- Simple & lightweight
- Fast performance

----

<img height="500" src="https://www.commitstrip.com/wp-content/uploads/2018/08/Strip-Match-Github-REact-650-finalenglish.jpg" />

---

# 2 Requirements & Setup

----

### Requirements

- Git
- Node 10+
- NPM 5+
- Editor
- Chrome or Firefox

----

### Setup

```bash
~ git clone git@github.com:alexander-heimbuch/workshop-vue.git
```

----

### Workshop Structure

- Create and evolve a small application
- All you need is in the repository
- Each development step can be accessed via git tags

---

## 3 Demo Application

----

<img src="./images/results.png" />

----

<img src="./images/search.png" />

----

<img src="./images/details.png" />

---

# 4 Back to the Roots

----

### Goals

- Implement the Demo App in VanillaJS without any framework
- Identify caveats that prevents application scaling

----

### Getting Started

#### Checkout
```bash
~ git checkout back-to-the-roots
```

#### Start the API
```bash
~ cd api && npm run start
```

#### Start the Application
```bash
~ cd vanilla && npm run start
```

#### Access the App
```bash
http://localhost:1234
```

----

### localhost:3000/api

parameter | name    | default         |
--------- | ------- | --------------- | 
query     | `q`     | `''`            |
start     | `start` | `1`             |
end       | `end`   | `null`          |
limit     | `limit` | `movies length` |
sort      | `sort`  | `null`          |
order     | `order` | `DESC`          |

----

### Vanilla Application Review

----

### Task: Search Functionality

_Implement the missing search functionality in the Movies App_


- Fuzzy search for the movie title
- Search dialog closes after the user hits return
- Only matching movies should be displayed
- A loading indicator is displayed to give the use feedback
- If nothing matches the search term a proper error message is displayed in the canvas

----

### Possible Solution Task 1

```bash
~ git checkout task-1-solution
```

----

## Let's Evaluate the Vanilla Application

----

### Dimensions of Scaleability

_Developer Velocity_ vs. _Application Performance_

----

### Developer Velocity

_How fast can a feature be developed?_

- Amount of time that is needed to add another feature
- Amount of time that is needed to replace a system component
- Ability to distribute development between developers

----

### Application Performance

_How does the application perform?_

- Response time
- Time to interaction
- Bundle size
- FPS rendering
- ...

----

## Learnings

----

### Components

> Components are the building blocks of any Web Application that define how a User Interface should appear

----

### Components

- Creation and update is complicated
- Split between template creation and logic
- Missing component reusability and composition

----

### State Management

> Every piece of information in the Web Application that has an effect on it's appearance

----

### State Management

- Creating initial application state
- Maintaining and updating the application state
- Transparancy in state changes

----

### Side Effects

> Every interaction with the Web Application from the user or any other external source

----

### Side Effects

- Handling API calls
- Handling user interactions

---

# 5 Component Management

----

### Goals

- Learn how VueJS components work
- Implement the Demo App in VueJS
- Identify benefits of component driven application design

----

### VueJS Core Concept

<img src="https://012.vuejs.org/images/mvvm.png" />

----

### VueJS Component Communication

<img src="https://cdn-images-1.medium.com/max/1600/0*Xzkw0-T4Uea3d5Yh.png" width="500px" />

----

### VueJS Component Lifecycle

<img src="https://codingexplained.com/wp-content/uploads/2017/04/Vue-instance-lifecycle-Page-1.png" width="800px" style="background: white;"/> 

----

### VueJS Setup

```bash
~ npm install -g @vue/cli
~ vue create vue
~ cd vue
~ npm install node-sass sass-loader --save-dev
~ npm run serve
```
----

## Live Coding - Implement Components

----

### Getting Started

#### Checkout
```bash
~ git checkout vue-application
```

#### Start the API
```bash
~ cd api && npm run start
```

#### Start the Application
```bash
~ cd vue && npm run serve
```

#### Access the App
```bash
http://localhost:8080
```

----

### Task: Movie Details Modal

_Implement the missing movie details functionality_

- If a user clicks a movie, the details modal opens
- It shows the movie title, cover, description and rating
- If the user clicks the cancel button the modal disappears

----

### Possible Solution Task 2

```bash
~ git checkout task-2-solution
```

----

## Let's Evaluate the Vue Application

----

### Reusability

- New applications can be assembled through existing components, development will be faster
- A component can be managed individually and maintenance becomes easy

----

### Quality

- Isolated components can be tested easier because of reduced dependencies
- A component can establish a clear interface that takes different requirements into account

----

### Composition

- Each functionality is implemented individually, therefore corresponding components can be changed or upgraded seperately
- Complex components can be reassembled from simpler components fitting different use cases

---

# 6 Code Decoupling: Vue Router

----

### Goals

- Learn how a Router can be used
- Identify benefits for the application structure

----

### Installation

```bash
~ npm install vue-router --save
```

----

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});

const app = new Vue({
  router
}).$mount('#app')

```

----

```html
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</div>
```

----

## Live Coding - Implement the Router

----

### Getting Started

#### Checkout
```bash
~ git checkout vue-router
```

#### Start the API
```bash
~ cd api && npm run start
```

#### Start the Application
```bash
~ cd vue-advanced && npm run serve
```

#### Access the App
```bash
http://localhost:8080
```

----

### Task: Movie Details

_Implement the movie details functionality with a custom route_

- If a user clicks a movie, he is redirected to `/details`
- The details modal opens
- It shows the movie title, cover, description and rating
- If the user clicks the cancel button he is redirected to the root screen

----

### Possible Solution

```bash
git checkout task-3-solution
```

----

## Let's Evaluate the Vue Router Application

----

### Code Decoupling

- Each route provides a clear interface to a screen
- Screens can be developed more independently

----

### State Persistance

- Most of the component state is maintained in the route
- Reduce complexity in App Component

----

### Performance

- Code splitting based on routes
- Lazy loading code chunks

---

# 7 State Management: Vuex

----

### Goals

- Learn how state management with Vuex works
- Identify benefits for the data flow

----

### A Central Place for State

<img src="https://vuex.vuejs.org/vuex.png" />

----

### Installation

```bash
~ npm install vuex --save
```

----

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

const app = new Vue({
  store
}).$mount('#app');

```

----

## Live Coding - Implement Vuex

----

### Getting Started

#### Checkout
```bash
~ git checkout vue-state-management
```

#### Start the API
```bash
~ cd api && npm run start
```

#### Start the Application
```bash
~ cd vue-advanced && npm run serve
```

#### Access the App
```bash
http://localhost:8080
```

----

### Task: Loading Indicator

_Use a store binding for the loading indicator_

- use proper mutations, actions & getter

----

### Possible Solution

```bash
git checkout task-4-solution
```

----

## Let's Evaluate the Vue State Management Application

----

### Predictable State Transitions

- Increases maintainability
- Hardened applications because of clear data flows

----

### Decoupling Logic from Components

- Less complex components
- Simple interfaces allows better testing

----

### Isolating Side Effects

- Eliminates changes to visual components on changes
- Isolation allows exchanging of system components

---

# What's Next?

----

- Internationalization
- Building the Application (Chunk Splitting)
- Deploying the Application
- Debugging/Tracking User Interactions
- ...
