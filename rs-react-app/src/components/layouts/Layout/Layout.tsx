import { Component, type ReactNode } from 'react';
import { Footer, Header } from '@/components/ui';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export class Layout extends Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
