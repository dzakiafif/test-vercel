import classNames from 'classnames';
import { FC } from 'react';

interface TitleProps {
  title: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ title, className }) => (
  <h1 className={classNames('', className)}>{title}</h1>
);

export default Title;
