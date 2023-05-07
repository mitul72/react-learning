import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
    <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {`${props.alert.type.toUpperCase()} : ${props.alert.message}`}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}