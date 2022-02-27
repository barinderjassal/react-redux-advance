import { FC, Fragment, createElement} from 'react';
import { MainHeader } from './main-header';

export const Layout: FC = ({children}) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};
