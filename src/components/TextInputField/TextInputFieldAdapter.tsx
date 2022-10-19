import { FieldProps } from 'formik';

import TextInputFieldStateless, { TextInputFieldStatelessProps } from './TextInputFieldStateless';

const TextInputFieldAdapter = (props: TextInputFieldStatelessProps & FieldProps) => {
  const { field, form, value, ...rest } = props;

  return <TextInputFieldStateless value={field.value} onBlur={field.onBlur} onChange={field.onChange} {...rest} />;
};

export default TextInputFieldAdapter;
