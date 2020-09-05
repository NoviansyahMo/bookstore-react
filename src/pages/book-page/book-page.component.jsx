import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BookTable from '../../components/book-table/book-table.component';
import FormModal from '../../components/form-modal/form-modal.component';

const BookPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Paper>
          <Box
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={3}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon/>}
              onClick={handleClickOpen}>Insert</Button>;
          </Box>
          <Box
            paddingLeft={3}
            paddingRight={3}
            paddingBottom={3}>
            <BookTable/>
          </Box>
        </Paper>
      </Container>
      <FormModal
        open={open}
        handleClose={handleClose}/>
    </>
  );
};

export default BookPage;
