import React, { useContext } from "react";
import Count from './Count';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { loginContext } from "../context/context";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HomeContent = (props) => {
  const history = useHistory();
  const { login, setLogin } = useContext(loginContext);
  const [open, setOpen] = React.useState(false);

  const bacon = Array.from(Array(props.counter.Bacon).keys())
  const lettuce = Array.from(Array(props.counter.Lettuce).keys())
  const cheese = Array.from(Array(props.counter.Cheese).keys())
  const meat = Array.from(Array(props.counter.Meat).keys())

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  console.log("counter props main", props.counter)
  return (
    <>
      <div className="min-h-50 d-flex j-content-center pt-5">
        <div className="w-40 ">

          <div className="burger-top d-flex">
            <div className="bg-white h-4 w-08 ml-6 rotate-r-60 b-rad-5 box-shadow-gray"></div>
            <div className="bg-white h-4 w-08 ml-6 mt-4 rotate-l-50 b-rad-5 box-shadow-gray"></div>
            <div className="bg-white h-4 w-08 ml-6 rotate-l-120 b-rad-5 box-shadow-gray"></div>
            <div className="bg-white h-4 w-08 ml-6 mt-3 rotate-l-30 b-rad-5 box-shadow-gray"></div>
            <div className="bg-white h-4 w-08 ml-6 mt-2 rotate-r-30 b-rad-5 box-shadow-gray"></div>
          </div>

          {(!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? <div><h1 className="t-center">No Ingrediant Added</h1></div> : <div className="">
            <div>

              {lettuce?.map(()=>{return <div className="w-40 h-05 bg-lettuce m-02"></div>})}
              {bacon?.map(()=>{return <div className="w-40 h-05 bg-bacon m-02"></div>})}
              {cheese?.map(()=>{return <div className="w-40 h-05 bg-cheese m-02"></div>})}
              {meat?.map(()=>{return <div className="w-40 h-05 bg-meat m-02"></div>})}
            </div>
          </div>}


          <div className="burger-bottom ">
          </div>



        </div>
      </div>
      <div className="bg-yellow pt-5 pb-5">
        <div className="w-26 m-0-auto t-center">
          <p className="f-2">Current price</p>

          <div className="w-26">

            <Count title="Lettuce" />
            <Count title="Bacon" />
            <Count title="Cheese" />
            <Count title="Meat" />

            {!login ? <button
              style={{
                background: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "#83591a" : "#D8AC68",
                cursor: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "not-allowed" : "pointer"
              }}
              disabled={!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese}
              onClick={() => { history.replace('userLogin') }}
              className="w-80per b-1-brown white f-2 p-1 mt-2 text-capitalize f-family-monospace">Sign in to order
            </button> :
              <button style={{ background: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "#83591a" : "#D8AC68", cursor: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "not-allowed" : "pointer" }}
                disabled={!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese}
                onClick={handleClickOpen}
                className="w-80per b-1-brown white f-2 p-1 mt-2 text-capitalize f-family-monospace">Order Now
              </button>}
          </div>

        </div>

      </div>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{<h3 className="f-family-monospace">Your Order Summary:</h3>}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <ul>
                <li>Lettuce : {props.counter.Lettuce}</li>
                <li>Bacon : {props.counter.Bacon}</li>
                <li>Meat : {props.counter.Meat}</li>
                <li>Cheese : {props.counter.Cheese}</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button onClick={() => {
              history.replace('checkout');
              localStorage.setItem("items", JSON.stringify(props.counter));
              props.remove();
            }} color="primary">

              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (key) => {
      dispatch({ type: "INCREMENT", payload: key });
    },
    decrement: (key) => {
      dispatch({ type: "DECREMENT", payload: key });
    },
    remove: () => {
      dispatch({ type: "REMOVE" });
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction(HomeContent);

