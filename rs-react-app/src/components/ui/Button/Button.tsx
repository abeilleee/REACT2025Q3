import { Component } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
};
export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  private handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button className={styles.button} onClick={this.handleClick}>
        Search
      </button>
    );
  }
}
