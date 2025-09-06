export async function fetchCollection(collectionsName: string) {
    await new Promise(res => setTimeout(res, 1000))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const collections: Record<string, any> = {
        bags: { name: 'Bags', items: ['Bag1', 'Bag2'] },
        shoes: { name: 'Shoes', items: ['Shoe1', 'Shoe2'] },
        duffles: { name: 'Duffles', items: ['Duffles1', 'Duffles2'] },
    }

    if (!collections[collectionsName]) {
        throw new Error('Collection not found')
    }

    return collections[collectionsName]
}
