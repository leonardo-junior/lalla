type MainProps = {
  name: string
  age?: string
}

export const Main = ({name, age}: MainProps) => {
  return <div>Mt feliz que deu certo {name} {age}</div>
}

export default Main