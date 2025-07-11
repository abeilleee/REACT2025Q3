import { Component } from 'react';
import { Button } from '../Button';
import styles from './Search.module.scss';

type SearchProps = {
  onSearch: (searchTerm: string) => void;
};

type SearchState = {
  searchTerm: string;
};

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  private onClick = () => {
    this.props.onSearch(this.state.searchTerm);
  };

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <div className={styles['search-box']}>
        <input
          type="text"
          placeholder="Enter the full pokemon name"
          onChange={this.onChange}
          value={this.state.searchTerm}
        />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}
