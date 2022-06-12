import React from 'react'
import SuperButton from '../../main/ui/common/SuperButton/SuperButton'
import SuperCheckbox from '../../main/ui/common/SuperCheckbox/SuperCheckbox'
import SuperInputText from '../../main/ui/common/SuperInputText/SuperInputText'
import s from './ComponentsDemo.module.css'

const ComponentsDemo = () => {
  return (
    <div>
        <div className={s.section}>
            <h2>Buttons</h2>
            <div className={s.box}>
                <SuperButton btnStyle="primary">Primary</SuperButton>
                <SuperButton btnStyle="outline_primary">Outline Primary</SuperButton>
            </div>
                
            <div className={s.box}>
                <SuperButton btnStyle="dark">Dark</SuperButton>
                <SuperButton btnStyle="outline_dark">Outline Dark</SuperButton> 
            </div>
            
            <div className={s.box}>
                <SuperButton btnStyle="success">Success</SuperButton>
                <SuperButton btnStyle="outline_success">Outline Success</SuperButton>
            </div>
          
            <div className={s.box}>
                <SuperButton btnStyle="warning">Warning</SuperButton>
                <SuperButton btnStyle="outline_warning">Outline Warning</SuperButton>
            </div>
            
            <div className={s.box}>
                <SuperButton btnStyle="danger">Danger</SuperButton>
                <SuperButton btnStyle="outline_danger">Outline Danger</SuperButton>
            </div>
            
            <div>
                <SuperButton btnSize="large">Large</SuperButton>
                <SuperButton btnSize="medium">Medium</SuperButton>
                <SuperButton btnSize="small">Small</SuperButton>
                <SuperButton upperCase>Uppercase</SuperButton>
            </div>
            
        </div>

        <div className={s.section}>
            <h2>Text Input</h2>
            <SuperInputText />
        </div>

        <div className={s.section}>
            <h2>Checkbox</h2>
            <SuperCheckbox />
        </div>
    </div>
  )
}

export default ComponentsDemo