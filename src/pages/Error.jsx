import React from 'react'

import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen w-full flex-col gap-2">
    <ion-icon size="large" name="alert-circle-outline"></ion-icon>
      <p>Desculpa, Essa página não existe.</p>
    </div>
  )
}

export default Error