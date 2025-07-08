import { Component } from 'react';
import { Button } from '../Button';
import styles from './Search.module.scss';

export class Search extends Component {
  render() {
    return (
      <div className={styles['search-box']}>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <Button />
      </div>
    );
  }
}
