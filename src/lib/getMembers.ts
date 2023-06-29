async function getMembers() {
  const res = await fetch('http://localhost:3000/api/members', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch members list')
  }
  const data = await res.json()
  return data
}

export default getMembers
