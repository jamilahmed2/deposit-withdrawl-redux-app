import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../state/Index"

const Home = () => {
  const dispatch = useDispatch()
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    // <div>
    //   <div className="btn__deposit">
    //     <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.depostMoney(100))}}>Deposit</button>
    //   </div>
    //   <div className="btn__withdrawll">
    //     <button className="btn " onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>Withdrawll</button>
    //   </div>
    // </div>
    <div>
      <div className="btn__deposit">
        <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>Deposit</button>
      </div>
      <div className="btn__withdrawll">
        <button className="btn " onClick={()=>{withdrawMoney(100)}}>Withdrawll</button>
      </div>
    </div>
  );
};

export default Home;
