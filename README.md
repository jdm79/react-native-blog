# React Native blogging app

This is my learning-by-making app, using Steven Grider's [*The Complete React Native + Hooks Course*](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) on Udemy.

What I will be learning through making this app:

1. Use React Navigation.
2. Use React Context to share state between screens.
3. Use React style sheets for styling.
4. Use FlatList instead of mapping over an array in order to render a list. This is the React Native way of doing things.
5. Understand CRUD (Create, Read, Update, Delete/Destroy).
6. Use basic, functional React Native mobile UX for an app.

This blog app uses React context to share state between screens. Navigation is handled by React Navigation.

Using React Context means you don't have to pass state down through children like some clunky cascade, rather you can import the parent Context Provider component in any child file and use the state there without passing it down through nested children (as with props). More setup but subsequently easier to use.

