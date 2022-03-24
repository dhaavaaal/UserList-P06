import styles from "./Pagination.module.css";

const Pagination = ({ paginate, currentPage }) => {
  const pageNumbers = [];
  //   console.log(totalPosts);
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className={number === currentPage ? styles.current : styles.cell}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
