import CheckboxComponent from './CheckboxComponent'
import TitleComponent from './TitleComponent';
import FileComponent from './FileComponent';
import DateComponent from './DateComponent';
import EmailComponent from './EmailComponent';

const typeComponentMap = {
  checkbox: CheckboxComponent,
  title: TitleComponent,
  files: FileComponent,
  date: DateComponent,
  email: EmailComponent,
};

const TypeComponent = ({ type, info }) => {
  const Component = typeComponentMap[type];

  return Component ? <Component info={info} /> : null;
};

export default TypeComponent;