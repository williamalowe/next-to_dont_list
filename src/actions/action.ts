'use server'

import Dont from '@/models/Donts'

// const addDont = async dont => {
// 	const dont = dont.get('dont')
// 	const description = task.get('description')
// 	const score = task.get('score')

// 	const newDont = new Dont({ title, description, score })
// 	await newDont.save()
// }

const getDonts = async () => {
	return Dont.find()
}

export { getDonts }