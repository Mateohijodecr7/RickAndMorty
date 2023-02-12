import React from "react";

const Pages = () => {
  const characters = this.props.contacts;
  const { currentPage, todosPerPage } = this.state;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = characters.slice(indexOfFirstTodo, indexOfLastTodo);


  const renderTodos = currentTodos.map((character, index) => {
    return <div className="col-md-2">
    <img src={character.image} className="img-thumbnail" alt="" />
    <div className="content">
      <h6 className="header">{character.name}</h6>
      <h6 className="header">status: {character.status}</h6>
      <h6 className="header">species: {character.species}</h6>

    </div>
  </div>
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(characters.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
      <li className="page-link"
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}

      </li>
      </ul>
      </nav>
    );
  });
return (
  <nav aria-label="Page navigation example">
  <div className="container">
    <div className="row">
    {renderTodos}
    </div>
    </div>
<ul className="pagination justify-content-center">
  <li onClick={this.decrement} className="page-link">
    <a aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span className="sr-only">Previous</span>
    </a>
  </li>
  {renderPageNumbers}
  <li onClick={this.increment} className="page-link">
    <a aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span className="sr-only">Next</span>
    </a>
  </li>
</ul>
</nav>
);
}
}
export default Pages;