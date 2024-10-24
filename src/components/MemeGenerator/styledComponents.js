import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
    display:flex;
    flex-direction:row;
    padding:40px;
`

export const MemeGeneratorInputsContainer = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:50%;
`

export const MemeGeneratorHeading = styled.h1`
    font-family:"Open Sans";
    color:#35469c;
    font-size:25px;
`
export const LabelImgUrl = styled.label`
    color:#7e858e;
    font-family:"Open Sans";
    font-size:16px;
`

export const InputImgUrl = styled.input`
    color:#1e293b;
    font-family:"Open Sans";
    border:1px solid #1e293b;
    padding:10px;
    width:70%;
    border-radius:8px;
    margin-bottom:25px;
    outline:none;
`
export const SelectFontSize = styled.select`
    color:#1e293b;
    font-family:"Open Sans";
    border:1px solid #1e293b;
    padding:10px;
    width:70%;
    border-radius:8px;
    margin-bottom:25px;
    outline:none;
`

export const MemeGeneratorGenerateButton = styled.button`
    font-family:"Open Sans";
    font-size:20px;
    padding:10px 40px 10px 40px;
    background-color: #0b69ff;
    border:1px solid  #0b69ff;
    border-radius:8px;
    outline:none;
    cursor:pointer;
    color:#ffffff;
`

export const MemeGeneratorOutputContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:50%;
    background-image:url(${props => props.imgUrl});
    background-size:cover;
    align-items:center;
`
export const MemeGeneratorTopText = styled.p`
    font-family:"Open Sans";
    color:#ffffff;
    font-size:${props => `${props.fontSize}px`}
`
