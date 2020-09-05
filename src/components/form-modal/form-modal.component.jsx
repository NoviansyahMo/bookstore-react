import React from 'react';
import {useFormik} from 'formik';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarIcon from '@material-ui/icons/Star';
import InputField from '../input-field/input-field.component';
import {connect} from 'react-redux';
import {insertBook} from '../../actions/books/book.actions';
import {StyledButton} from './form-modal.styles';

const FormModal = ({open, handleClose, insertBook}) => {
  const book = useFormik({
    initialValues: {
      isbn: '',
      title: '',
      author: '',
      price: '',
      rating: '',
    },
    onSubmit: (values) => {
      insertBook(values);
    },
  });

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={open}
      onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Insert New Book</DialogTitle>
      <DialogContent>
        <form onSubmit={book.handleSubmit}>
          <Box display='flex' flexDirection='column'>
            <InputField
              label='ISBN'
              type='number'
              name='isbn'
              value={book.values.isbn}
              handleChange={book.handleChange}
              icon={<ViewWeekIcon/>}/>
            <InputField
              label='Title'
              type='text'
              name='title'
              value={book.values.title}
              handleChange={book.handleChange}
              icon={<MenuBookIcon/>}/>
            <InputField
              label='Author'
              type='text'
              name='author'
              value={book.values.author}
              handleChange={book.handleChange}
              icon={<PersonIcon/>}/>
            <InputField
              label='Price'
              type='number'
              name='price'
              value={book.values.price}
              handleChange={book.handleChange}
              icon={<AttachMoneyIcon/>}/>
            <InputField
              label='Rating'
              type='number'
              name='rating'
              value={book.values.rating}
              handleChange={book.handleChange}
              icon={<StarIcon/>}/>
            <StyledButton
              type='submit'
              variant='contained'
              size='large'
              color="primary"
              onClick={handleClose}>Submit</StyledButton>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch) => ({
  insertBook: (book) => dispatch(insertBook(book)),
});

export default connect(null, mapDispatchToProps)(FormModal);
