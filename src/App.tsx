import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import useStyles from './styles'
import { ConverterBlock, CryptoTable } from "./components";

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} fixed maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}
export default App;
