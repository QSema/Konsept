export const addBlogFunction = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};

export const removeBlogFunction = (id) => {
  return {
    type: "REMOVE_BLOG",
    payload: id,
  };
};


export const editBlogFunction = (blog) => {
  return {
    type: "UPDATE_BLOG",
    payload: blog,
  };
};