// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import ModalDialog from "react-bootstrap/ModalDialog";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalTitle from "react-bootstrap/ModalTitle";
// import ModalBody from "react-bootstrap/ModalBody";
// export default function EditTodo() {
//   return (
//     <>
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//       ;
//     </>
//   );
// }

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function EditTodo() {
  //   const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" value="Go to mall" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value="Go to mall"
      /> */}
    </form>
  );
}
