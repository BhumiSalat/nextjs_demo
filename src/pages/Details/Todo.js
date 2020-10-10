import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, title, action) {
  return { id, title, action };
}

const rows = [
  createData(1, "Wash car"),
  createData(2, "Go to mall"),
  createData(3, "Go to market"),
];

export default function Todo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modal, setModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">
                  {/* <Fab size="medium" color="primary" aria-label="edit">
                    <EditIcon
                      onClick={() => {
                        console.log("click");
                      }}
                    >
                      {" "}
                      <Link href="/Details/EditTodo">
                        <a></a>
                      </Link>
                    </EditIcon>
                  </Fab> */}
                  {/* <Link href="/Details/EditTodo">
                    <a>Edit</a>
                  </Link> */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleShow}
                    style={{ background: "" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField id="standard-basic" value="Go to mall" />
        </Modal.Body>
        <br></br>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          &nbsp;
          <Button variant="primary">Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
