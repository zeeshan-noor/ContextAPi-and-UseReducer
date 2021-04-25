export const Increment ="INCREMENT"
export const Decrement ="DECREMENT"
export const RESET ="RESET"
const CounterReducer = (state, action) => {
    switch (action) {
      case Increment:
        return state + 1
        case Decrement:
        return state - 1
        case RESET:
        return 0
        
    }
  }
export default CounterReducer;

