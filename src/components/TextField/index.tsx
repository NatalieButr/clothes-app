import { FC, ReactNode } from 'react';
import cn from 'classnames';

import './index.scss';

type TextFieldProps = {
  placeholder: string;
  name: string;
  icon?: ReactNode;
};

export const TextField: FC<TextFieldProps> = ({ placeholder, name, icon }) => {
  return (
    <div className="text-field">
      {icon && <div className="text-field__icon">{icon}</div>}
      <input
        className={cn('text-field__input', { 'text-field__input--icon': !!icon })}
        placeholder={placeholder}
        name={name}
        aria-label={name}
      />
    </div>
  );
};
