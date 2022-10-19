import Select from 'react-select';

type Option = { label: string; value: string };

export type SelectFieldStatelessProps = {
  id: string;
  options: Option[];
  name: string;
};

const SelectFieldStateless = ({ id, options, name, ...rest }: SelectFieldStatelessProps) => {
  return (
    <div>
      <Select id={id} name={name} options={options} {...rest} />
    </div>
  );
};

export default SelectFieldStateless;
