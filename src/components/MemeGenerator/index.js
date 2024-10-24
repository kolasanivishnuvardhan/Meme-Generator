import {Component} from 'react'
import {
  MemeGeneratorHeading,
  MemeGeneratorContainer,
  MemeGeneratorInputsContainer,
  LabelImgUrl,
  InputImgUrl,
  SelectFontSize,
  MemeGeneratorGenerateButton,
  MemeGeneratorOutputContainer,
  MemeGeneratorTopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    showMeme: false,
  }

  onClickSubmitBtn = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  onChangeImageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: Number(event.target.value)})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, showMeme} = this.state
    return (
      <MemeGeneratorContainer>
        <MemeGeneratorInputsContainer onSubmit={this.onClickSubmitBtn}>
          <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
          <LabelImgUrl htmlFor="imageUrl">Image Url</LabelImgUrl>
          <InputImgUrl
            type="text"
            id="imageUrl"
            placeholder="Enter the Image Url"
            value={imgUrl}
            onChange={this.onChangeImageUrl}
          />
          <LabelImgUrl htmlFor="top-text">Top Text</LabelImgUrl>
          <InputImgUrl
            type="text"
            id="top-text"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.onChangeTopText}
          />
          <LabelImgUrl htmlFor="bottom-text">Bottom Text</LabelImgUrl>
          <InputImgUrl
            type="text"
            id="bottom-text"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
          <LabelImgUrl htmlFor="font-size">Font Size</LabelImgUrl>
          <SelectFontSize
            id="font-size"
            onChange={this.onChangeFontSize}
            value={fontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </SelectFontSize>
          <MemeGeneratorGenerateButton type="submit">Generate</MemeGeneratorGenerateButton>
        </MemeGeneratorInputsContainer>
        {showMeme && (
          <MemeGeneratorOutputContainer imgUrl={imgUrl} data-testid="meme">
            <MemeGeneratorTopText fontSize={fontSize}>
              {topText}
            </MemeGeneratorTopText>

            <MemeGeneratorTopText fontSize={fontSize}>
              {bottomText}
            </MemeGeneratorTopText>
          </MemeGeneratorOutputContainer>
        )}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
