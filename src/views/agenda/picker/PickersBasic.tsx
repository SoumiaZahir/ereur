// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

const PickersBasic = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())

  return (
    <DatePicker
      selected={date}
      id='basic-input'
      popperPlacement={popperPlacement}
      onChange={(date: Date) => setDate(date)}
      placeholderText='Click to select a date'
      customInput={<CustomInput label='Date De Visite' />}
    />
  )
}

export default PickersBasic
