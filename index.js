const redux=require('redux');


const createStore=redux.createStore;
const combineReducers=redux.combineReducers;

const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
const applMiddleware=redux.applyMiddleware





const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM'
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIcecream(){
    return{
        type:BUY_ICECREAM
    }
}


// const initialState={
//     numberofCakes:10,
//     numberofIcecream:20
// }

const initialStateCake={
    numberofCakes:10,

}


const initialStateIcecream={

    numberofIcecream:20
}



const Cakereducer=(state=initialStateCake,action)=>{
switch(action.type){
 
case BUY_CAKE:return{
    ...state,
    numberofCakes:state.numberofCakes-1
}

   default: return state
}
}

const IceCreamreducer=(state=initialStateIcecream,action)=>{
    switch(action.type){
     
    case BUY_ICECREAM:return{
        ...state,
        numberofIcecream:state.numberofIcecream-1
    }
    
       default: return state
    }
    }
    const rootReducer=combineReducers({
        Cake:Cakereducer,
        Icecream:IceCreamreducer
        
    })

const store=createStore(rootReducer,applMiddleware(logger));
console.log('initial state',store.getState());
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();