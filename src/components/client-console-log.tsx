"use client"

type Props = {
    data: any
}

function ClientConsoleLog(data: Props) {
    console.log(data)
  return (
    <div>client-console-log</div>
  )
}

export default ClientConsoleLog