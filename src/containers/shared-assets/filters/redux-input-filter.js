import React from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const InputFilter = ({attribute, filter, multiple, handleInputChange}) => {
  const Option = Select.Option;

  const options = attribute.map(a=> (
      <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
  ));


  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select mode={multiple ? "multiple" : null}
                showSearch={multiple === false ? true : false}
                allowClear={multiple === false ? true : false}
                style={{width: "100%"}}
                placeholder={`${placeholder}...`}
                onChange={handleInputChange}>
          {options}
        </Select>
      </div>
  );
};

InputFilter.propTypes = {
  attribute: React.PropTypes.array,
  filter: React.PropTypes.string,
  multiple: React.PropTypes.bool,
  query: React.PropTypes.object
};


export default InputFilter;