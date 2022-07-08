import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CATEGORIAS } from '../data/categorias';
import useNoticias from '../hooks/useNoticias';

const Form = () => {

  const { categoria, handleChangeCategory } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          onChange={handleChangeCategory}
          value={categoria}
        >
          {CATEGORIAS.map(categoria => (
            <MenuItem
              key={categoria.value}
              value={categoria.value}
            >
              {categoria.label}
            </MenuItem>
          ))}

        </Select>

      </FormControl>
    </form>
  )
}

export default Form