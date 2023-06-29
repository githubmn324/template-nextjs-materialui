async function getKittens() {
  const res = await fetch('http://localhost:3000/api/kittens', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch kittens')
  }
  const data = await res.json()
  return data.kittens
}

export default getKittens
