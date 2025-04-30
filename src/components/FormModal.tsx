import react, { useEffect, useState } from "react";

import { Box, Typography, InputBase } from "@mui/material";
import { Node } from "../types";
const FormModal = ({ selectedNode, transitiveNodes, directiveNodes, forms }: { selectedNode: Node }) => {
  const [directiveForm, setDirectiveForm] = useState();
  //   useEffect(() => {
  //     const directiveForm = [];
  //     directiveNodes.map(({ data }) => {
  //       forms.forEach(form => {
  //         if (data.component_key === form.id) {
  //           directiveForm.push(form);
  //         }
  //       });
  //     });
  //     setDirectiveForm(directiveForm);
  //   }, []);

  const directiveForms = [];
  directiveNodes.map(({ data }) => {
    forms.forEach(form => {
      if (data.component_key === form.id) {
        directiveForms.push(form);
      }
    });
  });

  return (
    <Box width={"50%"} position={"absolute"} left={0} top={0}>
      <Typography> hello from moda</Typography>

      <InputBase placeholder="search" />
    </Box>
  );
};

export default FormModal;
