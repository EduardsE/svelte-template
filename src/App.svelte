<script lang="ts">
  import About from "./About.svelte";
  import Blog from "./Blog.svelte";
  import BlogPost from "./BlogPost.svelte";
  import Home from "./Home.svelte";

  import { Router, Link, Route } from "svelte-routing";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="blog/:id" component={BlogPost} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="/" component={Home} />
  </div>
</Router>
