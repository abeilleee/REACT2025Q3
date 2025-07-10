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
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={this.onChange}
            value={this.state.searchTerm}
          />
        </div>
        <Button onClick={this.onClick} />
      </div>
    );
  }
}
