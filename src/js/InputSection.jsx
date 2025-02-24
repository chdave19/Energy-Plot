import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #373333;

`
const InitialSection = styled.section`
    display: grid;
    grid-template-rows: 10% 90%;
`
const FinalSection = styled.section`
    display: grid;
    grid-template-rows: 10% 75% 15%;
`
const RockProdSection = styled.section`
    display: grid;
    grid-template-rows: 10% 90%;
`
const Header = styled.h1`
    color: #ffffff;
    background-color: #3c3636;
    border: 2px solid #838080;
    z-index: 999;
    text-align: center;
`
const InputWrapper = styled.main`
   /* background-color: red;  */
   border: 1px solid #000;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`
const InputContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    border: 2px solid #000;
    background-color: #919191;
    padding-block: .5rem;
    gap: 2rem;
    padding-inline: 1rem;
    border-inline: none;
`
const SubmitButtonSection = styled.div`
    border: 1px solid #000;
    background-color: #646161;
    display: grid;
    place-content: center;
`
const Button = styled.button`
    cursor: pointer;
    padding: 6px;
    border: 2px solid #1d1a1a;
    outline: none;
    font-weight: bold;

    &:hover{
        background-color: #000000;
        color: #fff;
    }
`

const InputLabelWrapper = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;

    label{
        font-weight: bold;
    }
`
const Input = styled.input`
    width: 60px;
    outline: none;
    border: 2px solid #000;
    padding: 4px;
`
function InputSection({setGeneralData}) {
  const rock_prod_data = useRef({});
  const initial_stage_data = useRef({});
  const final_stage_data = useRef({});

  function collectData(){
    const Bti = Number(initial_stage_data.current.Boi.value);
    initial_stage_data.current.Bti.value = Bti;
    const Bt = Number(final_stage_data.current.Bo.value) + (Number(initial_stage_data.current.Rsi.value)-Number(final_stage_data.current.Rs.value))*Number(final_stage_data.current.Bg.value)
    final_stage_data.current.Bt.value = Bt;
    const data = {
        N: Number(rock_prod_data.current.N.value),
        M: Number(rock_prod_data.current.M.value),
        Np: Number(rock_prod_data.current.Np.value),
        Gp: Number(rock_prod_data.current.Gp.value),
        Wp: Number(rock_prod_data.current.Wp.value),
        Swi: Number(rock_prod_data.current.Swi.value),
        Cw: Number(rock_prod_data.current.Cw.value),
        Cf: Number(rock_prod_data.current.Cf.value),
        Boi: Bti,
        Rsi: Number(initial_stage_data.current.Rsi.value),
        Bgi: Number(initial_stage_data.current.Bgi.value),
        Bwi: Number(initial_stage_data.current.Bwi.value),
        Bti: Bti,
        Pi: Number(initial_stage_data.current.Pi.value),
        Bo: Number(final_stage_data.current.Bo.value),
        Rs: Number(final_stage_data.current.Rs.value),
        Bg: Number(final_stage_data.current.Bg.value),
        Bw: Number(final_stage_data.current.Bw.value),
        P: Number(final_stage_data.current.P.value),
        Bt: Bt
    }
    setGeneralData({plot: true, data: data})
  }

  useEffect(()=>{
  }, [])
  return (
    <Container>
    <RockProdSection>
    <Header>Rock & Production Section</Header>
     <InputWrapper>

     <InputContainer>
     <InputLabelWrapper>
     <label>OIIP, N (MMSTB)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.N = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>M (MMSCF/MMSTB)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.M = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>N<sub>p</sub> (MMSTB)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Np = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>G<sub>p</sub> (MMSCF)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Gp = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>W<sub>p</sub> (STB)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Wp = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>S<sub>wi</sub> (fraction)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Swi = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>C<sub>w</sub> (psi<sup>-1</sup>)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Cw = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>C<sub>f</sub> (psi<sup>-1</sup>)</label>
     <Input type='number' ref={(el=>(rock_prod_data.current.Cf = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>
     </InputWrapper>
    </RockProdSection> 

      <InitialSection>
      <Header>Initial Pressure Stage</Header>
      <InputWrapper>

      <InputContainer>
     <InputLabelWrapper>
     <label>B<sub>oi</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Boi = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>R<sub>si</sub> (SCF/STB)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Rsi = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>B<sub>gi</sub> (RB/SCF)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Bgi = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>B<sub>wi</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Bwi = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>P<sub>i</sub> (psia)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Pi = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>B<sub>ti</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(initial_stage_data.current.Bti = el))} disabled></Input>
     </InputLabelWrapper>
     </InputContainer>

      </InputWrapper>
      </InitialSection>

      <FinalSection>
      <Header>Final Pressure Stage</Header>
      <InputWrapper>
      <InputContainer>
     <InputLabelWrapper>
     <label>B<sub>o</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.Bo = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>R<sub>s</sub> (SCF/STB)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.Rs = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>B<sub>g</sub> (RB/SCF)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.Bg = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>B<sub>w</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.Bw = el))}></Input>
     </InputLabelWrapper>
     </InputContainer>

     <InputContainer>
     <InputLabelWrapper>
     <label>P<sub></sub> (psia)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.P = el))}></Input>
     </InputLabelWrapper>
     <InputLabelWrapper>
     <label>B<sub>t</sub> (RB/STB)</label>
     <Input type='number' ref={(el=>(final_stage_data.current.Bt = el))} disabled></Input>
     </InputLabelWrapper>
     </InputContainer>
      </InputWrapper>
      <SubmitButtonSection>
        <Button onClick={()=>{collectData()}}>Generate Plot</Button>
      </SubmitButtonSection>
      </FinalSection>
    </Container>
  )
}

export default InputSection
