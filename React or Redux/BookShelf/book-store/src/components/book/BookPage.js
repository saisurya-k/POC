import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    submitBook() {
        alert('Submitted');
    }

    render() {
        let titleInput;
        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {this.props.books.map((book, bookIndex) => <li key={bookIndex}>{book.title}</li>)}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={(evt) => {
                        evt.preventDefault();
                        let input = { title: titleInput };
                        this.submitBook(input);
                        evt.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);