import SelectFieldStateless, { SelectFieldStatelessProps } from './SelectFieldStateless';

const SelectFieldAdapter = ({ id, options, name, ...rest }: SelectFieldStatelessProps) => {
  return <SelectFieldStateless id={id} name={name} options={options} {...rest} />;
};

export default SelectFieldAdapter;
