import { useDispatch } from "react-redux";

import { setNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value)); // Змінюємо фільтр
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleChange}
        className={styles.searchBox}
      />
    </div>
  );
};

export default SearchBox;
