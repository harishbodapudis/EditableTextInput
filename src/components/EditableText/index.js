import {Component} from 'react'
import {
  Container,
  EditBox,
  PageHeading,
  InputContainer,
  InputBox,
  SaveBtn,
  EditText,
  EditBtn,
} from './styledComponents'

class EditableText extends Component {
  state = {editable: false, editText: ''}

  changeStatus = () => {
    this.setState(prevState => this.setState({editable: !prevState.editable}))
  }

  render() {
    const {editable, editText} = this.state
    return (
      <Container>
        <EditBox>
          <PageHeading>Editable Text Input</PageHeading>

          {!editable ? (
            <InputContainer>
              <InputBox
                type="text"
                value={editText}
                onChange={e => this.setState({editText: e.target.value})}
              />
              <SaveBtn type="button" onClick={this.changeStatus}>
                Save
              </SaveBtn>
            </InputContainer>
          ) : (
            <InputContainer>
              <EditText>{editText}</EditText>
              <EditBtn type="button" onClick={this.changeStatus}>
                Edit
              </EditBtn>
            </InputContainer>
          )}
        </EditBox>
      </Container>
    )
  }
}

export default EditableText
