import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'; 

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button onPress={addBlogPost} title={"Add blog post"}/>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title} (id:{item.id})</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                        </View>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    }
});

export default IndexScreen;