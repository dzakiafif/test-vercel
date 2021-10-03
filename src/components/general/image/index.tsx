import classNames from 'classnames';
import { FC } from 'react';

type ImageType = 'img-fluid' | 'img-thumbnail';

interface ImageProps {
  type?: ImageType;
  src?: string;
  className?: string;
}

const Image: FC<ImageProps> = ({
    className,
    type,
    src
}) => (
  <img 
  className={classNames({type}, className)}
  src={src}/>
);

export default Image;
