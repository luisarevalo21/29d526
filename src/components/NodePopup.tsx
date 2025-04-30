import * as React from "react";

import { useCallback, useState } from "react";

import { Handle, Position } from "@xyflow/react";
import { Button, Box, Modal, TextField, Input, Typography, InputBase, IconButton, Paper } from "@mui/material";
import Popover from "@mui/material/Popover";
import "../App.css";
import { Node } from "../types";
const NodePopup = ({ selectedNode, handleClose, anchorEl, open, handleClearEmail, handleClick }: { selectedNode: Node }) => {
  const [email, setEmail] = useState("test");

  return (
    <Popover
      open={selectedNode}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{
        padding: 4,
        width: "600px",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Box justifyContent={"center"} flexDirection={"column"} width={"600px"} alignItems={"center"} p={2}>
        <Box justifyContent={"center"} flexDirection={"column"}>
          <Typography variant={"h4"} textAlign={"left"}>
            Prefill
          </Typography>
          {/* <button>button</button> */}
          <Box display={"flex"}>
            <Typography variant={"p"} marginRight={"auto"}>
              {" "}
              prefill data
            </Typography>
            <button>toggle</button>
          </Box>
        </Box>

        <Paper component="form" color="black" sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "2rem" }}>
          <InputBase
            placeholder="dynamic_checkbox_group"
            color="grey"
            sx={{
              borderRadius: "2px",
              border: "dotted",
              marginBottom: ".5em",
              width: "100%",
            }}
            onClick={handleClick}
          ></InputBase>
          <InputBase
            placeholder="dynamic_object"
            sx={{
              borderRadius: "2px",
              marginBottom: ".5em",
              border: "1px solid black",
              width: "100%",
            }}
          ></InputBase>
          <Box position={"relative"} width={"100%"} display={"flex"}>
            <InputBase
              placeholder="email"
              sx={{
                borderRadius: "9px",
                width: "100%",
                border: "1px solid black",
              }}
            ></InputBase>
            <IconButton
              onClick={handleClearEmail}
              aria-label="menu"
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              x
            </IconButton>{" "}
          </Box>
        </Paper>
      </Box>
    </Popover>
  );
};

export default NodePopup;

// <div>
//   <Modal open={true} onClose={() => {}} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//     <div
//       style={{
//         padding: 20,
//         backgroundColor: "white",
//         borderRadius: 8,
//         margin: "auto",
//         marginTop: "20vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h2 id="modal-modal-title">Prefill</h2>
//       <p id="modal-modal-sub-header">Prefill fields for this form</p>

//       <Input id="dynamic_checkbox_group" placeholder="dynamic_checkbox_group" value={""} />
//       <Input id="dynamic_object" placeholder="dynamic_object" value={""} />
//       <Input type="email" value={selectedNode.data.email} />
//       <Button variant="contained" color="primary" onClick={() => console.log("Save")}>
//         Save
//       </Button>
//     </div>
//   </Modal>
// </div>
