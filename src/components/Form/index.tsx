import axios from 'axios';
import React, {FC, useState} from 'react';

const FormComp: FC<{}> = ({}) => {
    const [state, setState] = useState<{text:string}>({text: ''});

    async function handleAdd(e) {
        await setState({
            text: e?.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(state.text)
        let formData = new FormData();
        formData.append('text', state.text);
        const url = 'http://localhost:80/react-backend/';
        axios.post(url,formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }
    
    return (
        <div className="App">
            <input onChange={handleAdd}
            className='form-control' 
            type='text' id='text' 
            placeholder='enter some text' />
            <br/>

            <button onClick={handleSubmit}
            className='btn btn-success' 
            id='submit'> Save </button>
        </div>
    );
};

export default FormComp;
