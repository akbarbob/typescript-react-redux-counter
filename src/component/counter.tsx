import React from "react";
import { connect } from "react-redux";
import { middDecrement, middIncrement, increment, decrement } from "../redux/action";
import { AppState } from "../redux/store";
import { InitialStateInterface } from "../redux/index";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../redux/types/actionType";
import { bindActionCreators } from "redux";
import './style.css';
interface ICounterProps {
  name: string;
}
 type Props=ICounterProps & LinkDispatchToProps & InitialStateInterface
const Counter: React.FC<Props> = props => {
  const incr=(value: number)=>{
   props.increment(value);
  }

  const decr=(value: number)=>{
      props.decrement(value)
  }
  return (
    <div className="counter">
    <div>
         <p>{props.count}</p>
      <button onClick={()=>incr(1)}>+</button><button onClick={()=>decr(1)}>-</button>
      </div>
    </div>
  );
};

interface LinkDispatchToProps {
  increment: (count: number) => void;
  decrement: (count: number) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: ICounterProps
): InitialStateInterface => {
  const { counters } = state;
  const { pending, count } = counters;
  return {
    pending,
    count
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: ICounterProps
) => {
  return {
    increment: bindActionCreators(middIncrement, dispatch),
    decrement: bindActionCreators(middDecrement, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
