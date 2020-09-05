import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles((theme) => ({
  root: {
    width: 350,
    marginTop: 10,
    marginBottom: 20,
  },
}))(Button);

export {StyledButton};
