import React, { useState } from 'react'
import SuperInputText from '../../../main/ui/common/SuperInputText/SuperInputText'

const SuperInputTextDemo = () => {

    const [value, setValue] = useState('')

    return (
        <>
            <SuperInputText value={value} onChangeText={setValue}  placeholder="Basic" />
            <SuperInputText value={value} onChangeText={setValue} error="Some error message" placeholder="With error" />
        </>
    )
}

export default SuperInputTextDemo