import styled from 'styled-components'
import poppins from '../assets/Poppins-Light.ttf'

export const MainContainer = styled.main`
    width: 1474px;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
`

export const ScoreSection = styled.section`
    width: 500px;
    
`
export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
         @font-face {
            font-family: 'poppins';
            src: url(${poppins}) format('opentype');
            }
        
            font-family: 'poppins', sans-serif;
            font-size: 20px;
    }
`
export const ResultSubContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export const UrScore = styled.p`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   @font-face {
            font-family: 'poppins';
            src: url(${poppins}) format('opentype');
            }
        
            font-family: 'poppins', sans-serif;
            font-size: 19px;

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 112px;
                height: 36px;
                background-color: #FAC167;
                border-radius: 39px;
            }
`
export const UrId = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 56px;
    background-color: #2A586F;
    color: #ffffff;
    border-radius: 5.64px;
    @font-face {
            font-family: 'poppins';
            src: url(${poppins}) format('opentype');
            }
        
            font-family: 'poppins', sans-serif;
            font-size: 27.24px;
            font-weight: 600;

`
//feedback section

export const FeedbackSection = styled.section`
    width: 700px;
    height: 500px;
    background-color: #a9a9a9;
    

`
export const FeedContainer = styled.div`
    height: 372px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 30px;
    margin-top: 20px;
`
export const FeedContent = styled.div`

    @font-face {
            font-family: 'poppins';
            src: url(${poppins}) format('opentype');
            }
        
            font-family: 'poppins', sans-serif;
            h1{
                font-size: 16.65px;
                font-weight: 600;
            }
            h3{
                font-size: 19.98px;
            font-weight: 600;
            }
            p{
                font-size: 13.32px;
            font-weight: 500;
            }
`
export const RatingContent = styled.div`
display: flex;
align-items: center;
gap: 20px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 500px;
        height: 96px;
    }
    button {
        width: 333px;
        height: 36px;
        background-color: #2A586F;
        color: #ffffff;
    }
`
// export const  = styled
// export const  = styled