# React Native blogging app

This is my learning-by-making app, using Steven Grider's [*The Complete React Native + Hooks Course*](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) on Udemy.

What I will be learning through making this app:

1. Use React Navigation.
2. Use React Context to communicate state between screens.
3. Use React style sheets for styling.
4. Use FlatList instead of mapping over an array in order to render a list. This is the React Native way of doing things.
5. Understand CRUD (Create, Read, Update, Delete/Destroy).
6. Use basic, functional React Native mobile UX for an app.


# React Navigation.
   
# React Context

This blog app uses React context to communicate state between screens. State changes are still handled by useReducer (but could be done by Redux if we wanted to go down that path). Steven Grider basically replicates Redux to a certain extent, with the createDataContext.js helper function. 

Using React Context means you don't have to pass state down through children like some clunky cascade, rather you can import the parent Context Provider component in any child file and use the state there without passing it down through nested children (as with props). More setup but subsequently easier to use.

