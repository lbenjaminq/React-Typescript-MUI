import React,{ useEffect, useState } from 'react'
import { Container, Button, Grid } from '@mui/material'
import { CardComponent, HeaderComponent } from '../../components'
import { characters } from '../../api/characters'
import { CharacterType } from './Interface/character.interface'

export const HomePage:React.FC<{}> = () => {

  const [allCharacters,setAllCharacters] = useState<CharacterType[] | null>(null)
  
  useEffect(()=>{
    characters.getAll({page:1})
    .then((response)=> setAllCharacters(response.data.results))
    .catch((error)=> console.log(error))
  },[])

  return (
      <Container sx={{mt:9}} maxWidth="xl">
        <HeaderComponent 
          title="Titulo" 
          description="Description" 
          element={<Button variant="contained">Hello</Button>}/>
        <Button>Show alert</Button>
        <div>
          {
            allCharacters?.length !== 0 ? (
              <Grid container spacing={2} direction="row">
                {
                  allCharacters?.map((character)=>(
                    <Grid item xs={3}>
                      <CardComponent  key={character.id} name={character.name}
                        img={character.image} status={character.status}
                      />
                    </Grid>
                  ))
                }
              </Grid>
            ) : ""
          }
        </div>
      </Container>
    )
}
