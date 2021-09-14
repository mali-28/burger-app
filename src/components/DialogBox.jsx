import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { products } from "../products/products";
import { setLocalStorage } from '../utils/utils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

 const DialogBox = ({counter,onClose, open, total, ...props}) =>{
  const history = useHistory();

  const agree = () => {
    history.replace('checkout');
    setLocalStorage("items", {...counter, total : total});
    props.remove()
  }

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
          <DialogTitle id="alert-dialog-slide-title">{<h3 className="f-family-monospace red">Your Order Summary:</h3>}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <table>
              <thead>
                    <tr className="body">
                      <td>Ingredients</td>
                      <td>quantity</td>
                      <td>price</td>
                    </tr>
                  </thead>
                  <tbody>
                {products.map((val)=>{
                 
                  return <>
                  <tr key={val.id} className="body">
                    <td>{val.title}</td>
                    <td>{counter[val.title]["number"]}</td>
                    <td>${counter[val.title]["amount"]}</td>
                    </tr>
                  </>
                })}
                
                <tr className="body b-top-1-ccc">
                  <td colSpan="2">Total</td>
                  <td>${total}</td>
                </tr>
                </tbody>
              </table>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>

            <Button onClick={agree} color="primary">

              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}
export default DialogBox;