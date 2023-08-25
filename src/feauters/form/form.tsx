import {Input} from '.../ui/input/input';
export const Form: React.FC = () => {
const [name, setName] = useState{''}

return <form>
  <Input type="text" labelText="username" value={name} onChange={({currentTarget})=> setName(currentTarget.value) />
</form>
}