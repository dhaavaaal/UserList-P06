const Pagination = ({ paginate }) => {
  const pageNumbers = [];
  //   console.log(totalPosts);
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav className='pagination'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
