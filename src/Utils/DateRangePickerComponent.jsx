import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const DateRangePickerComponent = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });
  const handleSelect = (ranges) => {
    setValue(ranges.selection);
  }
  return (
    <DateRangePicker
      ranges={[value]}
      onChange={handleSelect}
    />
  );
}

export default DateRangePickerComponent