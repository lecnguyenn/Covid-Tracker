import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  FormControl: {
    margin: `${theme.spacing(3)}px 0`
  }
}))

export default function CountrySelector({value, handleOnChange, countries}) {
  const styles = useStyles(); 
  return (
      <FormControl className={styles.FormControl}>
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
                  <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
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
