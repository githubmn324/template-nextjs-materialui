import getKittens from '../../lib/getKittens'
import KittensList from './GetKittensList'

export default async function About() {
  const kittens = await getKittens()

  return (
    <>
      <KittensList kittens={kittens} />
    </>
  )
}
