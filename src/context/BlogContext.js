import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: "Making web scrapers"},
        { title: "Using the terminal to web development"},
        { title: "Basic chrome extensions"},
        { title: "Getting started with Mastodon"},
        { title: "Building a Twitter bot (awks)"},
        { title: "Building a web-scraping bot"},
        { title: "Making a web-scraper and sending data to a database"},
        { title: "Running Python scripts on your terminal"},
        { title: "Using GitHub for dev job interviews"}
    ]

    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;