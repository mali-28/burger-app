import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

 const DialogBox = ({onClose, open, onClick, ...props}) =>{
  const history = useHistory();
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  

  return (
    <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{<h3 className="f-family-monospace">Your Order Summary:</h3>}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <ul>
                <li>Lettuce : {props.lettuce}</li>
                <li>Bacon : {props.bacon}</li>
                <li>Meat : {props.meat}</li>
                <li>Cheese : {props.cheese}</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClick} color="primary">
              Cancel
            </Button>

            <Button onClick={() => {
              history.replace('checkout');
              localStorage.setItem("items", JSON.stringify(props.counter));
              props.remove()
            }} color="primary">

              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}

export default DialogBox;