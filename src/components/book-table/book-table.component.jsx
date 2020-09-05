import React, {Fragment, useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TablePagination from '@material-ui/core/TablePagination';
import CircularLoading from '../circular-loading/circular-loading.component';
import {connect} from 'react-redux';
import {fetchBooks, removeBook} from '../../actions/books/book.actions';
import {createStructuredSelector} from 'reselect';
import {selectIsBookFetching, selectBookList} from '../../selectors/book.selectors';
import {useStyles, StyledTableRow, StyledTableCell} from './book-table.styles';

const BookTable = ({books, isFetching, fetchBooks, removeBook}) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">#</StyledTableCell>
              <StyledTableCell align="center">ISBN</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Author</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center" colSpan="2">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !isFetching ?
              books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book, index) => (
                    <StyledTableRow key={book._id}>
                      <StyledTableCell align="center">{++ index}</StyledTableCell>
                      <StyledTableCell align="center">{book.isbn}</StyledTableCell>
                      <StyledTableCell align="center">{book.title}</StyledTableCell>
                      <StyledTableCell align="center">{book.author}</StyledTableCell>
                      <StyledTableCell align="center">
                        {new Intl.NumberFormat('id-IN', {
                          style: 'currency',
                          currency: 'IDR',
                        }).format(book.price)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          color="primary"
                          variant="contained"
                          startIcon={<EditIcon/>}>Update</Button>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          color="secondary"
                          variant="contained"
                          startIcon={<DeleteIcon/>}
                          onClick={() => removeBook(book._id)}>Delete</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  )) : <CircularLoading/>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={3}>
        <TablePagination
          rowsPerPageOptions={[5, 8]}
          component="div"
          count={books.length}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}/>
      </Box>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsBookFetching,
  books: selectBookList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BookTable);
