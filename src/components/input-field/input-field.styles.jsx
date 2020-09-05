import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const StyledLabel = withStyles((theme) => ({
  root: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
}))(InputLabel);

const StyledTextField = withStyles((theme) => ({
  root: {
    width: 350,
    marginBottom: 20,
  },
}))(OutlinedInput);

export {StyledTextField, StyledLabel};
