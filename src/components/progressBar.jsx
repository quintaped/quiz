import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 500,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "red" : "#308fe8",
  },
}));

// export default function CustomizedProgressBars() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <BorderLinearProgress
//         variant="determinate"
//         value={20}
//         className="progress"
//       />
//     </Box>
//   );
// }
