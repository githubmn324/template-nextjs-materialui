// MembersList is a Client Component
import MembersList from './GetMembersList'
// is a Serverside Component
import getMembers from '../../lib/getMembers'

type Member = {
  id: number
  name: string
  email: string
}

export default async function Memberslist() {
  console.log('###Memberslist entering')
  const members: Member[] = await getMembers()
  console.log({ members: members })

  return (
    <>
      <MembersList members={members} />
    </>
  )
}
