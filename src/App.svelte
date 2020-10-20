<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";

  import Tailwindcss from "./Tailwindcss.svelte";

  import About from "./About.svelte";
  import Blog from "./Blog.svelte";
  import BlogPost from "./BlogPost.svelte";
  import Home from "./Home.svelte";

  export let url = "";
</script>

<Tailwindcss />

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blogs</Link>
  </nav>
  <div>
    <Route path="blog/:id" component={BlogPost} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="/" component={Home} />

    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0" />
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p class="text-base text-gray-600 leading-normal">
          You have a new message!
        </p>
      </div>
    </div>
  </div>
</Router>
