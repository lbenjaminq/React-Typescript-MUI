import React,{ useEffect, useState } from 'react'
import { Container, Button, Grid } from '@mui/material'
import { CardComponent, HeaderComponent } from '../../components'
import { characters } from '../../api/characters'
import { AppleType } from './Interface/apple.interface'

enum Status {
  PENDING= "PENDING",
  SUCCESS= "SUCCESS",
  REJECTED= "REJECTED"
}

export const HomePage:React.FC<{}> = () => {

  const [allNotices,setAllNotices] = useState<AppleType[]>([])
  const [status,setStatus] = useState<Status>(Status.PENDING)

  useEffect(()=>{
    characters.getAll()
    .then((response)=>{
      setStatus(Status.SUCCESS)
      setAllNotices(response.data.articles)
    })
    .catch((error)=> {
      setStatus(Status.REJECTED)
      console.log(error)
    })
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
            status === Status.SUCCESS ? (
              <Grid container spacing={2} direction="row">
                {allNotices.map((notice)=>(
                  <CardComponent author={notice.author} urlToImage={notice.urlToImage} content={notice.content}/>
                ))}
              </Grid>
            ) : ""
          }
        </div>
      </Container>
    )
}
