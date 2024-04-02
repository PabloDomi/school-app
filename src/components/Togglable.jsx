import { forwardRef, useImperativeHandle, useState } from "react"
import { Button, Navbar } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
const Togglable =  forwardRef(({ children, buttonLabel = 'show', cancelButtonLabel = 'cancel'}, ref) => {
    const [visible, setVisible] = useState(false)
    let displayButtonLabel

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    if(buttonLabel === 'Sign Up') {
      displayButtonLabel = {alignItems: 'left'}
    } else if(buttonLabel === 'Login') {
      displayButtonLabel = {alignItems: 'right'}
    }

    const toggleVisibility = () => setVisible(!visible)

    useImperativeHandle(ref, () => {

        return {
            toggleVisibility
        }
    })

    return (
      <div>
        <div style={hideWhenVisible}>
          <Navbar className="position-fixed bottom-0 end-0 p-3">
            <div className="text-start" style={displayButtonLabel}>
              <Button variant="secondary" onClick={toggleVisibility} >
                  {buttonLabel}
              </Button>
            </div>
          </Navbar>
        </div>

      <div style={showWhenVisible}>
        {children}
        <Navbar className="position-fixed bottom-0 end-5 p-3">
          <Button variant="secondary" onClick={toggleVisibility}>
            {cancelButtonLabel}
          </Button>
        </Navbar>
        
      </div>

    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable