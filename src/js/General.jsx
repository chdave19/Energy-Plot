import React, { useEffect } from 'react';
import EnergyPlot from './EnergyPlot';
import styled from 'styled-components';
import InputSection from './InputSection';
import { useState } from 'react';


const Container = styled.div`
   height: 100vh;
   /* background-color: red; */
   display: grid;
   grid-template-rows: 60% 40%;
`


function General() {
  const [generalData, setGeneralData] = useState({
    data: '',
    plot: false,
  })
  
  useEffect(()=>{
   console.log(generalData)
  }, [generalData])
    
  return (
    <Container>
     <EnergyPlot generalData={generalData}></EnergyPlot>
     <InputSection setGeneralData={setGeneralData}></InputSection>
    </Container>
  )
}

export default General
