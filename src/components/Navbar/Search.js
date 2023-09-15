import React, { useContext } from 'react'
import { passing, changing } from '../../pages/Home';
import styles from "./Search.module.css";

function Search() {
  const passed = useContext(passing);
  const changed = useContext(changing);
  return (
    <div>
        <form >
        <input className={`form-control ${styles.inputSpace}`} type="search" placeholder="Search" aria-label="Search" value={passed} onChange={changed} />
      </form>
    </div>
  )
}

export default Search