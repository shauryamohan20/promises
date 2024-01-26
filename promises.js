const posts = [
  { title: "post1", body: "this is post1 body" },
  { title: "post2", body: "this is post2 body" },
];
let lastActivity = new Date();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivity = new Date();
      resolve(lastActivity);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve();
      } else {
        reject(new Error("No posts to delete."));
      }
    }, 1000);
  });
}
// console.log(lastActivity);
// createPost({ title: "post3", body: "this is post3 body" });
// console.log(posts);
// updateLastUserActivityTime().then(() => {
//   console.log(lastActivity);
// });

Promise.all([
  createPost({ title: "post3", body: "this is post3 body" }),
  updateLastUserActivityTime(),
])
  .then((results) => {
    const updatedActivity = results[1];
    console.log("Posts created:", [...posts]);
    console.log("Last Activity:", updatedActivity);

    return deletePost();
  })
  .then(() => {
    console.log("Posts after deletion:", posts);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
