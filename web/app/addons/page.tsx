import { getAddons } from './actions'
import { Addons } from './components'

export default async function AddonsPage(props: any) {
  console.log(props);
  const { addons } = await getAddons()
  return (
    <div>
      <h1>Addons</h1>
      <Addons addons={addons} />
    </div>
  )
}
