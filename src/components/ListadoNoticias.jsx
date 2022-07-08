import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticias from "./Noticias";

const ListadoNoticias = () => {

  const { noticias, totalNoticias, handleChangePag, pagina } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias / 20); // redondeamos hacia arriba con ceil
  return (
    <>
      <Typography
        textAlign='center'
        marginY={5}
        variant='h3'
        component={'h2'}
      >
        Últimas Noticias
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {noticias.map(noticia => (
          <Noticias
            key={noticia.url}
            value={noticia.url}
            noticia={noticia} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        marginY={4}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Pagination
          page={pagina}
          count={totalPaginas}
          color='secondary'
          onChange={handleChangePag}
        />
      </Stack>
    </>
  )
}

export default ListadoNoticias