export function InputForm(props: {label: string, name: string}) {
 return (
  <input name={props.name} placeholder={props.label} />
 ); 
}