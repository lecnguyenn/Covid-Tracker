import { FormControl, FormHelperText, InputLabel, NativeSelect} from '@material-ui/core';
import React from 'react';

export default function CountrySelector({value, handleOnChange, countries}) {
    return (
      <FormControl>
          <InputLabel htmlFor="country-selector" shrink>Country</InputLabel>
          <NativeSelect
          value= {value}
          onChange={handleOnChange}
          inputProps={{
            name: 'country',
            id: 'country-selector'
          }}
          >
          {
            countries.map((country) =>{
              return (
                  <option value={country.ISO2.toLowerCase()}>
                    {country.Country}
                  </option>
              )
            })
          }
          </NativeSelect>
          <FormHelperText>Select</FormHelperText>
      </FormControl>
    )
}
