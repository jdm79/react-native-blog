import React, { useReducer } from "react";
// Context only communicates state. state is still handled by useState hook. like props.
const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog post #${state.length + 1}`}];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'})
    };

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;