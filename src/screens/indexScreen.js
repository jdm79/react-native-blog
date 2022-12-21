import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const { data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>2023 Blog Posts</Text>
            <Button onPress={addBlogPost} title={"Add blog post"}/>
            <FlatList 
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default IndexScreen;