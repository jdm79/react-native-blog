import createDataContext from "./createDataContext";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'add_blogpost':
            return [...state, { 
                id: Math.floor(Math.random() * 99999), 
                title: `Blog post #${state.length + 1}`, 
                body: lorem.generateParagraphs(1)
            }];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost'});
    }
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};


// updating a context

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    []
);