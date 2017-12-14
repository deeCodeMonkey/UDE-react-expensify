import { createStore } from 'redux';

//action generators- function that generates action objects
const incrementCount = () => ({
        type: 'INCREMENT'
});


//do not change state or action
const store = createStore((state = { count: 0 }, action) => {
    //more common to use switch
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }

    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    } else {
        return state;
    }
    console.log('running');
    return state;
});


//everytime state changes, do this
//unscubscribe to stop after a point
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState());

//action, action name is increment
store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);

unsubscribe();

store.dispatch(
    {
        type: 'DECREMENT'
    }
);