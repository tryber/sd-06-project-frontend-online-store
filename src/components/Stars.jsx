import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// sem criatividade para das nome as estrelas
const labels = {
  1: 'Mais ou Menos',
  2: 'Quebra um galho',
  3: 'Normal',
  4: 'Muito Bom',
  5: 'Demais da Conta',
};
// tamanho e posicionamento do nosso componente
const useStyles = makeStyles({
  root: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function Stars() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}