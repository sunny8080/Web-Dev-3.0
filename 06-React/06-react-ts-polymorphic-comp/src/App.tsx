import { useRef, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import CardExtended from './components/CardExtended'
import IconButton from './components/IconButton'
import EmojiIcon from './components/EmojiIcon'
import GenericList from './components/GenericList'
import PolymorphicContainer from './components/PolymorphicContainer'
import CustomInput from './components/CustomInput'
import CustomForm, { FormHandle } from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  const handleSave = (formData: unknown) => {
    console.log("saving form data");
    console.log(formData);
    customFormRef.current?.clear();
    customFormRef.current?.scrollIntoView();
  }

  return (
    <div>
      <h1>Hello</h1>

      {/* ComponentPropsWithoutRef and ComponentPropsWithRef */}
      <div>
        <p>ComponentPropsWithoutRef and ComponentPropsWithRef</p>
        <Input label='name' id='name' type='text' />
        <Input label='age' id='age' type='number' />
        {/* 
          Error - we can't use ref as we are using ComponentPropsWithRef
          <Input label='age' id='age' type='number' ref={abc} /> 
        */}
        <hr />
      </div>
      <br />
      <br />

      {/* Custom Component */}
      <div className='custom-component'>
        <Button1 el='a' href='https://www.google.com/' >Go to Google</Button1>
        <Button1 el='button' type='button'>My Button</Button1>
      </div>
      <hr />

      <br />
      <br />

      {/* Custom Component with predicate */}
      <p>Custom Component with predicate</p>
      <div className='custom-component'>
        <Button2 href='https://www.google.com/'>Go to Google again</Button2>
        <Button2>Go to Google 3rd time</Button2>
      </div>
      <hr />

      {/* Component having multiple slots */}
      <div>
        <p>CardExtended - having multiple slots</p>
        <CardExtended
          title='My Extended Card'
          actions={
            <button onClick={() => console.log("button clicked")} >Click Extra slot</button>
          }
        >
          <p>Children text</p>
        </CardExtended>
        <hr />
      </div>

      {/* Component that accepts as Component (or element) as props */}
      <div>
        <IconButton icon={EmojiIcon} onClick={() => console.log("Icon button clicked")} >
          Click Me!!
        </IconButton>
        <hr />
      </div>

      {/* A generic list component */}
      <div>
        <GenericList
          items={['Sunny', 'Shyam', 'piyush']}
          renderItem={(name: string, ind: number) => <li key={ind}>{name}</li>}
          notFoundMessage='No name found'
        />

        <GenericList
          items={[]}
          renderItem={(name: string, ind: number) => <li key={ind}>{name}</li>}
          notFoundMessage='No name found'
        />
        <hr />
      </div>

      {/* Polymorphic Component */}
      <div>
        <p>Polymorphic component</p>
        <PolymorphicContainer as='a' href='https://www.google.com/' style={{ color: 'red' }} >
          Go to Google
        </PolymorphicContainer>

        <PolymorphicContainer as='button'  >
          Click me
        </PolymorphicContainer>

        <PolymorphicContainer as='input' placeholder='Enter some text' />
        <hr />
      </div>

      {/* Controlled Custom Component - forwardRef  */}
      <div>
        <CustomInput label='Enter your name' id='name' type='text' ref={inputRef} />
        <hr />
      </div>

      {/* Controlled Custom Component - useImperativeHandle  */}
      <div>
        <CustomForm onSave={handleSave} ref={customFormRef} >
          <label>Enter book title</label>
          <input type="text" name='title' placeholder='Enter book title' />
          <button>Submit</button>
        </CustomForm>
        <hr />
      </div>
    </div>
  )
}


export default App
