// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=eb89474ed3551141c9241176893f33ab&language=en-US&page=1`)
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=eb89474ed3551141c9241176893f33ab&language=en-US&page=1/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}