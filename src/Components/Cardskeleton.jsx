import React from "react";
import { Box, Skeleton } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Cardskeleton() {
  return (
    <Box sx={{m:4}}>

    <Stack spacing={2}>
      <Skeleton variant="rectangle"  height={20} width={400}/>
      <Skeleton variant="rectangle" height={400} width={400}/>
    </Stack>
    </Box>
  );
}
